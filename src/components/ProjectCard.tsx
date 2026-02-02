import { memo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Eye, Globe, CheckCircle } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    type: string;
    industry: string;
    description: string;
    workDone: string[];
    url: string;
    desktop: string;
    isRTL?: boolean;
  };
  index: number;
  onOpenLightbox: () => void;
}

const ProjectCard = memo(function ProjectCard({ project, index, onOpenLightbox }: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

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
      {/* Outer Glow Ring */}
      <motion.div 
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        animate={{ 
          scale: isHovered ? [1, 1.02, 1] : 1,
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
      
      {/* Main Card */}
      <div className="relative bg-card border-2 border-border group-hover:border-primary/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg group-hover:shadow-primary/20 group-hover:shadow-2xl">
        {/* Eye Icon Badge */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1.5 bg-background/95 rounded-full border border-border shadow-sm">
          <Eye size={14} className="text-primary" />
          <span className="text-xs font-semibold text-foreground">{project.type}</span>
        </div>
        
        {/* RTL Badge */}
        {project.isRTL && (
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-semibold">
            <Globe size={12} />
            Arabic
          </div>
        )}
        
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
              src={project.desktop}
              alt={`${project.name} website preview`}
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
          
          {/* Hover Overlay with Actions */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-end pb-6 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-3">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onOpenLightbox();
                }}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium text-sm flex items-center gap-2 hover:bg-white/30 transition-colors border border-white/30"
              >
                <Eye size={14} />
                Preview
              </button>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg hover:shadow-primary/50 transition-shadow"
              >
                View Live <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Project Info */}
        <div className="p-5 space-y-3">
          <div>
            <h3 className="font-bold text-foreground text-xl group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-primary text-sm font-medium mt-1">
              {project.industry}
            </p>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
          
          {/* Key Features */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.workDone.slice(0, 3).map((work, i) => (
              <span 
                key={i} 
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
              >
                <CheckCircle size={10} />
                {work}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default ProjectCard;
