import { memo, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

// Import static images instead of iframes
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

const projects = [
  {
    title: "PixelHash Tech",
    type: "Tech Website",
    description: "Digital agency website with modern design",
    url: "https://pixelhashtech.com/",
    desktop: pixelhashDesktop,
    mobile: pixelhashMobile,
  },
  {
    title: "Shine Wall Stone",
    type: "Business Website",
    description: "Premium stone and marble company showcase",
    url: "https://shinewallstone.com/",
    desktop: shinewallDesktop,
    mobile: shinewallMobile,
  },
  {
    title: "Silks Pool",
    type: "E-commerce Website",
    description: "Industrial sewing machine parts distributor",
    url: "https://silkspool.com/",
    desktop: silkspoolDesktop,
    mobile: silkspoolMobile,
  },
  {
    title: "Jeddah Auto Spare Parts",
    type: "E-commerce Website",
    description: "Premium automotive filters store",
    url: "https://jeddahautospareparts.com/",
    desktop: jeddahDesktop,
    mobile: jeddahMobile,
  },
  {
    title: "Eleeva Adhesives",
    type: "Corporate Website",
    description: "Industrial adhesives manufacturer website",
    url: "https://eleevaadhesives.com/",
    desktop: eleevaDesktop,
    mobile: eleevaMobile,
  },
];

const PhoneMockup = memo(({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative block cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded-3xl"
      aria-label={`View ${project.title} - ${project.type}`}
    >
      {/* Phone Frame */}
      <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-2xl mx-auto w-[220px] md:w-[260px] transition-transform duration-300 group-hover:-translate-y-2">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground rounded-b-2xl z-20" />
        
        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden h-[380px] md:h-[450px] relative bg-slate-900">
          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse" />
          )}
          
          {/* Static image instead of iframe */}
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
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <span className="px-4 py-2 bg-white text-black rounded-full font-semibold text-sm flex items-center gap-2">
              Visit Site <ExternalLink size={14} />
            </span>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-6 text-center">
        <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-primary text-sm font-medium mt-1">{project.type}</p>
        <p className="text-muted-foreground text-sm mt-2 max-w-[200px] mx-auto">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
});

PhoneMockup.displayName = "PhoneMockup";

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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider" id="portfolio-heading">
            Portfolio
          </span>
          <h2 className="heading-lg text-foreground mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            A showcase of websites I've built for clients across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12" role="list" aria-label="Portfolio projects">
          {projects.map((project, index) => (
            <PhoneMockup key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/923216479192?text=Hi%20Ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
            aria-label="Start your project - Contact Ahmed on WhatsApp"
          >
            Start Your Project
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
});

PortfolioSection.displayName = "PortfolioSection";

export default PortfolioSection;
