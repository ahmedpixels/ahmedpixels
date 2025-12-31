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

      <div className="container-custom relative z-10">
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
              {/* Glow Effect */}
              <div
                ref={glowRef}
                className="absolute inset-0 bg-gradient-orange rounded-full blur-3xl opacity-40 scale-110"
              />
              
              {/* Image Container */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img
                    src={ahmedPortrait}
                    alt="Ahmed - WordPress Developer & SEO Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-full" />
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
