import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, MapPin, Sparkles, Zap, Code2, Palette, Rocket } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.jpg";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = [
    { text: "WordPress Developer", icon: Code2, color: "text-cyan-400" },
    { text: "SEO Specialist", icon: Rocket, color: "text-green-400" },
    { text: "E-commerce Expert", icon: Zap, color: "text-yellow-400" },
    { text: "Web Designer", icon: Palette, color: "text-pink-400" }
  ];

  // Advanced mouse tracking with smooth interpolation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-40, 40]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-40, 40]), springConfig);
  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-10, 10]), springConfig);
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  }, [mouseX, mouseY]);

  // Role rotation with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // GSAP animations
  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -25,
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const letterAnimation = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  const nameLetters = "AHMED".split("");

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center"
    >
      {/* Ultra Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Aurora Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse 80% 50% at 20% 40%, hsl(var(--primary) / 0.2) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(34,211,238,0.15) 0%, transparent 40%)",
              "radial-gradient(ellipse 80% 50% at 50% 30%, hsl(var(--primary) / 0.2) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 30% 70%, rgba(34,211,238,0.15) 0%, transparent 40%)",
              "radial-gradient(ellipse 80% 50% at 80% 50%, hsl(var(--primary) / 0.2) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 60% 40%, rgba(34,211,238,0.15) 0%, transparent 40%)",
              "radial-gradient(ellipse 80% 50% at 20% 40%, hsl(var(--primary) / 0.2) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(34,211,238,0.15) 0%, transparent 40%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* 3D Perspective Grid */}
      <div className="absolute inset-0" style={{ perspective: "1500px" }}>
        <motion.div 
          animate={{ rotateX: [2, 8, 2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transformOrigin: "center 120%",
            transform: "rotateX(60deg) translateZ(-100px)",
          }}
        />
      </div>

      {/* Floating Orbs with 3D Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: 200 + i * 100,
              height: 200 + i * 100,
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: i % 2 === 0 
                ? `radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.2), transparent 60%)`
                : `radial-gradient(circle at 30% 30%, rgba(34,211,238,0.15), transparent 60%)`,
              filter: "blur(40px)",
            }}
            animate={{
              y: [0, -30 - i * 10, 0],
              x: [0, 20 - i * 8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Holographic Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1="0%"
            y1={`${15 + i * 15}%`}
            x2="100%"
            y2={`${15 + i * 15}%`}
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.3, 0.3, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </svg>

      {/* Particle Field */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "110%",
              opacity: 0,
            }}
            animate={{ 
              y: "-10%",
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            <div 
              className="rounded-full"
              style={{
                width: 2 + Math.random() * 3,
                height: 2 + Math.random() * 3,
                background: i % 3 === 0 
                  ? "hsl(var(--primary))" 
                  : i % 3 === 1 
                    ? "rgb(34,211,238)" 
                    : "rgb(251,146,60)",
                boxShadow: `0 0 ${6 + Math.random() * 6}px currentColor`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Animated Scan Line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
          boxShadow: "0 0 20px 2px hsl(var(--primary) / 0.3)",
        }}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="container-custom relative z-10 px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-32">
          {/* Left Content */}
          <motion.div 
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Location Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="p-2.5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20"
              >
                <MapPin size={18} className="text-primary" />
              </motion.div>
              <span className="font-semibold text-primary/90 tracking-wide">Lahore, Pakistan</span>
              <motion.span 
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_12px_rgba(74,222,128,0.8)]" 
              />
            </motion.div>

            {/* Hello Text */}
            <motion.div variants={itemVariants} className="mb-3">
              <span className="text-hero-muted text-lg md:text-xl font-medium tracking-wider uppercase">Hello, I'm</span>
            </motion.div>

            {/* Name with Letter Animation */}
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-hero-text mb-6 tracking-tight">
              <span className="relative inline-flex overflow-hidden" style={{ perspective: "1000px" }}>
                {nameLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    initial="hidden"
                    animate="visible"
                    className="text-gradient inline-block"
                    whileHover={{ 
                      scale: 1.2, 
                      rotateY: 20,
                      textShadow: "0 0 40px hsl(var(--primary))",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {letter}
                  </motion.span>
                ))}
                {/* Underline Animation */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-red-500 origin-left rounded-full"
                />
              </span>
            </motion.h1>

            {/* Animated Role Text */}
            <motion.div variants={itemVariants} className="h-12 md:h-14 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className={`p-2 rounded-lg bg-gradient-to-br ${roles[currentRole].color === 'text-cyan-400' ? 'from-cyan-500/20 to-cyan-500/5' : roles[currentRole].color === 'text-green-400' ? 'from-green-500/20 to-green-500/5' : roles[currentRole].color === 'text-yellow-400' ? 'from-yellow-500/20 to-yellow-500/5' : 'from-pink-500/20 to-pink-500/5'}`}
                  >
                    {(() => {
                      const IconComponent = roles[currentRole].icon;
                      return <IconComponent size={20} className={roles[currentRole].color} />;
                    })()}
                  </motion.div>
                  <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${roles[currentRole].color}`}>
                    {roles[currentRole].text}
                  </h2>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-0.5 h-8 bg-primary rounded-full"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base md:text-lg text-hero-muted max-w-xl mb-10 leading-relaxed">
              I craft <span className="text-primary font-semibold">high-performance</span> websites that rank and convert. 
              Transforming ideas into stunning digital experiences that drive <span className="text-cyan-400 font-semibold">real results</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {/* Primary CTA */}
              <motion.a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-orange text-primary-foreground rounded-full font-bold text-lg overflow-hidden"
                style={{
                  boxShadow: isHovering 
                    ? "0 0 60px 15px hsl(var(--primary) / 0.5), 0 0 100px 30px hsl(var(--primary) / 0.3)" 
                    : "0 0 30px 5px hsl(var(--primary) / 0.3)",
                }}
              >
                {/* Shimmer Effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
                {/* Pulse Ring */}
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="relative flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles size={18} />
                  </motion.span>
                  Let's Talk
                </span>
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 border-2 border-hero-text/20 text-hero-text rounded-full font-bold text-lg overflow-hidden backdrop-blur-sm hover:text-primary transition-all duration-300"
              >
                <motion.span
                  className="absolute inset-0 bg-primary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">View Projects</span>
              </motion.a>

              {/* Download CV */}
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

            {/* Stats with Counter Animation */}
            <motion.div variants={itemVariants} className="flex gap-8 md:gap-12 mt-16">
              {[
                { value: "2+", label: "Years Experience", color: "from-primary to-orange-400" },
                { value: "50+", label: "Projects Done", color: "from-cyan-400 to-blue-500" },
                { value: "100%", label: "Client Satisfaction", color: "from-green-400 to-emerald-500" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.15, type: "spring", stiffness: 200 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group cursor-default relative"
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-2 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  <div className="relative">
                    <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-hero-muted text-sm mt-1 group-hover:text-hero-text transition-colors">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Floating Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div 
              style={{ 
                x: parallaxX, 
                y: parallaxY,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              {/* Multi-layered Glow */}
              <div ref={glowRef} className="absolute inset-[-60px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-orange-500/20 to-transparent rounded-full blur-[100px]" />
                <div className="absolute inset-10 bg-gradient-to-tl from-cyan-500/20 via-transparent to-transparent rounded-full blur-[80px]" />
              </div>
              
              {/* Main Image Container */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px]">
                  {/* Orbiting Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-30px]"
                  >
                    {[0, 90, 180, 270].map((angle, i) => (
                      <motion.div
                        key={`orbit-${i}`}
                        className="absolute top-1/2 left-1/2 w-3 h-3"
                        style={{
                          transform: `rotate(${angle}deg) translateX(160px) translateY(-50%)`,
                        }}
                      >
                        <div 
                          className={`w-full h-full rounded-full ${i % 2 === 0 ? 'bg-primary' : 'bg-cyan-400'}`}
                          style={{ boxShadow: `0 0 15px 5px ${i % 2 === 0 ? 'hsl(var(--primary) / 0.5)' : 'rgba(34,211,238,0.5)'}` }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Decorative Rings */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -right-10 w-28 h-28 border border-primary/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-8 -left-8 w-24 h-24 border border-cyan-400/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -left-12 w-16 h-16 border border-orange-400/15 rounded-full"
                  />

                  {/* Floating Accent Particles */}
                  {[
                    { top: "-5%", left: "25%", size: "w-4 h-4", color: "bg-primary", delay: 0 },
                    { bottom: "-3%", right: "20%", size: "w-3 h-3", color: "bg-cyan-400", delay: 0.5 },
                    { top: "30%", right: "-8%", size: "w-3 h-3", color: "bg-orange-400", delay: 1 },
                    { bottom: "40%", left: "-6%", size: "w-2.5 h-2.5", color: "bg-pink-400", delay: 1.5 },
                  ].map((particle, i) => (
                    <motion.div
                      key={`particle-float-${i}`}
                      className={`absolute ${particle.size} ${particle.color} rounded-full`}
                      style={{ 
                        ...particle,
                        boxShadow: `0 0 20px 5px currentColor`,
                      }}
                      animate={{ 
                        y: [-15, 15, -15],
                        x: [-8, 8, -8],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ 
                        duration: 4 + i * 0.5,
                        repeat: Infinity,
                        delay: particle.delay,
                      }}
                    />
                  ))}

                  {/* Main Image Card */}
                  <motion.div 
                    whileHover={{ y: -12, scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full rounded-3xl overflow-hidden"
                    style={{
                      boxShadow: "0 30px 60px -15px hsl(var(--primary) / 0.35), 0 0 0 1px hsl(var(--primary) / 0.15)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br from-primary via-orange-400/50 to-cyan-400/30">
                      <div className="w-full h-full bg-hero-bg rounded-[21px]" />
                    </div>
                    
                    {/* Image */}
                    <div className="absolute inset-[3px] rounded-[21px] overflow-hidden">
                      <motion.img
                        src={ahmedPortrait}
                        alt="Ahmed - WordPress Developer & SEO Specialist"
                        className="w-full h-full object-cover object-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                      />
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/80 via-hero-bg/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />
                    </div>
                    
                    {/* Bottom Info Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.6 }}
                      className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-hero-bg via-hero-bg/98 to-transparent"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-hero-text font-bold text-base">Ahmed</p>
                          <p className="text-hero-muted text-xs">Developer & Designer</p>
                        </div>
                        <motion.div
                          animate={{ scale: [1, 1.08, 1] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="flex items-center gap-2 px-4 py-2 bg-green-500/15 border border-green-400/40 rounded-full backdrop-blur-sm"
                        >
                          <motion.span 
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_2px_rgba(74,222,128,0.6)]" 
                          />
                          <span className="text-green-400 text-xs font-bold tracking-wide">AVAILABLE</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Corner Accents */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -left-8 top-1/4 w-[3px] h-20 bg-gradient-to-b from-transparent via-primary to-transparent origin-top rounded-full"
                  />
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute -right-8 bottom-1/4 w-[3px] h-16 bg-gradient-to-b from-transparent via-cyan-400 to-transparent origin-bottom rounded-full"
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="absolute top-[-8px] left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-transparent via-orange-400 to-transparent origin-center rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <motion.span 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-sm font-semibold text-hero-text/50 group-hover:text-primary transition-colors tracking-wider uppercase"
            >
              Scroll Down
            </motion.span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="relative p-3 border border-hero-text/20 rounded-full group-hover:border-primary transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <ArrowDown size={18} className="relative text-hero-text/50 group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
