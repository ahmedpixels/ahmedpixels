import { useEffect, useState, useRef, memo } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.png";

const HeroSection = memo(() => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Stagger animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-hero-bg relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        
        {/* Grid pattern on left side */}
        <div 
          className="absolute inset-y-0 left-0 w-1/2 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Split screen container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        
        {/* Left side - Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center px-6 md:px-12 lg:px-16 py-24 lg:py-0"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="max-w-xl">
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="w-2 h-2 bg-status-online rounded-full animate-pulse" />
                <span className="text-sm text-hero-muted">Available for new projects</span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <p className="text-hero-muted text-lg mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
                <span className="text-gradient">AHMED</span>
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text/70 mb-6">
                PIXELS
              </h2>
            </motion.div>

            {/* Animated role */}
            <motion.div 
              variants={itemVariants}
              className="h-14 mb-8 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-[2px] bg-primary" />
                  <span className="text-xl md:text-2xl font-medium text-primary">
                    {roles[currentRole]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-hero-muted text-lg leading-relaxed mb-10"
            >
              I craft high-performance websites that rank on Google and convert visitors into customers. Based in Lahore, Pakistan.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:gap-4 hover:shadow-[0_0_30px_hsl(270,85%,58%,0.4)]"
              >
                Start a Project
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#portfolio"
                className="px-6 py-3 text-hero-text rounded-full font-semibold border border-hero-text/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                View Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-8 pt-8 border-t border-hero-text/10"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "5+", label: "Years" },
                { value: "40+", label: "Clients" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-hero-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div 
          className="w-full lg:w-1/2 relative flex items-center justify-center p-8 lg:p-0"
          initial={{ opacity: 0, x: 100 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative background for right side */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 lg:rounded-l-[60px]" />
          
          {/* Image container with effects */}
          <div 
            className="relative z-10"
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
          >
            {/* Outer glow ring */}
            <motion.div 
              className="absolute inset-[-30px] rounded-full"
              animate={{
                boxShadow: imageHovered 
                  ? '0 0 80px hsl(270 85% 58% / 0.4), 0 0 120px hsl(280 90% 65% / 0.2)'
                  : '0 0 40px hsl(270 85% 58% / 0.2)'
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Animated border rings */}
            <motion.div 
              className="absolute inset-[-20px] rounded-full border border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-[-35px] rounded-full border border-dashed border-primary/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Main image */}
            <motion.div 
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden"
              animate={{ scale: imageHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary">
                <div className="w-full h-full rounded-full bg-hero-bg" />
              </div>
              
              {/* Image */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden">
                <motion.img
                  src={ahmedPortrait}
                  alt="Ahmed Pixels - WordPress Developer & SEO Specialist"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  animate={{ scale: imageHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div 
              className="absolute -top-4 -left-4 px-4 py-2 bg-hero-bg border border-primary/30 rounded-full shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-medium text-primary">WordPress Pro</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 px-4 py-2 bg-hero-bg border border-primary/30 rounded-full shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-sm font-medium text-primary">SEO Expert</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors z-20"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
