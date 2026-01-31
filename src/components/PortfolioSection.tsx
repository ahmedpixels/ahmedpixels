import { memo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Import static images - Desktop
import pixelhashDesktop from "@/assets/projects/pixelhashtech.png";
import shinewallDesktop from "@/assets/projects/shinewallstone.png";
import silkspoolDesktop from "@/assets/projects/silkspool.png";
import jeddahDesktop from "@/assets/projects/jeddahautospareparts.png";

// Import static images - Mobile
import pixelhashMobile from "@/assets/projects/pixelhashtech-mobile.png";
import shinewallMobile from "@/assets/projects/shinewallstone-mobile.png";
import silkspoolMobile from "@/assets/projects/silkspool-mobile.png";
import jeddahMobile from "@/assets/projects/jeddahautospareparts-mobile.png";

const projects = [
  {
    title: "PixelHash Tech",
    type: "Tech Agency",
    description: "Digital agency with cutting-edge design",
    url: "https://pixelhashtech.com/",
    desktop: pixelhashDesktop,
    mobile: pixelhashMobile,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Shine Wall Stone",
    type: "Business Website",
    description: "Premium stone and marble showcase",
    url: "https://shinewallstone.com/",
    desktop: shinewallDesktop,
    mobile: shinewallMobile,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Silks Pool",
    type: "E-commerce Store",
    description: "Industrial sewing machine parts",
    url: "https://silkspool.com/",
    desktop: silkspoolDesktop,
    mobile: silkspoolMobile,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Jeddah Auto Parts",
    type: "E-commerce Store",
    description: "Premium automotive filters store",
    url: "https://jeddahautospareparts.com/",
    desktop: jeddahDesktop,
    mobile: jeddahMobile,
    gradient: "from-red-500 to-rose-600",
  },
];

// Desktop Project Card with Scrolling Screenshot
const DesktopProjectCard = memo(({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 group-hover:border-primary/50 transition-all duration-300">
        
        {/* Browser Frame */}
        <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2 border-b border-slate-700/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 ml-2">
            <div className="bg-slate-700/50 rounded-md px-3 py-1 text-xs text-slate-400 truncate max-w-[200px]">
              {project.url.replace('https://', '')}
            </div>
          </div>
        </div>

        {/* Screenshot Container with Scroll Effect */}
        <div className="relative h-[280px] overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {isInView && (
            <img
              src={project.desktop}
              alt={`${project.title} website preview`}
              className={`w-full object-cover object-top transition-all duration-[3s] ease-linear group-hover:object-bottom ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              decoding="async"
              onLoad={() => setIsLoaded(true)}
            />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
        </div>

        {/* Project Info */}
        <div className="relative p-5 bg-gradient-to-t from-slate-900 to-slate-900/80">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <span className={`inline-block mt-2 px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full`}>
                {project.type}
              </span>
              <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
                {project.description}
              </p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:scale-110"
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

DesktopProjectCard.displayName = "DesktopProjectCard";

// Mobile Project Card with Phone Mockup
const MobileProjectCard = memo(({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });
  const [isLoaded, setIsLoaded] = useState(false);

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
      {/* Glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
      
      {/* Card */}
      <div className="relative bg-slate-900/90 rounded-xl overflow-hidden border border-slate-700/50 p-4">
        {/* Phone Frame */}
        <div className="flex justify-center mb-3">
          <div className="relative w-[100px] h-[180px]">
            <div className="absolute inset-0 bg-foreground rounded-[16px] p-1 shadow-xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-foreground rounded-b-lg z-10" />
              {/* Screen */}
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                {!isLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {isInView && (
                  <img
                    src={project.mobile}
                    alt={`${project.title} mobile preview`}
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
        <div className="text-center">
          <h3 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors truncate">
            {project.title}
          </h3>
          <span className={`inline-block mt-1.5 px-2.5 py-0.5 bg-gradient-to-r ${project.gradient} text-white text-[10px] font-medium rounded-full`}>
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
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider" id="portfolio-heading">
            Portfolio
          </span>
          <h2 className="heading-lg text-foreground mt-4">
            Live <span className="text-gradient">Projects</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            {isMobile ? "Tap any project to visit the live website" : "Hover over each project to scroll through the live website preview"}
          </p>
        </motion.div>

        {/* Projects Grid */}
        {isMobile ? (
          <div className="grid grid-cols-2 gap-3" role="list" aria-label="Portfolio projects">
            {projects.map((project, index) => (
              <MobileProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8" role="list" aria-label="Portfolio projects">
            {projects.map((project, index) => (
              <DesktopProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">Want to see more projects?</p>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
});

PortfolioSection.displayName = "PortfolioSection";

export default PortfolioSection;
