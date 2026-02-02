import { memo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import static images
import pixelhashDesktop from "@/assets/projects/pixelhashtech.png";
import shinewallDesktop from "@/assets/projects/shinewallstone-desktop.png";
import silkspoolDesktop from "@/assets/projects/silkspool.png";
import jeddahDesktop from "@/assets/projects/jeddahautospareparts-desktop.png";
import eleevaDesktop from "@/assets/projects/eleevaadhesives.png";
import rockshineDesktop from "@/assets/projects/rockshinegroup-desktop.png";

const projects = [
  {
    title: "Rock Shine Group",
    type: "Corporate Website",
    description: "Premium wall coatings manufacturer",
    url: "https://rockshinegroup.com/",
    screenshot: rockshineDesktop,
  },
  {
    title: "PixelHash Tech",
    type: "Tech Website",
    description: "Digital agency with modern design",
    url: "https://pixelhashtech.com/",
    screenshot: pixelhashDesktop,
  },
  {
    title: "Shine Wall Stone",
    type: "Business Website",
    description: "Premium stone and marble showcase",
    url: "https://shinewallstone.com/",
    screenshot: shinewallDesktop,
  },
  {
    title: "Silks Pool",
    type: "E-commerce Website",
    description: "Industrial sewing machine parts",
    url: "https://silkspool.com/",
    screenshot: silkspoolDesktop,
  },
  {
    title: "Jeddah Auto Parts",
    type: "E-commerce Website",
    description: "Premium automotive filters store",
    url: "https://jeddahautospareparts.com/",
    screenshot: jeddahDesktop,
  },
  {
    title: "Eleeva Adhesives",
    type: "Corporate Website",
    description: "Industrial adhesives manufacturer",
    url: "https://eleevaadhesives.com/",
    screenshot: eleevaDesktop,
  },
];

const EyeFrameCard = memo(({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative block cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded-2xl"
      aria-label={`View ${project.title} - ${project.type}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Eye Frame Container */}
      <div className="relative">
        {/* Outer Glow Ring */}
        <motion.div 
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
          animate={{ 
            scale: isHovered ? [1, 1.02, 1] : 1,
          }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />
        
        {/* Main Frame */}
        <div className="relative bg-card border-2 border-border group-hover:border-primary/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg group-hover:shadow-primary/20 group-hover:shadow-2xl">
          {/* Eye Icon Header */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1.5 bg-background/90 rounded-full border border-border">
            <Eye size={14} className="text-primary" />
            <span className="text-xs font-medium text-foreground">{project.type}</span>
          </div>
          
          {/* Screenshot Container */}
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            {/* Loading Skeleton */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              </div>
            )}
            
            {/* Screenshot - Full Clarity */}
            {isInView && (
              <motion.img
                src={project.screenshot}
                alt={`${project.title} website preview`}
                className={`w-full h-full object-cover object-top transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
              />
            )}
            
            {/* Hover Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg">
                View Live <ExternalLink size={14} />
              </span>
            </motion.div>
          </div>
          
          {/* Project Info Footer */}
          <div className="p-4 bg-card border-t border-border">
            <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors mb-1">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
});

EyeFrameCard.displayName = "EyeFrameCard";

const PortfolioSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding bg-section-light" ref={ref} aria-labelledby="portfolio-heading">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <Eye size={16} />
            Portfolio
          </span>
          <h2 className="heading-lg text-foreground mt-2" id="portfolio-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            A showcase of websites I've built for clients across various industries.
          </p>
        </motion.div>

        {/* Projects Grid - 3 Columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Portfolio projects">
          {projects.map((project, index) => (
            <EyeFrameCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/923216479192?text=Hi%20Ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
            aria-label="Start your project - Contact Ahmed on WhatsApp"
          >
            Start Your Project
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
});

PortfolioSection.displayName = "PortfolioSection";

export default PortfolioSection;
