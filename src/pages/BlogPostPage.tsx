import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, Share2, Linkedin, Twitter } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Get next and previous posts
  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const shareUrl = `https://ahmedpixels.pro/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | Ahmed - WordPress Developer Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={`https://ahmedpixels.pro/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://ahmedpixels.pro/blog/${post.slug}`} />
        <meta property="og:image" content="https://ahmedpixels.pro/og-image.png" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content="Ahmed" />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content="https://ahmedpixels.pro/og-image.png" />
        
        {/* Keywords */}
        <meta name="keywords" content={post.tags.join(", ")} />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": "https://ahmedpixels.pro/og-image.png",
            "author": {
              "@type": "Person",
              "name": "Ahmed",
              "url": "https://ahmedpixels.pro",
              "jobTitle": "WordPress Developer & SEO Specialist"
            },
            "publisher": {
              "@type": "Person",
              "name": "Ahmed",
              "url": "https://ahmedpixels.pro"
            },
            "datePublished": post.publishedAt,
            "dateModified": post.publishedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://ahmedpixels.pro/blog/${post.slug}`
            },
            "keywords": post.tags.join(", "),
            "articleSection": post.category,
            "wordCount": post.content.split(/\s+/).length
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ahmedpixels.pro/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://ahmedpixels.pro/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://ahmedpixels.pro/blog/${post.slug}` }
            ]
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-hero-bg pt-32 pb-20">
        <article className="container-custom px-6 md:px-12 lg:px-16 xl:px-24">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-white/80 truncate max-w-[200px]">{post.title}</li>
            </ol>
          </motion.nav>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-white/50 text-sm flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime} min read
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-hero-muted text-lg md:text-xl leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="text-left">
                  <div className="text-white font-medium">Ahmed</div>
                  <div className="text-xs">WordPress Developer</div>
                </div>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} />
                {formatDate(post.publishedAt)}
              </span>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card/30 border border-border/20 rounded-3xl p-6 md:p-10 lg:p-12">
              <div className="prose prose-lg prose-invert max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-primary
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-white/80 prose-ol:text-white/80
                prose-li:mb-2
                prose-code:bg-white/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-primary
                prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
                prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-table:text-white/80
                prose-th:text-white prose-th:bg-white/5 prose-th:p-3
                prose-td:p-3 prose-td:border-white/10
              ">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Tag size={18} className="text-white/50" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 text-white/70 rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-white/60">
                <Share2 size={18} />
                Share this article
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#1DA1F2]/20 border border-white/10 hover:border-[#1DA1F2]/50 rounded-full flex items-center justify-center text-white/60 hover:text-[#1DA1F2] transition-all"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/50 rounded-full flex items-center justify-center text-white/60 hover:text-[#0A66C2] transition-all"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Post Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12 grid sm:grid-cols-2 gap-4"
          >
            {prevPost && (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group bg-card/30 border border-border/20 rounded-2xl p-6 hover:border-primary/30 transition-all"
              >
                <span className="text-white/50 text-sm flex items-center gap-1 mb-2">
                  <ArrowLeft size={14} />
                  Previous Article
                </span>
                <h4 className="text-white font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {prevPost.title}
                </h4>
              </Link>
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group bg-card/30 border border-border/20 rounded-2xl p-6 hover:border-primary/30 transition-all sm:text-right"
              >
                <span className="text-white/50 text-sm flex items-center gap-1 mb-2 sm:justify-end">
                  Next Article
                  <ArrowRight size={14} />
                </span>
                <h4 className="text-white font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {nextPost.title}
                </h4>
              </Link>
            )}
          </motion.nav>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-16"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Related Articles
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-card/30 border border-border/20 rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all"
                  >
                    <span className="text-primary text-sm font-medium">{relatedPost.category}</span>
                    <h4 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-white/60 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="bg-gradient-to-br from-primary/10 via-card/50 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need Help With Your Website?
              </h3>
              <p className="text-white/70 max-w-xl mx-auto mb-6">
                Whether you need a new WordPress website, SEO optimization, or technical support, 
                I'm here to help your business succeed online.
              </p>
              <motion.a
                href="https://wa.me/923216479192?text=Hi%20Ahmed%2C%20I%20read%20your%20blog%20and%20need%20help%20with%20my%20website"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-orange-600 text-primary-foreground font-bold px-8 py-4 rounded-full shadow-lg"
              >
                Let's Talk
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.section>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPostPage;
