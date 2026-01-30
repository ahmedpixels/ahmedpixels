import { memo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Monitor, Smartphone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Import static images
import pixelhashDesktop from "@/assets/projects/pixelhashtech.png";
import pixelhashMobile from "@/assets/projects/pixelhashtech-mobile.png";
import shinewallDesktop from "@/assets/projects/shinewallstone.png";
import shinewallMobile from "@/assets/projects/shinewallstone-mobile.png";
import silkspoolDesktop from "@/assets/projects/silkspool.png";
import silkspoolMobile from "@/assets/projects/silkspool-mobile.png";
import jeddahDesktop from "@/assets/projects/jeddahautospareparts.png";
import jeddahMobile from "@/assets/projects/jeddahautospareparts-mobile.png";
import eleevaDesktop from "@/assets/projects/eleevaadhesives.png";
import eleevaMobile from "@/assets/projects/eleevaadhesives-mobile.png";
import misspeoneyDesktop from "@/assets/projects/misspeony.png";
import rockshineDesktop from "@/assets/projects/rockshinegroup.png";

const projects = [
  {
    title: "PixelHash Tech",
    type: "Tech Agency",
    description: "Digital agency with cutting-edge design",
    url: "https://pixelhashtech.com/",
    desktop: pixelhashDesktop,
    mobile: pixelhashMobile,
    color: "from-violet-500/20 to-purple-600/20",
    accent: "violet",
  },
  {
    title: "Miss Peony",
    type: "Beauty E-commerce",
    description: "Skincare brand with elegant aesthetics",
    url: "https://misspeony.com/",
    desktop: misspeoneyDesktop,
    mobile: null,
    color: "from-pink-500/20 to-rose-600/20",
    accent: "pink",
  },
  {
    title: "Rock Shine Group",
    type: "Corporate Website",
    description: "Premium texture coating company",
    url: "https://rockshinegroup.com/",
    desktop: rockshineDesktop,
    mobile: null,
    color: "from-amber-500/20 to-orange-600/20",
    accent: "amber",
  },
  {
    title: "Shine Wall Stone",
    type: "Business Website",
    description: "Premium stone and marble showcase",
    url: "https://shinewallstone.com/",
    desktop: shinewallDesktop,
    mobile: shinewallMobile,
    color: "from-emerald-500/20 to-teal-600/20",
    accent: "emerald",
  },
  {
    title: "Silks Pool",
    type: "E-commerce Store",
    description: "Industrial sewing machine parts",
    url: "https://silkspool.com/",
    desktop: silkspoolDesktop,
    mobile: silkspoolMobile,
    color: "from-blue-500/20 to-cyan-600/20",
    accent: "blue",
  },
  {
    title: "Jeddah Auto Parts",
    type: "E-commerce Store",
    description: "Premium automotive filters store",
    url: "https://jeddahautospareparts.com/",
    desktop: jeddahDesktop,
    mobile: jeddahMobile,
    color: "from-red-500/20 to-rose-600/20",
    accent: "red",
  },
  {
    title: "Eleeva Adhesives",
    type: "Corporate Website",
    description: "Industrial adhesives manufacturer",
    url: "https://eleevaadhesives.com/",
    desktop: eleevaDesktop,
    mobile: eleevaMobile,
    color: "from-indigo-500/20 to-blue-600/20",
    accent: "indigo",
  },
];

// Interactive Project Card with Device Toggle
const ProjectCard = memo(({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });
  const hasMobile = project.mobile !== null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div 
        className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      
      {/* Card Container */}
      <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-primary/50 transition-all duration-300">
        
        {/* Device Toggle */}
        {hasMobile && (
          <div className="absolute top-4 right-4 z-20 flex gap-1 bg-slate-800/90 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={(e) => { e.preventDefault(); setShowMobile(false); }}
              className={`p-2 rounded-full transition-all ${!showMobile ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              aria-label="Show desktop view"
            >
              <Monitor size={14} />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); setShowMobile(true); }}
              className={`p-2 rounded-full transition-all ${showMobile ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              aria-label="Show mobile view"
            >
              <Smartphone size={14} />
            </button>
          </div>
        )}

        {/* Preview Container */}
        <div className="relative overflow-hidden">
          {/* Desktop Preview */}
          <div className={`relative transition-all duration-500 ${showMobile ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="aspect-[16/10] bg-slate-950 overflow-hidden">
              {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              {isInView && (
                <img
                  src={project.desktop}
                  alt={`${project.title} website preview`}
                  className={`w-full h-full object-cover object-top transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-105' : 'scale-100'}`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setIsLoaded(true)}
                />
              )}
            </div>
          </div>

          {/* Mobile Preview - Positioned absolutely */}
          {hasMobile && showMobile && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
              <div className="relative w-[140px] h-[280px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-foreground rounded-[24px] p-1.5 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-foreground rounded-b-xl z-10" />
                  <div className="w-full h-full rounded-[20px] overflow-hidden bg-slate-900">
                    <img
                      src={project.mobile!}
                      alt={`${project.title} mobile preview`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hover Overlay with CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent flex items-end justify-center pb-6 pointer-events-none"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
            >
              Visit Live Site <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <span className="inline-block mt-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {project.type}
              </span>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 text-muted-foreground hover:text-primary hover:bg-slate-700 transition-all"
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
          </div>
          <p className="text-muted-foreground text-sm mt-3">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

// Mobile Project Card - Simplified for touch
const MobileProjectCard = memo(({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative block"
    >
      {/* Card */}
      <div className="relative bg-slate-900/80 rounded-xl overflow-hidden border border-slate-700/50">
        {/* Phone Frame */}
        <div className="flex justify-center py-4 bg-gradient-to-b from-slate-800/50 to-transparent">
          <div className="relative w-[100px] h-[180px]">
            <div className="absolute inset-0 bg-foreground rounded-[16px] p-1 shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-foreground rounded-b-lg z-10" />
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                {!isLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {isInView && (
                  <img
                    src={project.mobile || project.desktop}
                    alt={`${project.title} preview`}
                    className={`w-full h-full object-cover object-top transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setIsLoaded(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="px-3 pb-3 text-center">
          <h3 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors truncate">
            {project.title}
          </h3>
          <span className="inline-block mt-1 px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded-full">
            {project.type}
          </span>
        </div>
      </div>
    </motion.a>
  );
});

MobileProjectCard.displayName = "MobileProjectCard";

const PortfolioSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section id="portfolio" className="section-padding bg-section-light relative overflow-hidden" ref={ref} aria-labelledby="portfolio-heading">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider" id="portfolio-heading">
            Portfolio
          </span>
          <h2 className="heading-lg text-foreground mt-4">
            Live <span className="text-gradient">Projects</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Explore my latest work — real websites built for real businesses, performing live on the web.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{projects.length}+</div>
              <div className="text-sm text-muted-foreground">Live Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {isMobile ? (
          <div className="grid grid-cols-2 gap-3" role="list" aria-label="Portfolio projects">
            {projects.map((project, index) => (
              <MobileProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Portfolio projects">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">Want a website like these?</p>
          <a
            href="https://wa.me/923216479192?text=Hi%20Ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
            aria-label="Start your project - Contact Ahmed on WhatsApp"
          >
            Let's Build Yours
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
});

PortfolioSection.displayName = "PortfolioSection";

export default PortfolioSection;
