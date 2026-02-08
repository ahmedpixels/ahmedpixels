import { useEffect, useState, useRef, memo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.png";

const HeroSection = memo(() => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const roles = [
    "WordPress Developer",
    "SEO Specialist", 
    "E-commerce Expert",
    "Web Designer"
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animated counter component
  const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isLoaded) return;
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }, [value, isLoaded]);
    
    return <span>{count}{suffix}</span>;
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center"
    >
      {/* Dramatic gradient background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Large gradient orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(270 85% 58% / 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
            y
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(280 90% 65% / 0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
            y: useTransform(scrollYProgress, [0, 1], [0, -100])
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="container-custom relative z-10 px-6 md:px-12 lg:px-16 w-full"
        style={{ opacity, scale }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-24 lg:py-32">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            
            {/* Eyebrow text */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                <span className="inline-flex items-center gap-3 text-hero-muted text-sm tracking-[0.3em] uppercase font-medium">
                  <span className="w-12 h-px bg-primary" />
                  Based in Lahore, Pakistan
                  <span className="w-2 h-2 bg-status-online rounded-full animate-pulse" />
                </span>
            </motion.div>

            {/* Main heading - Lando style large text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="relative mb-2">
                <span className="block text-hero-muted text-2xl md:text-3xl font-light mb-2 tracking-wide">
                  Hello, I'm
                </span>
                <span className="block text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bold leading-[0.85] tracking-tighter">
                  <span className="text-gradient">AHMED</span>
                </span>
                <span className="block text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold text-hero-text/60 tracking-tight -mt-2 md:-mt-4">
                  PIXELS
                </span>
              </h1>
            </motion.div>

            {/* Animated role */}
            <motion.div 
              className="h-16 md:h-20 mb-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 60, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -60, opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4"
                >
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary">
                    {roles[currentRole]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-hero-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I craft high-performance websites that rank on Google and convert visitors into customers. 
              Transforming ideas into stunning digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.nav 
              className="flex flex-wrap gap-4 mb-12"
              aria-label="Primary actions"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(270,85%,58%,0.5)]"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-shimmer" />
              </a>

              <a
                href="#portfolio"
                className="group px-8 py-4 text-hero-text rounded-full font-semibold border-2 border-hero-text/20 hover:border-primary/60 transition-all duration-300 hover:bg-primary/5"
              >
                View My Work
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.nav>

            {/* Stats - Cinematic counters */}
            <motion.div 
              className="flex gap-10 md:gap-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { value: 50, suffix: "+", label: "Projects Completed" },
                { value: 5, suffix: "+", label: "Years Experience" },
                { value: 40, suffix: "+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-hero-muted mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Portrait with dramatic effects - 5 columns */}
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-[-30px] rounded-full bg-gradient-to-br from-primary/30 via-transparent to-accent/20 blur-2xl animate-pulse" />
              
              {/* Rotating border */}
              <motion.div 
                className="absolute inset-[-4px] rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(270 85% 58%), hsl(280 90% 65%), hsl(310 80% 60%), hsl(270 85% 58%))",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner background */}
              <div className="absolute inset-[2px] rounded-full bg-hero-bg" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden">
                <img
                  src={ahmedPortrait}
                  alt="Ahmed Pixels - WordPress Developer & SEO Specialist"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/40 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-xl" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-xl" />
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-2 -right-8 px-4 py-2 bg-hero-bg/90 backdrop-blur-sm border border-primary/30 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm text-primary font-medium">Available for work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
