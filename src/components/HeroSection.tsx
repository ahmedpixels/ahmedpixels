import { useEffect, useState, useRef, memo, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.png";

const HeroSection = memo(() => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  const roles = [
    "WordPress Developer",
    "SEO Specialist", 
    "E-commerce Expert",
    "Web Designer"
  ];

  // Mouse move handler for cursor effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      clearInterval(interval);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [handleMouseMove]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center cursor-none"
    >
      {/* Custom cursor */}
      <motion.div
        className="fixed w-32 h-32 rounded-full pointer-events-none z-50 mix-blend-difference bg-hero-text hidden lg:block"
        style={{
          left: mousePosition.x + '%',
          top: mousePosition.y + '%',
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Gradient background with mouse-reactive spotlight */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Mouse-following gradient spotlight */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, hsl(270 85% 58% / 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Static gradient orbs */}
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(280 90% 65% / 0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(270 85% 58% / 0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="container-custom relative z-10 px-6 md:px-12 lg:px-20 w-full"
        style={{ opacity, scale }}
      >
        <div className="min-h-screen flex flex-col justify-center py-20">
          
          {/* Top bar - Location & Status */}
          <motion.div 
            className="flex items-center justify-between mb-12 lg:mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-hero-muted text-sm tracking-[0.2em] uppercase">
              Lahore, Pakistan
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-status-online rounded-full animate-pulse" />
              <span className="text-hero-muted text-sm">Available for work</span>
            </div>
          </motion.div>

          {/* Main hero content */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            
            {/* Left - Giant text */}
            <div className="lg:col-span-8" ref={textRef}>
              
              {/* Small intro */}
              <motion.p
                className="text-hero-muted text-lg md:text-xl mb-4 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hello, I'm
              </motion.p>

              {/* Giant Name - Lando style */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Base text layer */}
                <h1 className="relative select-none">
                  <span 
                    className="block text-[clamp(4rem,15vw,12rem)] font-bold leading-[0.85] tracking-tighter text-hero-text"
                    style={{
                      WebkitTextStroke: '2px hsl(var(--primary) / 0.3)',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    AHMED
                  </span>
                  
                  {/* Filled text with mask effect */}
                  <span 
                    className="absolute inset-0 block text-[clamp(4rem,15vw,12rem)] font-bold leading-[0.85] tracking-tighter text-gradient"
                    style={{
                      clipPath: `circle(150px at ${mousePosition.x}% ${mousePosition.y}%)`,
                      transition: 'clip-path 0.1s ease-out',
                    }}
                    aria-hidden="true"
                  >
                    AHMED
                  </span>
                </h1>

                <h1 className="relative select-none -mt-4 md:-mt-8">
                  <span 
                    className="block text-[clamp(2.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-hero-text/40"
                  >
                    PIXELS
                  </span>
                  
                  {/* Filled text with mask effect */}
                  <span 
                    className="absolute inset-0 block text-[clamp(2.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-hero-text"
                    style={{
                      clipPath: `circle(150px at ${mousePosition.x}% ${mousePosition.y}%)`,
                      transition: 'clip-path 0.1s ease-out',
                    }}
                    aria-hidden="true"
                  >
                    PIXELS
                  </span>
                </h1>
              </motion.div>

              {/* Animated role */}
              <motion.div 
                className="h-12 md:h-16 mt-6 md:mt-10 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRole}
                    initial={{ y: 50, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -50, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-4"
                  >
                    <span className="w-8 h-[2px] bg-primary" />
                    <span className="text-xl md:text-3xl lg:text-4xl font-medium text-primary">
                      {roles[currentRole]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-hero-muted text-base md:text-lg max-w-lg leading-relaxed mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                I craft high-performance websites that rank on Google and convert visitors into customers.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a
                  href="https://wa.me/923216479192?text=Hi%20Ahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Talk
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:animate-shimmer" />
                </a>

                <a
                  href="#portfolio"
                  className="group px-8 py-4 text-hero-text rounded-full font-semibold border border-hero-text/20 hover:border-primary transition-all duration-300 hover:bg-primary/10"
                >
                  View Projects
                </a>
              </motion.div>
            </div>

            {/* Right - Portrait with hover effects */}
            <motion.div 
              className="lg:col-span-4 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative group">
                {/* Outer glow */}
                <div className="absolute inset-[-40px] rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Rotating border */}
                <motion.div 
                  className="absolute inset-[-3px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "conic-gradient(from 0deg, hsl(270 85% 58%), hsl(280 90% 65%), hsl(310 80% 60%), transparent, hsl(270 85% 58%))",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner background */}
                <div className="absolute inset-[2px] rounded-full bg-hero-bg" />
                
                {/* Image container with hover scale */}
                <motion.div 
                  className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={ahmedPortrait}
                    alt="Ahmed Pixels - WordPress Developer & SEO Specialist"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="eager"
                    fetchPriority="high"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Decorative corners */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-xl group-hover:border-primary transition-colors duration-300" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-xl group-hover:border-primary transition-colors duration-300" />
              </div>
            </motion.div>
          </div>

          {/* Stats row - Bottom */}
          <motion.div 
            className="flex flex-wrap gap-12 md:gap-20 mt-16 lg:mt-24 pt-8 border-t border-hero-text/10"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {[
              { value: "50+", label: "Projects" },
              { value: "5+", label: "Years Experience" },
              { value: "40+", label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="group cursor-default"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text group-hover:text-gradient transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-hero-muted mt-1 tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
