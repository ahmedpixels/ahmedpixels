import { useState, memo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrowserMockup from "@/components/BrowserMockup";
import PhoneMockupSmall from "@/components/PhoneMockupSmall";
import ProjectLightbox from "@/components/ProjectLightbox";
import { ExternalLink, CheckCircle, ArrowRight, Globe, Code, Gauge } from "lucide-react";

// Import all project screenshots
import rockshineDesktop from "@/assets/projects/rockshinegroup-desktop.png";
import misspeoneyDesktop from "@/assets/projects/misspeony-desktop.png";
import eleevaarabicDesktop from "@/assets/projects/eleevaadhesive-arabic-desktop.png";
import jeddahDesktop from "@/assets/projects/jeddahautospareparts-desktop.png";
import shinewallDesktop from "@/assets/projects/shinewallstone-desktop.png";

// Mobile screenshots (using existing assets)
import pixelhashMobile from "@/assets/projects/pixelhashtech-mobile.png";
import shinewallMobile from "@/assets/projects/shinewallstone-mobile.png";
import silkspoolMobile from "@/assets/projects/silkspool-mobile.png";
import jeddahMobile from "@/assets/projects/jeddahautospareparts-mobile.png";
import eleevaMobile from "@/assets/projects/eleevaadhesives-mobile.png";

// Fallback desktop images for those without fresh captures
import pixelhashDesktop from "@/assets/projects/pixelhashtech.png";
import silkspoolDesktop from "@/assets/projects/silkspool.png";
import eleevaDesktop from "@/assets/projects/eleevaadhesives.png";

const projects = [
  {
    id: 1,
    name: "Rock Shine Group",
    type: "Corporate Website",
    industry: "Wall Coatings & Textures",
    description: "Premium wall coatings manufacturer featuring multiple brands including Texture Coating, Italia, Chromatic, and Infinity.",
    workDone: ["Multi-brand Integration", "Premium Dark Theme", "Responsive Design", "Brand Showcase"],
    technologies: ["WordPress", "Corporate Design", "Brand Integration"],
    results: ["Premium Brand Image", "Multi-Brand Integration"],
    url: "https://rockshinegroup.com/",
    desktop: rockshineDesktop,
    mobile: jeddahMobile,
    color: "from-amber-600 to-yellow-500",
  },
  {
    id: 2,
    name: "Miss Peony",
    type: "E-commerce Store",
    industry: "Skincare & Beauty",
    description: "Premium skincare brand with beautiful Shopify store featuring elegant product displays and seamless shopping experience.",
    workDone: ["Shopify Custom Theme", "Product Photography", "Mobile-First Design", "Payment Integration"],
    technologies: ["Shopify", "Custom Theme", "E-commerce"],
    results: ["Beautiful Brand Presence", "Smooth Shopping"],
    url: "https://misspeony.com/",
    desktop: misspeoneyDesktop,
    mobile: pixelhashMobile,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    name: "Eleeva Adhesive",
    type: "Corporate Website (Arabic)",
    industry: "Industrial Manufacturing",
    description: "Arabic RTL corporate website for industrial adhesives manufacturer with bilingual support and product specifications.",
    workDone: ["RTL Arabic Design", "Bilingual Support", "Product Catalog", "Lead Generation"],
    technologies: ["WordPress", "RTL Support", "Arabic SEO"],
    results: ["International Reach", "Arabic Market Entry"],
    url: "https://eleevaadhesive.com/",
    desktop: eleevaarabicDesktop,
    mobile: eleevaMobile,
    color: "from-red-500 to-orange-500",
    isRTL: true,
  },
  {
    id: 4,
    name: "Jeddah Auto Spare Parts",
    type: "E-commerce Store",
    industry: "Automotive Parts",
    description: "Premium automotive filters e-commerce store serving the Middle East with SuperMax brand products for reliability.",
    workDone: ["WooCommerce Store", "Product Filtering", "Vehicle Compatibility", "Multi-currency"],
    technologies: ["WordPress", "WooCommerce", "Product Filtering"],
    results: ["Doubled Online Sales", "Regional Expansion"],
    url: "https://jeddahautospareparts.com/",
    desktop: jeddahDesktop,
    mobile: jeddahMobile,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 5,
    name: "Shine Wall Stone",
    type: "Business Website",
    industry: "Wall Finishes & Coatings",
    description: "Premium wall finishes company showcasing Nova Velvet Coating, Epoxy Coating, and various texture solutions.",
    workDone: ["Portfolio Gallery", "Service Pages", "Contact Forms", "Image Optimization"],
    technologies: ["WordPress", "Product Catalog", "Responsive Design"],
    results: ["Professional Image", "Customer Engagement"],
    url: "https://shinewallstone.com/",
    desktop: shinewallDesktop,
    mobile: shinewallMobile,
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 6,
    name: "Silks Pool",
    type: "E-commerce Store",
    industry: "Industrial Machinery Parts",
    description: "Industrial sewing machine parts distributor serving leading global brands with comprehensive product catalog.",
    workDone: ["WooCommerce Store", "Advanced Search", "Product Specifications", "Inventory Management"],
    technologies: ["WordPress", "WooCommerce", "Product Management"],
    results: ["Complete Online Store", "Secure Payments"],
    url: "https://silkspool.com/",
    desktop: silkspoolDesktop,
    mobile: silkspoolMobile,
    color: "from-slate-600 to-blue-600",
  },
  {
    id: 7,
    name: "PixelHash Tech",
    type: "Tech Agency Website",
    industry: "Digital Services",
    description: "Digital agency website with cutting-edge design showcasing creative services and portfolio.",
    workDone: ["Custom WordPress Theme", "Smooth Animations", "Performance Optimization", "SEO Setup"],
    technologies: ["WordPress", "Custom Theme", "SEO"],
    results: ["90+ PageSpeed", "40% More Inquiries"],
    url: "https://pixelhashtech.com/",
    desktop: pixelhashDesktop,
    mobile: pixelhashMobile,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 8,
    name: "Eleeva Adhesives",
    type: "Corporate Website",
    industry: "Industrial Manufacturing",
    description: "Industrial adhesives manufacturer website establishing strong online presence with detailed product information.",
    workDone: ["Corporate Design", "Product Pages", "Lead Capture", "SEO Optimization"],
    technologies: ["WordPress", "Corporate Design", "Lead Capture"],
    results: ["Enhanced Authority", "Lead Generation"],
    url: "https://eleevaadhesives.com/",
    desktop: eleevaDesktop,
    mobile: eleevaMobile,
    color: "from-emerald-500 to-teal-500",
  },
];

// Project Showcase Block Component
const ProjectShowcase = memo(({ 
  project, 
  index, 
  onOpenLightbox 
}: { 
  project: typeof projects[0]; 
  index: number;
  onOpenLightbox: (project: typeof projects[0]) => void;
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group"
    >
      <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Preview Section - 70% */}
        <div className={`lg:col-span-8 relative ${!isEven ? 'lg:order-2' : ''}`}>
          {/* Desktop Browser Mockup */}
          <BrowserMockup
            screenshot={project.desktop}
            title={project.name}
            url={project.url}
            onOpenLightbox={() => onOpenLightbox(project)}
          />
          
          {/* Mobile Phone Overlay */}
          <motion.div 
            className={`absolute -bottom-6 ${isEven ? '-right-4 md:-right-8' : '-left-4 md:-left-8'} z-10`}
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <PhoneMockupSmall
              screenshot={project.mobile}
              title={project.name}
            />
          </motion.div>
          
          {/* RTL Badge */}
          {project.isRTL && (
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-primary/90 text-primary-foreground rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm">
              <Globe size={12} />
              Arabic RTL
            </div>
          )}
        </div>

        {/* Details Section - 30% */}
        <div className={`lg:col-span-4 space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
          {/* Category Badge */}
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${project.color} text-white`}>
            {project.type}
          </span>
          
          {/* Title */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {project.name}
            </h2>
            <p className="text-primary text-sm font-medium flex items-center gap-2">
              <Code size={14} />
              {project.industry}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          
          {/* Work Done */}
          <div>
            <h3 className="text-foreground text-sm font-semibold mb-3 uppercase tracking-wide">Key Work</h3>
            <ul className="space-y-2">
              {project.workDone.map((work, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <CheckCircle size={14} className="text-primary flex-shrink-0" />
                  {work}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Results */}
          <div className="flex flex-wrap gap-2">
            {project.results.map((result, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                <Gauge size={12} />
                {result}
              </span>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow w-full sm:w-auto"
          >
            View Live Website <ExternalLink size={16} />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
});

ProjectShowcase.displayName = "ProjectShowcase";

const ProjectsPage = () => {
  const [lightboxProject, setLightboxProject] = useState<typeof projects[0] | null>(null);
  const currentIndex = lightboxProject ? projects.findIndex(p => p.id === lightboxProject.id) : -1;

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
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container-custom px-6 md:px-12 lg:px-16 xl:px-24">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-primary font-semibold mb-4 block uppercase tracking-wider text-sm">
              Portfolio & Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Real Websites. <span className="text-gradient">Real Results.</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Every project here is a live, working website. Explore real client work across 
              industries—from e-commerce stores to corporate sites, including Arabic RTL designs.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "8+", label: "Industries Served" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.header>

          {/* Projects Showcase */}
          <div className="space-y-32 md:space-y-40">
            {projects.map((project, index) => (
              <ProjectShowcase 
                key={project.id} 
                project={project} 
                index={index}
                onOpenLightbox={setLightboxProject}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.15)]">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-primary/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.1),transparent_50%)]" />
              
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  These are real businesses.
                </h2>
                <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">
                  Your website could be next.
                </p>
                <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                  Let's discuss your project and create a website that drives real results for your business.
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
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-10 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all"
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
