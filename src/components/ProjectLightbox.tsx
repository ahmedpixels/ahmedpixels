import { memo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  name: string;
  type: string;
  url: string;
  desktop: string;
  description: string;
}

interface ProjectLightboxProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

const ProjectLightbox = memo(function ProjectLightbox({ 
  project, 
  isOpen, 
  onClose, 
  onPrev, 
  onNext,
  hasPrev = false,
  hasNext = false
}: ProjectLightboxProps) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev && onPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
          
          {/* Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-700/50 bg-slate-800/50">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{project.name}</h3>
                <p className="text-primary text-sm">{project.type}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  Visit Site <ExternalLink size={14} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white transition-colors"
                  aria-label="Close lightbox"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="overflow-auto max-h-[calc(90vh-100px)] scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-slate-800">
              <img
                src={project.desktop}
                alt={`${project.name} full preview`}
                className="w-full h-auto"
              />
            </div>
            
            {/* Navigation Arrows */}
            {hasPrev && onPrev && (
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            {hasNext && onNext && (
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default ProjectLightbox;