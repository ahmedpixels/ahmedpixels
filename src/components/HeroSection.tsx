import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.jpg";
import OptimizedImage from "./OptimizedImage";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "WordPress Developer",
    "SEO Specialist", 
    "E-commerce Expert",
    "Web Designer"
  ];

  // Role rotation - start after initial paint
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center">
      {/* Simple gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-28">
          {/* Left Content */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Location Badge */}
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm text-hero-muted">Lahore, Pakistan</span>
              <span className="w-2 h-2 bg-green-400 rounded-full ml-1" />
            </div>

            {/* Hello Text */}
            <p className="text-hero-muted text-lg mb-2">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-4">
              <span className="text-gradient">AHMED</span>
            </h1>

            {/* Animated Role */}
            <div className="h-10 md:h-12 mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary"
                >
                  {roles[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Description */}
            <p className="text-hero-muted max-w-md mb-8 leading-relaxed">
              I craft high-performance websites that rank and convert. 
              Transforming ideas into stunning digital experiences that drive real results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all"
              >
                Let's Talk
              </a>

              <a
                href="#portfolio"
                className="px-7 py-3.5 border border-hero-text/20 text-hero-text rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Right - Image (LCP Element) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-75" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Border ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                
                {/* Image - Priority loading for LCP */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-transparent">
                  <OptimizedImage
                    src={ahmedPortrait}
                    alt="Ahmed - WordPress Developer"
                    className="w-full h-full"
                    priority={true}
                  />
                </div>

                {/* Status badge */}
                <div className="absolute -right-2 top-1/4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-xs font-medium text-foreground">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ArrowDown size={18} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
