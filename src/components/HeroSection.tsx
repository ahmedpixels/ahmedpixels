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
      
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              currentColor 35px,
              currentColor 36px
            )`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
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
              className="text-lg text-hero-text/60 max-w-xl mb-10 leading-relaxed"
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
                href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-orange text-primary-foreground rounded-full font-bold text-lg shadow-lg glow-orange hover:shadow-2xl transition-shadow"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-hero-text/20 text-hero-text rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-colors"
              >
                View Projects
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
                <div className="text-hero-text/50 text-sm mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-hero-text/50 text-sm mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-hero-text/50 text-sm mt-1">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
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
              
              {/* Floating dots */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 left-1/4 w-3 h-3 bg-primary rounded-full"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 right-1/4 w-2 h-2 bg-primary/60 rounded-full"
              />
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-1/3 -right-8 w-4 h-4 bg-primary/40 rounded-full"
              />

              {/* Glow Effect */}
              <div
                ref={glowRef}
                className="absolute inset-4 bg-primary/30 rounded-full blur-3xl"
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/50 to-primary/20 rounded-[2rem] p-1">
                    <div className="w-full h-full bg-hero-bg rounded-[1.8rem] overflow-hidden">
                      <img
                        src={ahmedPortrait}
                        alt="Ahmed - WordPress Developer & SEO Specialist"
                        className="w-full h-full object-cover object-top scale-110 hover:scale-100 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-primary rounded-tl-xl" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-primary rounded-tr-xl" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-primary rounded-bl-xl" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-primary rounded-br-xl" />
                </div>

                {/* Status badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-hero-bg border-2 border-primary px-6 py-3 rounded-full shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-hero-text font-semibold text-sm whitespace-nowrap">Open to Work</span>
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
