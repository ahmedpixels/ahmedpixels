import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts, getAllCategories } from "@/data/blogPosts";

const BlogPage = () => {
  const categories = getAllCategories();
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>WordPress & SEO Blog | Tips, Guides & Tutorials - Ahmed</title>
        <meta 
          name="description" 
          content="Learn WordPress development, SEO optimization, and web design with practical guides and tutorials. Expert tips from a professional WordPress developer in Lahore." 
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://ahmedpixels.pro/blog" />
        <meta property="og:title" content="WordPress & SEO Blog | Ahmed - Developer Tips & Guides" />
        <meta property="og:description" content="Learn WordPress development, SEO optimization, and web design with practical guides and tutorials." />
        <meta property="og:url" content="https://ahmedpixels.pro/blog" />
        <meta property="og:image" content="https://ahmedpixels.pro/og-image.png" />
        <meta property="og:type" content="blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WordPress & SEO Blog | Ahmed" />
        <meta name="twitter:image" content="https://ahmedpixels.pro/og-image.png" />
        <meta name="keywords" content="WordPress Blog, SEO Tips, Web Development Guides, WordPress Tutorials, SEO Guide, WooCommerce Tips" />
        
        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Ahmed's WordPress & SEO Blog",
            "description": "Expert tips, guides, and tutorials on WordPress development, SEO optimization, and web design.",
            "url": "https://ahmedpixels.pro/blog",
            "author": {
              "@type": "Person",
              "name": "Ahmed",
              "url": "https://ahmedpixels.pro"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://ahmedpixels.pro/blog/${post.slug}`,
              "datePublished": post.publishedAt,
              "author": {
                "@type": "Person",
                "name": "Ahmed"
              }
            }))
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ahmedpixels.pro/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://ahmedpixels.pro/blog" }
            ]
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-hero-bg pt-32 pb-20">
        <div className="container-custom px-6 md:px-12 lg:px-16 xl:px-24">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block uppercase tracking-wider text-sm">Blog & Resources</span>
            <h1 className="heading-xl text-hero-text mb-6">
              WordPress & SEO <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-hero-muted max-w-3xl mx-auto text-lg leading-relaxed">
              Practical tips, in-depth guides, and expert tutorials to help you build better websites 
              and rank higher on Google. Learn from real project experience.
            </p>
          </motion.header>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
              All Posts
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 rounded-full text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </motion.div>

          {/* Featured Post */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Link to={`/blog/${featuredPost.slug}`} className="block group">
              <div className="bg-gradient-to-br from-primary/10 via-card/50 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(249,115,22,0.15)] transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                      <Tag size={14} />
                      Featured Article
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-hero-muted text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={16} />
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={16} />
                        {featuredPost.readTime} min read
                      </span>
                      <span className="px-3 py-1 bg-white/5 rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={18} />
                    </span>
                  </div>
                  <div className="hidden lg:block">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-orange-600/20 rounded-2xl flex items-center justify-center">
                      <span className="text-6xl">📝</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Other Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="block group h-full">
                  <div className="bg-card/50 border border-border/20 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300 h-full flex flex-col">
                    {/* Post Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-orange-600/10 flex items-center justify-center">
                      <span className="text-5xl">
                        {post.category === "WordPress" ? "🔧" : post.category === "SEO" ? "📈" : "🛒"}
                      </span>
                    </div>
                    
                    {/* Post Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-primary text-sm font-medium">{post.category}</span>
                        <span className="text-white/40">•</span>
                        <span className="text-white/50 text-sm">{post.readTime} min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border/10">
                        <span className="text-white/50 text-sm flex items-center gap-1.5">
                          <Calendar size={14} />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Read <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-card/50 border border-border/20 rounded-3xl p-10 md:p-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Want More WordPress & SEO Tips?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Get practical guides delivered to your inbox. No spam, just actionable advice to grow your online presence.
              </p>
              <motion.a
                href="https://wa.me/923216479192?text=Hi%20Ahmed%2C%20I%20want%20to%20learn%20more%20about%20WordPress%20and%20SEO"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-orange-600 text-primary-foreground font-bold px-8 py-4 rounded-full shadow-lg"
              >
                Get in Touch
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;
