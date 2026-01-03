import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, MapPin, Sparkles, Zap, Code2, Rocket } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.jpg";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "WordPress Developer",
    "SEO Specialist",
    "E-commerce Expert",
    "Web Designer"
  ];

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-30, 30]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-30, 30]), springConfig);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

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
        scale: 1.15,
        opacity: 0.7,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  const floatingIcons = [
    { Icon: Code2, delay: 0, x: -60, y: -80 },
    { Icon: Zap, delay: 0.5, x: 80, y: -60 },
    { Icon: Rocket, delay: 1, x: -80, y: 60 },
    { Icon: Sparkles, delay: 1.5, x: 70, y: 80 },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 20%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 80%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 20%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Cyberpunk Grid with Perspective */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ perspective: "1000px" }}>
        <motion.div 
          animate={{ rotateX: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Morphing Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-primary/20 via-orange-500/15 to-transparent blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            borderRadius: ["40% 60% 60% 40% / 70% 30% 70% 30%", "70% 30% 30% 70% / 40% 60% 40% 60%", "40% 60% 60% 40% / 70% 30% 70% 30%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-gradient-to-r from-red-500/10 via-pink-500/10 to-transparent blur-[60px]"
        />
      </div>

      {/* Animated Scan Lines */}
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.3) 50%, transparent 100%)",
          height: "50%",
        }}
      />

      {/* Floating Tech Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-20%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeOut",
            }}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 6px 2px hsl(var(--primary) / 0.4)",
            }}
          />
        ))}
      </div>

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
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-2 bg-primary/10 rounded-lg"
              >
                <MapPin size={18} className="text-primary" />
              </motion.div>
              <span className="font-medium text-primary/90 tracking-wide">Lahore, Pakistan</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mb-2"
            >
              <span className="text-hero-muted text-lg md:text-xl font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-hero-text mb-4 tracking-tight"
            >
              <span className="relative inline-block">
                <span className="text-gradient">AHMED</span>
                <motion.span
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-red-500 origin-left"
                />
              </span>
            </motion.h1>

            {/* Animated Role Text */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="h-16 md:h-20 mb-8 overflow-hidden"
            >
              <div className="relative">
                {roles.map((role, index) => (
                  <motion.h2
                    key={role}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{
                      y: currentRole === index ? 0 : currentRole > index ? -60 : 60,
                      opacity: currentRole === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-hero-text/80 absolute top-0 left-0"
                  >
                    {role}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1 text-primary"
                    >
                      |
                    </motion.span>
                  </motion.h2>
                ))}
              </div>
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg md:text-xl text-hero-muted max-w-xl mb-10 leading-relaxed"
            >
              I craft <span className="text-primary font-semibold">high-performance</span> websites that rank and convert. 
              Transforming ideas into stunning digital experiences that drive <span className="text-cyan-400 font-semibold">real results</span>.
            </motion.p>

            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px 10px hsl(var(--primary) / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-orange text-primary-foreground rounded-full font-bold text-lg shadow-lg glow-orange overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative flex items-center gap-2">
                  <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                  Let's Talk
                </span>
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-hero-text/20 text-hero-text rounded-full font-bold text-lg hover:text-primary transition-all backdrop-blur-sm"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/Ahmed-Resume.pdf"
                download
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))", color: "white" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary/50 text-primary rounded-full font-bold text-lg transition-all flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download CV
              </motion.a>
            </motion.div>

            {/* Animated Stats with counters */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex gap-8 md:gap-12 mt-16"
            >
              {[
                { value: "2+", label: "Years Experience", color: "text-primary" },
                { value: "50+", label: "Projects Done", color: "text-cyan-400" },
                { value: "100%", label: "Client Satisfaction", color: "text-green-400" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="group cursor-default"
                >
                  <motion.div 
                    className={`text-4xl md:text-5xl font-black ${stat.color}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-hero-muted text-sm mt-1 group-hover:text-hero-text transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image with 3D Effect */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div 
              style={{ x: parallaxX, y: parallaxY }}
              className="relative"
            >
              {/* Floating Icons around image */}
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.4, 0.8, 0.4],
                    scale: 1,
                    y: [y, y - 15, y],
                  }}
                  transition={{
                    opacity: { duration: 3, repeat: Infinity, delay },
                    scale: { delay: 1 + delay, type: "spring" },
                    y: { duration: 4, repeat: Infinity, delay },
                  }}
                  className="absolute z-20"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                >
                  <div className="p-3 bg-hero-bg/80 backdrop-blur-md rounded-xl border border-primary/30 shadow-[0_0_20px_5px_hsl(var(--primary)/0.2)]">
                    <Icon size={20} className="text-primary" />
                  </div>
                </motion.div>
              ))}

              {/* Animated neon rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, hsl(var(--primary)) 10%, transparent 20%)',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full bg-hero-bg rounded-full" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-60px] rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, transparent 0%, rgba(6, 182, 212, 0.6) 5%, transparent 15%)',
                  padding: '1px',
                }}
              >
                <div className="w-full h-full bg-hero-bg rounded-full" />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-80px] rounded-full opacity-50"
                style={{
                  background: 'conic-gradient(from 90deg, transparent 0%, rgba(239, 68, 68, 0.4) 3%, transparent 10%)',
                  padding: '1px',
                }}
              >
                <div className="w-full h-full bg-hero-bg rounded-full" />
              </motion.div>

              {/* Floating neon particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [-15 + i * 3, 15 - i * 2, -15 + i * 3], 
                    x: [i % 2 === 0 ? -5 : 5, i % 2 === 0 ? 5 : -5, i % 2 === 0 ? -5 : 5],
                    opacity: [0.4, 1, 0.4] 
                  }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 3 === 0 ? "rgb(34, 211, 238)" : i % 3 === 1 ? "hsl(var(--primary))" : "rgb(239, 68, 68)",
                    boxShadow: `0 0 15px 5px ${i % 3 === 0 ? "rgba(34,211,238,0.5)" : i % 3 === 1 ? "hsl(var(--primary) / 0.5)" : "rgba(239,68,68,0.5)"}`,
                    top: `${10 + i * 15}%`,
                    left: i % 2 === 0 ? "-5%" : "105%",
                  }}
                />
              ))}

              {/* Glow Effect - Enhanced */}
              <div
                ref={glowRef}
                className="absolute inset-[-20px] bg-gradient-to-br from-cyan-500/25 via-primary/35 to-red-500/25 rounded-full blur-[80px]"
              />
              
              {/* Main Image Container */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
                className="relative"
                style={{ perspective: "1000px" }}
              >
                {/* Neon frame with enhanced glow */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
                  {/* Multi-color gradient border */}
                  <motion.div 
                    animate={{
                      boxShadow: [
                        "0 0 40px 10px hsl(var(--primary) / 0.3)",
                        "0 0 60px 20px hsl(var(--primary) / 0.4)",
                        "0 0 40px 10px hsl(var(--primary) / 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-primary to-red-500 rounded-3xl p-[3px]"
                  >
                    <div className="w-full h-full bg-hero-bg rounded-[21px] overflow-hidden">
                      <motion.img
                        src={ahmedPortrait}
                        alt="Ahmed - WordPress Developer & SEO Specialist"
                        className="w-full h-full object-cover object-center"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Animated corner accents */}
                  {[
                    { pos: "-top-3 -left-3", border: "border-l-4 border-t-4", color: "border-cyan-400", shadow: "rgba(34,211,238,0.6)", rounded: "rounded-tl-2xl" },
                    { pos: "-top-3 -right-3", border: "border-r-4 border-t-4", color: "border-primary", shadow: "hsl(var(--primary) / 0.6)", rounded: "rounded-tr-2xl" },
                    { pos: "-bottom-3 -left-3", border: "border-l-4 border-b-4", color: "border-primary", shadow: "hsl(var(--primary) / 0.6)", rounded: "rounded-bl-2xl" },
                    { pos: "-bottom-3 -right-3", border: "border-r-4 border-b-4", color: "border-red-500", shadow: "rgba(239,68,68,0.6)", rounded: "rounded-br-2xl" },
                  ].map((corner, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        boxShadow: [
                          `0 0 10px 2px ${corner.shadow}`,
                          `0 0 20px 5px ${corner.shadow}`,
                          `0 0 10px 2px ${corner.shadow}`,
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className={`absolute ${corner.pos} w-10 h-10 ${corner.border} ${corner.color} ${corner.rounded}`}
                    />
                  ))}
                </div>

                {/* Enhanced Status badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-hero-bg/95 backdrop-blur-md border-2 border-green-400 px-6 py-3 rounded-full"
                  style={{ boxShadow: "0 0 30px 8px rgba(74,222,128,0.3)" }}
                >
                  <div className="flex items-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_10px_3px_rgba(74,222,128,0.6)]"
                    />
                    <span className="text-green-400 font-bold text-sm whitespace-nowrap">Available for Hire</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <motion.span 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm font-medium text-hero-text/50 group-hover:text-primary transition-colors"
            >
              Scroll Down
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 border border-hero-text/20 rounded-full group-hover:border-primary transition-colors"
            >
              <ArrowDown size={16} className="text-hero-text/50 group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
