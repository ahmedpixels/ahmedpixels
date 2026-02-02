import { memo, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface PhoneMockupSmallProps {
  screenshot: string;
  title: string;
}

const PhoneMockupSmall = memo(function PhoneMockupSmall({ screenshot, title }: PhoneMockupSmallProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <div ref={ref} className="relative">
      {/* Phone Frame */}
      <div className="relative bg-slate-900 rounded-[2rem] p-1.5 shadow-2xl shadow-black/50 w-[140px] md:w-[160px]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-900 rounded-b-xl z-20" />
        
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-30" />
        
        {/* Screen */}
        <div className="rounded-[1.5rem] overflow-hidden h-[250px] md:h-[280px] relative bg-slate-800">
          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse" />
          )}
          
          {/* Screenshot */}
          {isInView && (
            <img
              src={screenshot}
              alt={`${title} mobile preview`}
              className={`w-full h-full object-cover object-top transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              decoding="async"
              onLoad={() => setIsLoaded(true)}
            />
          )}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-600 rounded-full" />
      </div>
      
      {/* Subtle shadow/reflection */}
      <div className="absolute -bottom-2 left-2 right-2 h-4 bg-gradient-to-b from-slate-900/30 to-transparent rounded-b-2xl blur-sm" />
    </div>
  );
});

export default PhoneMockupSmall;