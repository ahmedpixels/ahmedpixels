import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MapPin, Code, Search, Palette, Rocket } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.png";
import OptimizedImage from "./OptimizedImage";
import ParticlesBackground from "./ParticlesBackground";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = [
    "WordPress Developer",
    "SEO Specialist", 
    "E-commerce Expert",
    "Web Designer"
  ];

  const floatingIcons = [
    { Icon: Code, delay: 0, position: "top-20 left-[15%]" },
    { Icon: Search, delay: 0.5, position: "top-40 right-[10%]" },
    { Icon: Palette, delay: 1, position: "bottom-40 left-[8%]" },
    { Icon: Rocket, delay: 1.5, position: "bottom-32 right-[15%]" },
  ];

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen bg-hero-bg relative overflow-hidden flex items-center">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Advanced gradient background */}
      <div className="absolute inset-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 right-[20%] w-32 h-32 border border-primary/20 rotate-45"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(45deg)`,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-[15%] w-24 h-24 border border-primary/15 rotate-12"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px) rotate(12deg)`,
          }}
        />
        <motion.div
          className="absolute top-1/3 left-[5%] w-16 h-16 bg-primary/10 rotate-45"
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Dotted pattern */}
        <div 
          className="absolute top-10 left-10 w-32 h-32 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1.5px, transparent 1.5px)`,
            backgroundSize: '12px 12px',
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 2px, transparent 2px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 0.4, 
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { delay, duration: 0.5 },
            y: { delay, duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
            <Icon size={24} className="text-primary" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-28">
          {/* Left Content */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Location Badge */}
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm text-hero-muted">Lahore, Pakistan</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Hello Text with typing effect */}
            <motion.p 
              className="text-hero-muted text-xl mb-3 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary">&lt;</span> Hello, I'm <span className="text-primary">/&gt;</span>
            </motion.p>

            {/* Name with enhanced styling */}
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-hero-text mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-gradient inline-block">AHMED</span>
            </motion.h1>
            
            <motion.div
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-text/80 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              PIXELS
            </motion.div>

            {/* Animated Role with enhanced styling */}
            <div className="h-12 md:h-14 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ y: 40, opacity: 0, rotateX: -45 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -40, opacity: 0, rotateX: 45 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary flex items-center gap-3"
                >
                  <span className="w-8 h-[2px] bg-primary" />
                  {roles[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Description with gradient border */}
            <motion.div
              className="relative mb-10 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
              <p className="text-hero-muted text-lg leading-relaxed pl-2">
                I craft high-performance websites that rank and convert. 
                Transforming ideas into stunning digital experiences that drive real results.
              </p>
            </motion.div>

            {/* CTA Buttons with enhanced styling */}
            <motion.nav 
              className="flex flex-wrap gap-4"
              aria-label="Primary actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Contact Ahmed on WhatsApp"
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-shadow" />
              </a>

              <a
                href="#portfolio"
                className="group relative px-8 py-4 bg-transparent text-hero-text rounded-full font-semibold overflow-hidden transition-all hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background gradient-border-btn"
                aria-label="View portfolio projects"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </a>
            </motion.nav>

            {/* Stats row */}
            <motion.div
              className="flex gap-8 mt-12 pt-8 border-t border-hero-text/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Right - Image with advanced effects */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div 
              className="relative"
              style={{
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
              }}
            >
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-[-20px] rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Secondary rotating ring */}
              <motion.div
                className="absolute inset-[-40px] rounded-full border border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-primary/30 rounded-full blur-[100px] scale-90"
                animate={{
                  scale: [0.9, 1, 0.9],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
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
                  />
                </div>


                {/* Corner decorations */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator with enhanced animation */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hero-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg p-2 group"
          aria-label="Scroll down to About section"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={18} className="group-hover:text-primary transition-colors" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
