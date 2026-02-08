import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MessageCircle, FolderOpen } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.png";

const HeroSection = memo(() => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const roles = [
    "WordPress Developer",
    "SEO Specialist", 
    "E-commerce Expert",
    "Web Designer"
  ];

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="min-h-screen bg-hero-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Central gradient glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(270 85% 50% / 0.4) 0%, hsl(280 90% 60% / 0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Top right accent */}
        <div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(280 90% 65% / 0.15) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Bottom left accent */}
        <div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(260 80% 55% / 0.1) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="container-custom px-6 md:px-12 lg:px-16 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Left - Text Content */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                
                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-online opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-status-online" />
                  </span>
                  <span className="text-sm text-hero-muted">Available for projects</span>
                </motion.div>

                {/* Intro text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-hero-muted text-lg md:text-xl mb-4"
                >
                  Hello, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-2"
                >
                  <span className="block text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                    <span className="text-gradient">AHMED</span>
                  </span>
                  <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text/60 tracking-tight -mt-1">
                    PIXELS
                  </span>
                </motion.h1>

                {/* Animated Role */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="h-10 md:h-12 mb-6 overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentRole}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-xl md:text-2xl text-primary font-medium flex items-center justify-center lg:justify-start gap-3"
                    >
                      <span className="w-6 h-[2px] bg-primary" />
                      {roles[currentRole]}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-hero-muted text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed mb-8"
                >
                  I craft high-performance websites that rank on Google and convert visitors into customers. Based in Lahore, Pakistan.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
                >
                  <a
                    href="https://wa.me/923216479192?text=Hi%20Ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(270,85%,58%,0.5)] hover:scale-105"
                  >
                    <MessageCircle size={18} />
                    Let's Talk
                  </a>

                  <a
                    href="#portfolio"
                    className="flex items-center gap-2 px-6 py-3 text-hero-text rounded-full font-semibold border border-hero-text/20 hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <FolderOpen size={18} />
                    View Projects
                  </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex gap-8 justify-center lg:justify-start"
                >
                  {[
                    { value: "50+", label: "Projects" },
                    { value: "5+", label: "Years" },
                    { value: "40+", label: "Clients" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center lg:text-left">
                      <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs md:text-sm text-hero-muted uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right - Portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="relative group">
                  {/* Outer glow effect */}
                  <div className="absolute inset-[-40px] rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Animated rings */}
                  <motion.div
                    className="absolute inset-[-15px] rounded-full border border-primary/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-[-30px] rounded-full border border-dashed border-primary/15"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Image container */}
                  <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary-dark">
                      <div className="w-full h-full rounded-full bg-hero-bg" />
                    </div>
                    
                    {/* Image */}
                    <div className="absolute inset-[6px] rounded-full overflow-hidden">
                      <img
                        src={ahmedPortrait}
                        alt="Ahmed Pixels - WordPress Developer & SEO Specialist"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="eager"
                        fetchPriority="high"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Corner accents */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg opacity-60" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg opacity-60" />
                  </div>

                  {/* Floating label */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-hero-bg/90 backdrop-blur-sm border border-primary/30 rounded-full whitespace-nowrap"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-sm font-medium text-primary">Lahore, Pakistan 🇵🇰</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="pb-8 flex justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
