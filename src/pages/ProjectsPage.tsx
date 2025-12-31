import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "PixelHash Tech",
    type: "Tech Website",
    description: "Digital agency website with modern design and seamless user experience.",
    color: "from-orange-500 to-amber-500",
    url: "https://pixelhashtech.com/",
  },
  {
    id: 2,
    name: "Shine Wall Stone",
    type: "Business Website",
    description: "Premium stone and marble company showcase with elegant product displays.",
    color: "from-blue-500 to-cyan-500",
    url: "https://shinewallstone.com/",
  },
  {
    id: 3,
    name: "Silks Pool",
    type: "E-commerce",
    description: "Luxury fabric and textile online store with advanced product filtering.",
    color: "from-amber-600 to-orange-600",
    url: "https://silkspool.com/",
  },
  {
    id: 4,
    name: "Jeddah Auto Spare Parts",
    type: "E-commerce",
    description: "Auto parts e-commerce store with comprehensive catalog and secure checkout.",
    color: "from-purple-500 to-pink-500",
    url: "https://jeddahautospareparts.com/",
  },
  {
    id: 5,
    name: "Eleeva Adhesives",
    type: "Corporate Website",
    description: "Industrial adhesives manufacturer website with product specifications.",
    color: "from-emerald-500 to-teal-500",
    url: "https://eleevaadhesives.com/",
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Ahmed - WordPress Developer & SEO Specialist</title>
        <meta name="description" content="Explore Ahmed's portfolio of WordPress websites, e-commerce stores, and SEO projects." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-hero-bg pt-32 pb-20">
        <div className="container-custom px-8 md:px-12 lg:px-16 xl:px-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">MY WORK</span>
            <h1 className="heading-xl text-hero-text mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-hero-text/60 max-w-2xl mx-auto">
              A showcase of my best work across various industries and platforms
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card/50 border border-border/20 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                  {/* Project Preview */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Globe className="w-16 h-16 text-white/30" />
                    </div>
                    
                    {/* Hover Overlay */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2"
                      >
                        View Project <ExternalLink size={16} />
                      </motion.span>
                    </a>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">{project.type}</span>
                    <h3 className="text-xl font-bold text-hero-text mt-2 mb-3">{project.name}</h3>
                    <p className="text-hero-text/60 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectsPage;
