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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
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
              <span className="text-gradient">Ahmed</span>
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
                href="#contact"
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
              {/* Background Geometric Shapes */}
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl rotate-6"
              />
              <motion.div
                initial={{ opacity: 0, rotate: 10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -inset-8 bg-gradient-to-tl from-primary/15 via-transparent to-primary/5 rounded-3xl -rotate-3"
              />
              
              {/* Glow Effect */}
              <div
                ref={glowRef}
                className="absolute inset-0 bg-gradient-orange rounded-3xl blur-3xl opacity-30 scale-110"
              />
              
              {/* Image Container */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                {/* Main Image Frame */}
                <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
                  {/* Orange accent border */}
                  <div className="absolute inset-0 bg-gradient-orange rounded-3xl transform rotate-3 opacity-80" />
                  
                  {/* Image wrapper */}
                  <div className="absolute inset-1 bg-hero-bg rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={ahmedPortrait}
                      alt="Ahmed - WordPress Developer & SEO Specialist"
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-hero-bg/80 via-hero-bg/40 to-transparent" />
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg font-bold text-sm"
                  >
                    Available for Work
                  </motion.div>
                  
                  {/* Tech stack floating icons */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="absolute -right-4 top-1/4 bg-hero-bg/90 backdrop-blur-sm border border-primary/20 px-3 py-2 rounded-xl shadow-lg"
                  >
                    <div className="text-xs text-hero-text/60">Expert in</div>
                    <div className="text-sm font-bold text-primary">WordPress & SEO</div>
                  </motion.div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 border-2 border-primary/40 rounded-xl rotate-12" />
                <div className="absolute -bottom-8 -right-8 w-20 h-20 border-2 border-primary/20 rounded-full" />
                <div className="absolute top-1/2 -left-10 w-4 h-4 bg-primary rounded-full animate-pulse" />
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
