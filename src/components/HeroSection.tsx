import { useEffect, useState, lazy, Suspense, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MapPin, ChevronRight } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.png";
import OptimizedImage from "./OptimizedImage";

// Lazy load particles for better initial load
const ParticlesBackground = lazy(() => import("./ParticlesBackground"));

const HeroSection = memo(() => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "WordPress Developer",
    "SEO Specialist", 
    "WooCommerce Expert",
    "Shopify Developer"
  ];

  // Role rotation with longer interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center noise-overlay">
      {/* Lazy loaded particles */}
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      
      {/* Premium gradient mesh background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/12 rounded-full blur-[180px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px] animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary-glow/5 rounded-full blur-[120px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating accent shapes */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-float opacity-40" aria-hidden="true" />
      <div className="absolute top-40 right-40 w-1.5 h-1.5 bg-accent rounded-full animate-float-slow opacity-30" aria-hidden="true" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-20" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-20 h-20 border border-primary/10 rounded-full animate-rotate-slow" aria-hidden="true" />

      {/* Main Content */}
      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-28">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            {/* Location Badge */}
            <motion.div 
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/15 backdrop-blur-xl">
                <MapPin size={14} className="text-primary" />
                <span className="text-sm text-hero-muted font-medium">Lahore, Pakistan</span>
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Hello Text */}
            <motion.p 
              className="text-hero-muted text-lg mb-4 font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-primary font-mono">&lt;</span> Hello, I'm <span className="text-primary font-mono">/&gt;</span>
            </motion.p>

            {/* Name with shimmer effect */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-hero-text mb-2 tracking-tight">
              <span className="text-gradient inline-block">AHMED</span>
            </h1>
            
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-text/70 mb-6 tracking-wide">
              PIXELS
            </div>

            {/* Animated Role */}
            <div className="h-12 md:h-14 mb-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary flex items-center gap-3"
                >
                  <span className="w-10 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full" />
                  {roles[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Description */}
            <div className="relative mb-12 max-w-lg">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
              <p className="text-hero-muted text-lg leading-relaxed pl-3">
                I build SEO-optimized WordPress websites that actually rank on Google and bring real customers. 
                From WooCommerce stores to corporate sites — I handle everything from design to deployment.
              </p>
            </div>

            {/* CTA Buttons */}
            <nav className="flex flex-wrap gap-4" aria-label="Primary actions">
              <motion.a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background overflow-hidden"
                aria-label="Contact Ahmed on WhatsApp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>

              <motion.a
                href="#portfolio"
                className="group relative px-8 py-4 bg-transparent text-hero-text rounded-full font-semibold border border-primary/20 hover:border-primary/50 transition-all gradient-border-btn focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="View portfolio projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </nav>

            {/* Stats row */}
            <div className="flex gap-10 mt-14 pt-8 border-t border-primary/10">
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "2+", label: "Years Experience" },
                { number: "40+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-xs text-hero-muted mt-1 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Image with premium effects */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              {/* Morphing blob behind image */}
              <div className="absolute inset-[-30px] bg-primary/15 animate-morph blur-[60px]" />
              
              {/* Rotating rings */}
              <motion.div 
                className="absolute inset-[-25px] rounded-full border border-primary/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-[-45px] rounded-full border border-dashed border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/25 rounded-full blur-[100px] scale-75 animate-pulse-glow" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary-glow">
                  <div className="w-full h-full rounded-full bg-hero-bg" />
                </div>
                
                {/* Image */}
                <div className="absolute inset-3 rounded-full overflow-hidden">
                  <OptimizedImage
                    src={ahmedPortrait}
                    alt="Ahmed Pixels - WordPress Developer & SEO Specialist"
                    className="w-full h-full object-cover"
                    priority={true}
                    width={420}
                    height={420}
                  />
                </div>

                {/* Corner decorations */}
                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-xl" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-accent/50 rounded-bl-xl" />
                
                {/* Floating badge */}
                <motion.div 
                  className="absolute -right-4 top-1/4 px-4 py-2 bg-hero-bg/90 backdrop-blur-xl border border-primary/20 rounded-xl shadow-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-xs font-bold text-primary">SEO Expert</span>
                </motion.div>
                
                <motion.div 
                  className="absolute -left-6 bottom-1/3 px-4 py-2 bg-hero-bg/90 backdrop-blur-xl border border-accent/20 rounded-xl shadow-lg"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-xs font-bold text-accent">WordPress Pro</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg p-2"
          aria-label="Scroll down to About section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;