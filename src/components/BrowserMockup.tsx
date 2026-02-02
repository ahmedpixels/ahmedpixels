import { memo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Maximize2 } from "lucide-react";

interface BrowserMockupProps {
  screenshot: string;
  title: string;
  url: string;
  onOpenLightbox: () => void;
}

const BrowserMockup = memo(function BrowserMockup({ screenshot, title, url, onOpenLightbox }: BrowserMockupProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <div 
      ref={ref}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser Frame - Clean Card Style */}
      <div className="relative bg-card rounded-xl shadow-xl overflow-hidden border border-border">
        {/* Browser Header */}
        <div className="bg-muted px-4 py-3 flex items-center gap-3 border-b border-border">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          
          {/* URL Bar */}
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-background rounded-md px-4 py-1.5 text-xs text-muted-foreground font-mono flex items-center gap-2 max-w-md w-full justify-center border border-border">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="truncate">{url.replace('https://', '').replace('http://', '')}</span>
            </div>
          </div>
          
          {/* Menu Dots */}
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          </div>
        </div>
        
        {/* Screen Content - Sharp, No Blur */}
        <div className="relative h-[320px] md:h-[400px] lg:h-[480px] overflow-hidden bg-muted">
          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          )}
          
          {/* Screenshot - Full Clarity, No Effects */}
          {isInView && (
            <motion.img
              src={screenshot}
              alt={`${title} website preview`}
              className={`w-full object-cover object-top transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                height: 'auto',
                minHeight: '100%',
              }}
              animate={{
                y: isHovered ? "-30%" : "0%"
              }}
              transition={{
                duration: 3,
                ease: "easeInOut"
              }}
              loading="lazy"
              decoding="async"
              onLoad={() => setIsLoaded(true)}
            />
          )}
          
          {/* Hover Overlay with Actions - Clean Gradient, No Blur */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-3">
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg"
              >
                Visit Site <ExternalLink size={16} />
              </motion.a>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/20 text-white rounded-full font-semibold text-sm flex items-center gap-2 border border-white/30 hover:bg-white/30 transition-colors"
              >
                Full Preview <Maximize2 size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default BrowserMockup;
