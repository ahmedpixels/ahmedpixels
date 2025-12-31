import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "PixelHash Tech",
    type: "Tech Website",
    description: "Digital agency website with modern design",
    color: "from-orange-500 to-amber-500",
    mockupBg: "bg-gradient-to-b from-slate-900 to-slate-800",
    url: "https://pixelhashtech.com/",
  },
  {
    title: "Shine Wall Stone",
    type: "Business Website",
    description: "Premium stone and marble company showcase",
    color: "from-blue-500 to-cyan-500",
    mockupBg: "bg-gradient-to-b from-blue-900 to-slate-800",
    url: "https://shinewallstone.com/",
  },
  {
    title: "Silks Pool",
    type: "E-commerce Website",
    description: "Luxury fabric and textile online store",
    color: "from-amber-600 to-orange-600",
    mockupBg: "bg-gradient-to-b from-amber-900 to-stone-800",
    url: "https://silkspool.com/",
  },
  {
    title: "Jeddah Auto Spare Parts",
    type: "E-commerce Website",
    description: "Auto parts store with advanced filtering",
    color: "from-purple-500 to-pink-500",
    mockupBg: "bg-gradient-to-b from-purple-900 to-slate-800",
    url: "https://jeddahautospareparts.com/",
  },
  {
    title: "Eleeva Adhesives",
    type: "Corporate Website",
    description: "Industrial adhesives manufacturer website",
    color: "from-emerald-500 to-teal-500",
    mockupBg: "bg-gradient-to-b from-emerald-900 to-slate-800",
    url: "https://eleevaadhesives.com/",
  },
];

const PhoneMockup = ({ project, index }: { project: typeof projects[0]; index: number }) => {
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
      <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-2xl mx-auto w-[220px] md:w-[260px]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground rounded-b-2xl z-20" />
        
        {/* Screen */}
        <div className={`rounded-[2rem] overflow-hidden h-[380px] md:h-[450px] ${project.mockupBg} relative`}>
          {/* Scrolling Content Simulation */}
          <div className="absolute inset-0 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color}`} />
                <div className="h-3 w-20 bg-primary/30 rounded" />
              </div>
            </div>
            
            {/* Scrolling Content */}
            <div className="flex-1 overflow-hidden relative">
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  y: {
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  },
                }}
                className="space-y-4 p-4"
              >
                {/* Hero Block */}
                <div className={`h-32 rounded-xl bg-gradient-to-br ${project.color} opacity-80`} />
                
                {/* Content Blocks */}
                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-primary/20 rounded" />
                  <div className="h-4 w-full bg-primary/10 rounded" />
                  <div className="h-4 w-2/3 bg-primary/10 rounded" />
                </div>
                
                {/* Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-primary/10 rounded-lg" />
                  <div className="h-24 bg-primary/15 rounded-lg" />
                </div>
                
                {/* More Content */}
                <div className="h-20 bg-primary/10 rounded-xl" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-primary/10 rounded" />
                  <div className="h-3 w-4/5 bg-primary/10 rounded" />
                </div>
                
                {/* CTA */}
                <div className={`h-12 rounded-full bg-gradient-to-r ${project.color} opacity-70`} />
                
                {/* Footer */}
                <div className="h-32 bg-primary/5 rounded-xl mt-4" />
                
                {/* Duplicate for seamless loop */}
                <div className={`h-32 rounded-xl bg-gradient-to-br ${project.color} opacity-80`} />
                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-primary/20 rounded" />
                  <div className="h-4 w-full bg-primary/10 rounded" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-primary/10 rounded-lg" />
                  <div className="h-24 bg-primary/15 rounded-lg" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info - Shows on Hover */}
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
            href="#contact"
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
