import { useEffect, useState, lazy, Suspense, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.png?webp";
import OptimizedImage from "./OptimizedImage";

// Lazy load particles for better initial load
const ParticlesBackground = lazy(() => import("./ParticlesBackground"));

const HeroSection = memo(() => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "WordPress Developer",
    "SEO Specialist", 
    "E-commerce Expert",
    "Web Designer"
  ];

  // Role rotation with longer interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center">
      {/* Lazy loaded particles */}
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      
      {/* Static gradient background - no animations */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
        
        {/* Static grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-28">
          {/* Left Content - No initial animation to prevent LCP delay */}
          <div className="order-2 lg:order-1 animate-fade-in"
          >
            {/* Location Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm text-hero-muted">Lahore, Pakistan</span>
                <span className="w-2 h-2 bg-green-400 rounded-full" />
              </div>
            </div>

            {/* Hello Text */}
            <p className="text-hero-muted text-xl mb-3 font-light">
              <span className="text-primary">&lt;</span> Hello, I'm <span className="text-primary">/&gt;</span>
            </p>

            {/* Name */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-hero-text mb-2">
              <span className="text-gradient inline-block">AHMED</span>
            </h1>
            
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-text/80 mb-4">
              PIXELS
            </div>

            {/* Animated Role - simplified animation */}
            <div className="h-12 md:h-14 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary flex items-center gap-3"
                >
                  <span className="w-8 h-[2px] bg-primary" />
                  {roles[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Description */}
            <div className="relative mb-10 max-w-lg">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
              <p className="text-hero-muted text-lg leading-relaxed pl-2">
                I craft high-performance websites that rank and convert. 
                Transforming ideas into stunning digital experiences that drive real results.
              </p>
            </div>

            {/* CTA Buttons */}
            <nav className="flex flex-wrap gap-4" aria-label="Primary actions">
              <a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Contact Ahmed on WhatsApp"
              >
                Let's Talk
              </a>

              <a
                href="#portfolio"
                className="group relative px-8 py-4 bg-transparent text-hero-text rounded-full font-semibold border border-primary/30 hover:border-primary/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="View portfolio projects"
              >
                View Projects
              </a>
            </nav>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-hero-text/10">
              {[
                { number: "50+", label: "Projects" },
                { number: "5+", label: "Years Exp." },
                { number: "40+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-hero-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image with simplified effects */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Static ring decorations */}
              <div className="absolute inset-[-20px] rounded-full border-2 border-dashed border-primary/20" />
              <div className="absolute inset-[-40px] rounded-full border border-primary/10" />

              {/* Glow effect - static */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-90" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-primary/50">
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
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg p-2"
          aria-label="Scroll down to About section"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
