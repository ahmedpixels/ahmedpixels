import { motion, useInView, useAnimationControls } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

import pixelhashtech from "@/assets/projects/pixelhashtech-mobile.png";
import shinewallstone from "@/assets/projects/shinewallstone-mobile.png";
import silkspool from "@/assets/projects/silkspool-mobile.png";
import jeddahautospareparts from "@/assets/projects/jeddahautospareparts-mobile.png";
import eleevaadhesives from "@/assets/projects/eleevaadhesives-mobile.png";

const projects = [
  {
    title: "PixelHash Tech",
    type: "Tech Website",
    description: "Digital agency website with modern design",
    color: "from-orange-500 to-amber-500",
    url: "https://pixelhashtech.com/",
    screenshot: pixelhashtech,
  },
  {
    title: "Shine Wall Stone",
    type: "Business Website",
    description: "Premium stone and marble company showcase",
    color: "from-blue-500 to-cyan-500",
    url: "https://shinewallstone.com/",
    screenshot: shinewallstone,
  },
  {
    title: "Silks Pool",
    type: "E-commerce Website",
    description: "Industrial sewing machine parts distributor",
    color: "from-amber-600 to-orange-600",
    url: "https://silkspool.com/",
    screenshot: silkspool,
  },
  {
    title: "Jeddah Auto Spare Parts",
    type: "E-commerce Website",
    description: "Premium automotive filters store",
    color: "from-purple-500 to-pink-500",
    url: "https://jeddahautospareparts.com/",
    screenshot: jeddahautospareparts,
  },
  {
    title: "Eleeva Adhesives",
    type: "Corporate Website",
    description: "Industrial adhesives manufacturer website",
    color: "from-emerald-500 to-teal-500",
    url: "https://eleevaadhesives.com/",
    screenshot: eleevaadhesives,
  },
];

const PhoneMockup = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative block cursor-pointer"
    >
      {/* Phone Frame */}
      <div 
        className="relative bg-foreground rounded-[2.5rem] p-2 shadow-2xl mx-auto w-[220px] md:w-[260px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground rounded-b-2xl z-20" />
        
        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden h-[380px] md:h-[450px] relative bg-slate-900">
          {/* Full-page Scroll Preview */}
          <motion.img
            src={project.screenshot}
            alt={`${project.title} website preview`}
            animate={isPaused ? {} : { y: ["0%", "-85%", "0%"] }}
            transition={{
              y: {
                duration: 60,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            className="w-full h-auto"
            style={{ imageRendering: 'crisp-edges' }}
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-4 py-2 bg-white text-black rounded-full font-semibold text-sm flex items-center gap-2">
              Visit Site <ExternalLink size={14} />
            </span>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        className="mt-6 text-center"
      >
        <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-primary text-sm font-medium mt-1">{project.type}</p>
        <p className="text-muted-foreground text-sm mt-2 max-w-[200px] mx-auto">
          {project.description}
        </p>
      </motion.div>
    </motion.a>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding bg-section-light" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="heading-lg text-foreground mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            A showcase of websites I've built for clients across various industries. 
            Each project is crafted with attention to detail and optimized for performance.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <PhoneMockup key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://web.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-orange text-primary-foreground rounded-full font-bold shadow-lg glow-orange hover:shadow-2xl transition-shadow"
          >
            Start Your Project
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
