import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, MapPin } from "lucide-react";
import ahmedPortrait from "@/assets/ahmed-portrait.jpg";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

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
        scale: 1.1,
        opacity: 0.6,
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
      {/* Background Pattern - Cyberpunk Grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Neon Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-teal-500/10 rounded-full blur-[90px]" />
      </div>

      {/* Scan Lines Effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(var(--primary) / 0.1) 2px,
            hsl(var(--primary) / 0.1) 4px
          )`,
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
              className="flex items-center gap-2 text-primary mb-6"
            >
              <MapPin size={18} />
              <span className="font-medium">Lahore, Pakistan</span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="heading-xl text-hero-text mb-4"
            >
              Hi, I'm{" "}
              <span className="text-gradient">AHMED</span>
            </motion.h1>

            <motion.h2
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-2xl md:text-4xl font-semibold text-hero-text/80 mb-6"
            >
              WordPress Developer & SEO Specialist
            </motion.h2>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg text-hero-muted max-w-xl mb-10 leading-relaxed"
            >
              I craft high-performance websites that rank and convert. 
              With 2 years of experience, I transform ideas into stunning 
              digital experiences that drive results.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://wa.me/923216479192?text=Hello%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-orange text-primary-foreground rounded-full font-bold text-lg shadow-lg glow-orange hover:shadow-2xl transition-shadow"
              >
                Let's Talk
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
              className="flex gap-12 mt-16"
            >
              <div>
                <div className="text-4xl font-bold text-primary">2+</div>
                <div className="text-hero-muted text-sm mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-hero-muted text-sm mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-hero-muted text-sm mt-1">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated neon rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-30px] rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent 40%, hsl(var(--primary)) 50%, transparent 60%)',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full bg-hero-bg rounded-full" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50px] rounded-full"
                style={{
                  background: 'linear-gradient(180deg, transparent 30%, rgba(6, 182, 212, 0.5) 50%, transparent 70%)',
                  padding: '1px',
                }}
              >
                <div className="w-full h-full bg-hero-bg rounded-full" />
              </motion.div>

              {/* Floating neon particles */}
              <motion.div
                animate={{ y: [-15, 15, -15], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-10 left-1/4 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_5px_rgba(34,211,238,0.5)]"
              />
              <motion.div
                animate={{ y: [10, -10, 10], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 right-1/4 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_12px_4px_rgba(239,68,68,0.5)]"
              />
              <motion.div
                animate={{ x: [-8, 8, -8], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-1/3 -right-10 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_5px_rgba(249,115,22,0.5)]"
              />
              <motion.div
                animate={{ x: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/2 -left-8 w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_3px_rgba(45,212,191,0.5)]"
              />

              {/* Glow Effect - Neon style */}
              <div
                ref={glowRef}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-primary/30 to-red-500/20 rounded-full blur-[60px]"
              />
              
              {/* Main Image Container */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                {/* Neon frame */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
                  {/* Multi-color gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-primary to-red-500 rounded-3xl p-[3px] shadow-[0_0_40px_10px_rgba(249,115,22,0.3)]">
                    <div className="w-full h-full bg-hero-bg rounded-[21px] overflow-hidden">
                      <img
                        src={ahmedPortrait}
                        alt="Ahmed - WordPress Developer & SEO Specialist"
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  {/* Neon corner accents */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 border-l-4 border-t-4 border-cyan-400 rounded-tl-2xl shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]" />
                  <div className="absolute -top-3 -right-3 w-10 h-10 border-r-4 border-t-4 border-primary rounded-tr-2xl shadow-[0_0_10px_2px_rgba(249,115,22,0.5)]" />
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 border-l-4 border-b-4 border-primary rounded-bl-2xl shadow-[0_0_10px_2px_rgba(249,115,22,0.5)]" />
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 border-r-4 border-b-4 border-red-500 rounded-br-2xl shadow-[0_0_10px_2px_rgba(239,68,68,0.5)]" />
                </div>

                {/* Status badge - Neon style */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-hero-bg/90 backdrop-blur-sm border-2 border-green-400 px-6 py-3 rounded-full shadow-[0_0_20px_5px_rgba(74,222,128,0.3)]"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_3px_rgba(74,222,128,0.5)]" />
                    <span className="text-green-400 font-bold text-sm whitespace-nowrap">Available for Hire</span>
                  </div>
                </motion.div>
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
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
