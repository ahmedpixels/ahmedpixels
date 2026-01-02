import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, MapPin, Code, Search, Sparkles, Rocket } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.jpg";

const roles = [
  "WordPress Developer",
  "SEO Specialist", 
  "Website Designer",
  "Performance Expert"
];

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // GSAP floating animation for the image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    // GSAP pulsing glow effect
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            background: [
              "radial-gradient(ellipse at 0% 0%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 100% 0%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 100% 100%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 0% 100%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 0% 0%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" 
        />
      </div>
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10 px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-32">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <MapPin size={16} />
                <span className="font-medium text-sm">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-sm">Available for Work</span>
              </div>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-4 leading-tight"
            >
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="text-gradient">AHMED</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-orange rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="h-12 md:h-14 mb-6 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-4xl font-semibold text-primary"
                >
                  {roles[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg text-hero-text/60 max-w-xl mb-10 leading-relaxed"
            >
              I craft high-performance websites that <span className="text-primary font-medium">rank #1</span> and <span className="text-primary font-medium">convert visitors into customers</span>. 
              With 2+ years of experience, I transform ideas into stunning 
              digital experiences that drive results.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              custom={3.5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { icon: Code, text: "Clean Code" },
                { icon: Search, text: "SEO Optimized" },
                { icon: Rocket, text: "Fast Loading" },
                { icon: Sparkles, text: "Modern Design" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-full border border-border/20 text-hero-text/70 text-sm"
                >
                  <item.icon size={14} className="text-primary" />
                  {item.text}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-orange text-primary-foreground rounded-full font-bold text-lg shadow-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-hero-text/20 text-hero-text rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-colors"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/Ahmed-Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary/50 text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex gap-8 md:gap-12 mt-12"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "50+", label: "Projects Done" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center md:text-left"
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-primary"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-hero-text/50 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer rotating ring with dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50px] rounded-full"
              >
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-primary rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 45}deg) translateY(-${180}px) translate(-50%, -50%)`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border-2 border-dashed border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] border border-primary/20 rounded-full"
              />
              
              {/* Floating tech icons */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-12 left-1/4 w-12 h-12 bg-hero-bg border border-primary/30 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Code size={20} className="text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-10 right-1/4 w-12 h-12 bg-hero-bg border border-primary/30 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Search size={20} className="text-primary" />
              </motion.div>
              <motion.div
                animate={{ x: [-5, 5, -5], rotate: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/3 -right-14 w-12 h-12 bg-hero-bg border border-primary/30 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Rocket size={20} className="text-primary" />
              </motion.div>

              {/* Glow Effect */}
              <div
                ref={glowRef}
                className="absolute inset-4 bg-primary/40 rounded-full blur-3xl"
              />
              
              {/* Main Image Container */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                {/* Hexagon-style frame with gradient border */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Gradient border effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary via-primary/50 to-primary/20 rounded-[2rem] p-1"
                    animate={{ 
                      background: [
                        "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.5) 50%, hsl(var(--primary) / 0.2) 100%)",
                        "linear-gradient(225deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.5) 50%, hsl(var(--primary) / 0.2) 100%)",
                        "linear-gradient(315deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.5) 50%, hsl(var(--primary) / 0.2) 100%)",
                        "linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.5) 50%, hsl(var(--primary) / 0.2) 100%)",
                        "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.5) 50%, hsl(var(--primary) / 0.2) 100%)",
                      ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full bg-hero-bg rounded-[1.8rem] overflow-hidden">
                      <img
                        src={ahmedPortrait}
                        alt="Ahmed - WordPress Developer & SEO Specialist"
                        className="w-full h-full object-cover object-top scale-110 hover:scale-100 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Corner accents */}
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-primary rounded-tl-xl" 
                  />
                  <motion.div 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-primary rounded-tr-xl" 
                  />
                  <motion.div 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-primary rounded-bl-xl" 
                  />
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-primary rounded-br-xl" 
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-hero-text/40 hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <motion.div 
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-current rounded-full"
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
