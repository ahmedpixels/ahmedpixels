import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  className = "",
  priority = false,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse" 
          aria-hidden="true"
        />
      )}
      
      {isInView && (
        <picture>
          {webpSrc && (
            <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
          )}
          <source srcSet={src} type="image/jpeg" sizes={sizes} />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            fetchPriority={priority ? "high" : "auto"}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
