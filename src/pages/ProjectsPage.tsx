import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, CheckCircle, ArrowRight } from "lucide-react";

import pixelhashtech from "@/assets/projects/pixelhashtech.png";
import shinewallstone from "@/assets/projects/shinewallstone.png";
import silkspool from "@/assets/projects/silkspool.png";
import jeddahautospareparts from "@/assets/projects/jeddahautospareparts.png";
import eleevaadhesives from "@/assets/projects/eleevaadhesives.png";
import misspeony from "@/assets/projects/misspeony.png";
import rockshinegroup from "@/assets/projects/rockshinegroup.png";

const projects = [
  {
    id: 1,
    name: "PixelHash Tech",
    type: "Tech Agency Website",
    shortDescription: "Digital agency website with modern design and seamless user experience.",
    fullDescription: "PixelHash Tech is a digital agency that needed a cutting-edge website to showcase their creative services. The challenge was to create a visually stunning site that would stand out in the competitive tech industry while maintaining excellent performance and SEO rankings.",
    challenge: "Create a modern, fast-loading website that represents a tech agency's innovative brand identity.",
    solution: "Built a custom WordPress theme with smooth animations, optimized images, and clean code architecture.",
    results: ["90+ PageSpeed Score", "40% More Inquiries", "Top 10 Rankings"],
    technologies: ["WordPress", "Custom Theme", "SEO", "Performance Optimization"],
    color: "from-orange-500 to-amber-500",
    url: "https://pixelhashtech.com/",
    screenshot: pixelhashtech,
  },
  {
    id: 2,
    name: "Shine Wall Stone",
    type: "Business Website",
    shortDescription: "Premium stone and marble company showcase with elegant product displays.",
    fullDescription: "Shine Wall Stone is a premium stone and marble supplier that required a sophisticated website to display their extensive product catalog. The site needed to highlight the quality and variety of their materials while providing an easy browsing experience for potential buyers.",
    challenge: "Showcase hundreds of stone and marble products in an organized, visually appealing manner.",
    solution: "Developed a catalog-style WordPress site with filterable galleries and detailed product pages.",
    results: ["Professional Brand Image", "Improved Customer Engagement", "Easy Product Navigation"],
    technologies: ["WordPress", "Product Catalog", "Responsive Design", "Image Optimization"],
    color: "from-blue-500 to-cyan-500",
    url: "https://shinewallstone.com/",
    screenshot: shinewallstone,
  },
  {
    id: 3,
    name: "Silks Pool",
    type: "E-commerce Store",
    shortDescription: "Industrial sewing machine parts distributor with comprehensive catalog.",
    fullDescription: "Silks Pool specializes in industrial sewing machine parts and needed a complete e-commerce solution. The website features a comprehensive product catalog with detailed specifications, making it easy for customers to find exactly what they need for their machines.",
    challenge: "Build an e-commerce platform for a niche industrial market with complex product specifications.",
    solution: "Created a WooCommerce store with advanced search, product filtering, and easy checkout process.",
    results: ["Complete Online Store", "Secure Payments", "Inventory Management"],
    technologies: ["WordPress", "WooCommerce", "Payment Gateway", "Product Management"],
    color: "from-amber-600 to-orange-600",
    url: "https://silkspool.com/",
    screenshot: silkspool,
  },
  {
    id: 4,
    name: "Jeddah Auto Spare Parts",
    type: "E-commerce Store",
    shortDescription: "Premium automotive filters e-commerce store with product catalog.",
    fullDescription: "Jeddah Auto Spare Parts is an automotive filters supplier serving customers in the Middle East. They needed a professional e-commerce platform to showcase their extensive range of oil, air, and fuel filters with easy ordering capabilities.",
    challenge: "Create an e-commerce site for automotive parts with easy product search and filtering.",
    solution: "Built a WooCommerce store with vehicle compatibility search and organized product categories.",
    results: ["Doubled Online Sales", "Regional Expansion", "Customer Satisfaction"],
    technologies: ["WordPress", "WooCommerce", "Product Filtering", "Multi-currency"],
    color: "from-purple-500 to-pink-500",
    url: "https://jeddahautospareparts.com/",
    screenshot: jeddahautospareparts,
  },
  {
    id: 5,
    name: "Eleeva Adhesives",
    type: "Corporate Website",
    shortDescription: "Industrial adhesives manufacturer website with product specifications.",
    fullDescription: "Eleeva Adhesives is an industrial adhesives manufacturer that required a professional corporate website. The site showcases their product range, manufacturing capabilities, and positions them as industry leaders in adhesive solutions.",
    challenge: "Establish a strong online presence for an industrial manufacturer with complex product offerings.",
    solution: "Designed a professional corporate site with detailed product pages and company information.",
    results: ["Enhanced Brand Authority", "Lead Generation", "Industry Credibility"],
    technologies: ["WordPress", "Corporate Design", "SEO", "Lead Capture"],
    color: "from-emerald-500 to-teal-500",
    url: "https://eleevaadhesives.com/",
    screenshot: eleevaadhesives,
  },
  {
    id: 6,
    name: "Miss Peony",
    type: "E-commerce Store",
    shortDescription: "Elegant floral and lifestyle e-commerce store with beautiful product displays.",
    fullDescription: "Miss Peony is a premium floral and lifestyle brand that needed a stunning e-commerce platform. The website showcases their beautiful products with an elegant design that matches their brand aesthetic and provides a seamless shopping experience.",
    challenge: "Create a visually stunning e-commerce site that reflects the elegance and beauty of a floral brand.",
    solution: "Built a WooCommerce store with custom design, product galleries, and intuitive navigation.",
    results: ["Increased Online Sales", "Brand Recognition", "Customer Engagement"],
    technologies: ["WordPress", "WooCommerce", "Custom Design", "Product Photography"],
    color: "from-pink-500 to-rose-500",
    url: "https://misspeony.com/",
    screenshot: misspeony,
  },
  {
    id: 7,
    name: "Rock Shine Group",
    type: "Corporate Website",
    shortDescription: "Premium stone and construction materials company with professional branding.",
    fullDescription: "Rock Shine Group is a leading construction materials company that required a professional corporate website. The site showcases their extensive range of stone products and construction services while establishing their authority in the industry.",
    challenge: "Present a construction materials company as an industry leader with a professional online presence.",
    solution: "Developed a corporate website with product catalogs, service pages, and company information.",
    results: ["Professional Brand Image", "B2B Lead Generation", "Industry Authority"],
    technologies: ["WordPress", "Corporate Design", "Product Catalog", "SEO"],
    color: "from-slate-500 to-gray-600",
    url: "https://rockshinegroup.com/",
    screenshot: rockshinegroup,
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>WordPress Portfolio & Case Studies | Ahmed - Developer Lahore</title>
        <meta 
          name="description" 
          content="Explore Ahmed's portfolio of 50+ WordPress websites, WooCommerce stores, and SEO projects. View detailed case studies with real results from tech sites to e-commerce stores." 
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://ahmedpixels.pro/projects" />
        <meta property="og:title" content="WordPress Portfolio & Case Studies | Ahmed" />
        <meta property="og:description" content="Explore 50+ WordPress websites, e-commerce stores, and SEO projects with detailed case studies and real results." />
        <meta property="og:url" content="https://ahmedpixels.pro/projects" />
        <meta property="og:image" content="https://ahmedpixels.pro/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WordPress Portfolio & Case Studies | Ahmed" />
        <meta name="twitter:image" content="https://ahmedpixels.pro/og-image.png" />
        <meta name="keywords" content="WordPress Portfolio, Web Development Projects, WooCommerce Examples, Case Studies, WordPress Developer Work" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ahmedpixels.pro/" },
              { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://ahmedpixels.pro/projects" }
            ]
          })}
        </script>
        
        {/* CollectionPage Schema for Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "WordPress Portfolio & Case Studies",
            "description": "A showcase of WordPress websites, e-commerce stores, and web development projects by Ahmed, a professional WordPress Developer in Lahore, Pakistan.",
            "url": "https://ahmedpixels.pro/projects",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Web Development Portfolio",
              "numberOfItems": 5,
              "itemListElement": projects.map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": project.name,
                  "description": project.fullDescription,
                  "url": project.url,
                  "creator": {
                    "@type": "Person",
                    "name": "Ahmed",
                    "url": "https://ahmedpixels.pro/"
                  },
                  "genre": project.type
                }
              }))
            }
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
            <span className="text-primary font-semibold mb-4 block uppercase tracking-wider text-sm">Portfolio & Case Studies</span>
            <h1 className="heading-xl text-hero-text mb-6">
              WordPress Projects That <span className="text-gradient">Deliver Results</span>
            </h1>
            <p className="text-hero-muted max-w-3xl mx-auto text-lg leading-relaxed">
              Explore my portfolio of successful WordPress websites, e-commerce stores, and SEO projects. 
              Each project showcases my commitment to quality, performance, and client satisfaction.
            </p>
          </motion.header>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-primary/10 border border-primary/20 rounded-3xl overflow-hidden hover:border-primary/40 hover:bg-primary/15 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)] transition-all duration-500">
                      <div className="h-64 md:h-80 relative overflow-hidden">
                        <img 
                          src={project.screenshot} 
                          alt={`${project.name} - ${project.type} website screenshot`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading={index < 2 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Overlay with CTA */}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          aria-label={`View ${project.name} live website`}
                        >
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 shadow-lg"
                          >
                            View Live Site <ExternalLink size={18} />
                          </motion.span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div>
                      <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${project.color} text-white mb-4`}>
                        {project.type}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-hero-text mb-4">{project.name}</h2>
                      <p className="text-hero-muted leading-relaxed">{project.fullDescription}</p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4">
                        <h3 className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Challenge</h3>
                        <p className="text-primary-light text-sm">{project.challenge}</p>
                      </div>
                      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4">
                        <h3 className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Solution</h3>
                        <p className="text-primary-light text-sm">{project.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-hero-text font-semibold mb-3">Key Results</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.results.map((result, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm">
                            <CheckCircle size={14} />
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-hero-muted text-sm mb-2">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/5 border border-primary/10 text-primary-light rounded-lg text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      View Live Project <ArrowRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="border-t border-border/10 mt-16" />
                )}
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.15)]">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-primary/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.1),transparent_50%)]" />
              
              {/* Corner Glow Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-text mb-4">
                  Ready for a Website Like These?
                </h2>
                <p className="text-hero-muted max-w-2xl mx-auto mb-10 text-lg">
                  Let's discuss your project and create a website that drives real results for your business.
                  Free consultation with no obligations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://wa.me/923216479192?text=Hi%20Ahmed%2C%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20a%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold px-10 py-4 rounded-full shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-shadow"
                  >
                    Start Your Project
                    <ArrowRight size={20} />
                  </motion.a>
                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary/40 text-hero-text font-bold px-10 py-4 rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                  >
                    Explore Services
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectsPage;
