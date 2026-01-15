import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, MapPin } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.jpg";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "WordPress Developer",
    "SEO Specialist", 
    "E-commerce Expert",
    "Web Designer"
  ];

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Subtle float animation
  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

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
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Location Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm text-hero-muted">Lahore, Pakistan</span>
              <span className="w-2 h-2 bg-green-400 rounded-full ml-1" />
            </motion.div>

            {/* Hello Text */}
            <motion.p variants={itemVariants} className="text-hero-muted text-lg mb-2">
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-4"
            >
              <span className="text-gradient">AHMED</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div variants={itemVariants} className="h-10 md:h-12 mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary"
                >
                  {roles[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants} 
              className="text-hero-muted max-w-md mb-8 leading-relaxed"
            >
              I craft high-performance websites that rank and convert. 
              Transforming ideas into stunning digital experiences that drive real results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              >
                Let's Talk
              </motion.a>

              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 border border-hero-text/20 text-hero-text rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-75" />
              
              {/* Image container */}
              <div 
                ref={imageRef}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              >
                {/* Border ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                
                {/* Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-transparent">
                  <img
                    src={ahmedPortrait}
                    alt="Ahmed - WordPress Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Status badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-2 top-1/4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-foreground">Available for work</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
