import { useState, memo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectLightbox from "@/components/ProjectLightbox";
import { ArrowRight, Eye, Filter, Sparkles } from "lucide-react";

// Import all project screenshots
import rockshineDesktop from "@/assets/projects/rockshinegroup-desktop.png";
import misspeoneyDesktop from "@/assets/projects/misspeony-desktop.png";
import eleevaarabicDesktop from "@/assets/projects/eleevaadhesive-arabic-desktop.png";
import jeddahDesktop from "@/assets/projects/jeddahautospareparts-desktop.png";
import shinewallDesktop from "@/assets/projects/shinewallstone-desktop.png";
import pixelhashDesktop from "@/assets/projects/pixelhashtech.png";
import silkspoolDesktop from "@/assets/projects/silkspool.png";
import eleevaDesktop from "@/assets/projects/eleevaadhesives.png";

const projects = [
  {
    id: 1,
    name: "Rock Shine Group",
    type: "Corporate",
    industry: "Wall Coatings & Textures",
    description: "Premium wall coatings manufacturer featuring multiple brands including Texture Coating, Italia, Chromatic, and Infinity.",
    workDone: ["Multi-brand Integration", "Premium Dark Theme", "Responsive Design"],
    url: "https://rockshinegroup.com/",
    desktop: rockshineDesktop,
  },
  {
    id: 2,
    name: "Miss Peony",
    type: "E-commerce",
    industry: "Skincare & Beauty",
    description: "Premium skincare brand with beautiful Shopify store featuring elegant product displays and seamless shopping experience.",
    workDone: ["Shopify Theme", "Mobile-First", "Payment Integration"],
    url: "https://misspeony.com/",
    desktop: misspeoneyDesktop,
  },
  {
    id: 3,
    name: "Eleeva Adhesive",
    type: "Corporate",
    industry: "Industrial Manufacturing",
    description: "Arabic RTL corporate website for industrial adhesives manufacturer with bilingual support and product specifications.",
    workDone: ["RTL Arabic Design", "Bilingual Support", "Product Catalog"],
    url: "https://eleevaadhesive.com/",
    desktop: eleevaarabicDesktop,
    isRTL: true,
  },
  {
    id: 4,
    name: "Jeddah Auto Parts",
    type: "E-commerce",
    industry: "Automotive Parts",
    description: "Premium automotive filters e-commerce store serving the Middle East with SuperMax brand products.",
    workDone: ["WooCommerce", "Product Filtering", "Multi-currency"],
    url: "https://jeddahautospareparts.com/",
    desktop: jeddahDesktop,
  },
  {
    id: 5,
    name: "Shine Wall Stone",
    type: "Business",
    industry: "Wall Finishes & Coatings",
    description: "Premium wall finishes company showcasing Nova Velvet Coating, Epoxy Coating, and various texture solutions.",
    workDone: ["Portfolio Gallery", "Service Pages", "Image Optimization"],
    url: "https://shinewallstone.com/",
    desktop: shinewallDesktop,
  },
  {
    id: 6,
    name: "Silks Pool",
    type: "E-commerce",
    industry: "Industrial Machinery Parts",
    description: "Industrial sewing machine parts distributor serving leading global brands with comprehensive product catalog.",
    workDone: ["WooCommerce", "Advanced Search", "Inventory Management"],
    url: "https://silkspool.com/",
    desktop: silkspoolDesktop,
  },
  {
    id: 7,
    name: "PixelHash Tech",
    type: "Tech",
    industry: "Digital Services",
    description: "Digital agency website with cutting-edge design showcasing creative services and portfolio.",
    workDone: ["Custom Theme", "Smooth Animations", "SEO Setup"],
    url: "https://pixelhashtech.com/",
    desktop: pixelhashDesktop,
  },
  {
    id: 8,
    name: "Eleeva Adhesives",
    type: "Corporate",
    industry: "Industrial Manufacturing",
    description: "Industrial adhesives manufacturer website establishing strong online presence with detailed product information.",
    workDone: ["Corporate Design", "Product Pages", "Lead Capture"],
    url: "https://eleevaadhesives.com/",
    desktop: eleevaDesktop,
  },
];

const categories = ["All", "E-commerce", "Corporate", "Business", "Tech"];

// Stats component
const StatsBar = memo(function StatsBar() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "8+", label: "Industries" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
      {stats.map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
          <div className="text-muted-foreground text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
});

const ProjectsPage = () => {
  const [lightboxProject, setLightboxProject] = useState<typeof projects[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  
  const currentIndex = lightboxProject ? projects.findIndex(p => p.id === lightboxProject.id) : -1;

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setLightboxProject(projects[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setLightboxProject(projects[currentIndex + 1]);
    }
  };

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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        
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
        
        {/* CollectionPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "WordPress Portfolio & Case Studies",
            "description": "A showcase of WordPress websites, e-commerce stores, and web development projects by Ahmed.",
            "url": "https://ahmedpixels.pro/projects",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": projects.length,
              "itemListElement": projects.map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": project.name,
                  "description": project.description,
                  "url": project.url,
                  "creator": { "@type": "Person", "name": "Ahmed" }
                }
              }))
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="container-custom px-4 md:px-8">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 text-primary font-semibold mb-4 uppercase tracking-wider text-sm"
            >
              <Eye size={16} />
              Portfolio Showcase
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-10">
              Real websites. Real results. Every project is a live, working website built for clients across industries.
            </p>
            
            <StatsBar />
          </motion.header>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full mr-2">
              <Filter size={14} className="text-primary" />
              <span className="text-sm font-medium text-foreground">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenLightbox={() => setLightboxProject(project)}
              />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.15)] bg-hero-bg">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-hero-bg via-section-dark to-primary/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
              
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm mb-6"
                >
                  <Sparkles size={16} />
                  Ready to Start?
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-text mb-4">
                  Your Website Could Be Next
                </h2>
                <p className="text-hero-muted max-w-2xl mx-auto mb-10 text-lg">
                  Let's discuss your project and create a website that drives real results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://wa.me/923216479192?text=Hi%20Ahmed%2C%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20a%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-shadow"
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
      
      {/* Lightbox Modal */}
      <ProjectLightbox
        project={lightboxProject}
        isOpen={!!lightboxProject}
        onClose={() => setLightboxProject(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < projects.length - 1}
      />
    </>
  );
};

export default ProjectsPage;
