import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, Sparkles } from "lucide-react";
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

  useEffect(() => {
    // GSAP floating animation for the image
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

  const textVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  const skills = [
    "WordPress",
    "SEO",
    "E-commerce",
    "Web Design"
  ];

  return (
    <section className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero-bg via-hero-bg/95 to-hero-bg" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground) / 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-12 h-[2px] bg-primary origin-left"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-[2px] h-12 bg-primary origin-top"
        />
      </div>
      <div className="absolute top-8 right-8 flex items-center gap-2">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-[2px] h-12 bg-primary origin-top"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-12 h-[2px] bg-primary origin-right"
        />
      </div>
      <div className="absolute bottom-8 left-8 flex flex-col items-start gap-2">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-[2px] h-12 bg-primary/50 origin-bottom"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-12 h-[2px] bg-primary/50 origin-left"
        />
      </div>
      <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-[2px] h-12 bg-primary/50 origin-bottom"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-12 h-[2px] bg-primary/50 origin-right"
        />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        {/* Skills scattered at top */}
        <div className="absolute top-24 md:top-28 left-0 right-0 flex justify-between px-4 md:px-16 lg:px-32">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-hero-text/70 text-xs md:text-sm font-bold tracking-[0.2em] uppercase hidden md:block"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Main content - Centered layout */}
        <div className="flex flex-col items-center justify-center min-h-screen py-32 relative">
          
          {/* Large Background Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          >
            <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black text-hero-text/[0.03] tracking-tighter leading-none">
              DEVELOPER
            </h1>
          </motion.div>

          {/* Red Circle Background */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-primary to-red-600 opacity-90" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-[60px] scale-110" />
          </motion.div>

          {/* Portrait Image - Centered and prominent */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-20 mb-8"
          >
            <div className="relative w-[260px] h-[340px] md:w-[320px] md:h-[420px] lg:w-[380px] lg:h-[500px]">
              {/* Image container with mask */}
              <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-[40%]">
                <img
                  src={ahmedPortrait}
                  alt="Ahmed - WordPress Developer & SEO Specialist"
                  className="w-full h-full object-cover object-top scale-110"
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-hero-bg via-hero-bg/80 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Name and Role - Below image */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-center z-20 mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-hero-text tracking-tight mb-3">
              <span className="text-gradient">AHMED</span>
            </h2>
            
            {/* Animated Role */}
            <div className="h-8 md:h-10 overflow-hidden">
              {roles.map((role, index) => (
                <motion.p
                  key={role}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{
                    y: currentRole === index ? 0 : currentRole > index ? -40 : 40,
                    opacity: currentRole === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-lg md:text-xl text-hero-muted font-medium tracking-wide absolute left-1/2 -translate-x-1/2"
                >
                  {role}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-hero-muted text-center max-w-md text-sm md:text-base mb-8 px-4"
          >
            Crafting <span className="text-primary font-semibold">high-performance</span> websites 
            that rank and convert. Transforming ideas into stunning digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-wrap justify-center gap-4 z-20"
          >
            <motion.a
              href="https://wa.me/923216479192?text=Hi%20Ahmed"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px 10px hsl(var(--primary) / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-gradient-orange text-primary-foreground rounded-full font-bold shadow-lg glow-orange overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative flex items-center gap-2">
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                Let's Talk
              </span>
            </motion.a>
            
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-hero-text/20 text-hero-text rounded-full font-bold hover:text-primary transition-all backdrop-blur-sm"
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex gap-8 md:gap-16 mt-12 z-20"
          >
            {[
              { value: "2+", label: "Years" },
              { value: "50+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                whileHover={{ y: -3 }}
                className="text-center"
              >
                <motion.div 
                  className="text-2xl md:text-3xl font-black text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.15, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-hero-muted text-xs uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute top-32 right-4 md:right-16 z-30"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">Available</span>
            </motion.div>
          </motion.div>

          {/* Year badge - like [2024] in reference */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 z-10"
          >
            <span className="text-hero-text/20 font-black text-4xl md:text-6xl tracking-tighter writing-mode-vertical">
              [2024]
            </span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <motion.span 
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xs font-medium text-hero-text/40 group-hover:text-primary transition-colors uppercase tracking-widest"
            >
              Scroll
            </motion.span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 border border-hero-text/20 rounded-full group-hover:border-primary transition-colors"
            >
              <ArrowDown size={14} className="text-hero-text/40 group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative lines at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hero-text/10 to-transparent" />
    </section>
  );
};

export default HeroSection;
