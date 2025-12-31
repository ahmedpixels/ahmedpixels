import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "TechVenture Pro",
    type: "Tech Website",
    description: "A cutting-edge technology company website with modern design and seamless user experience.",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    name: "ShopStyle Elite",
    type: "E-commerce",
    description: "Full-featured e-commerce platform with advanced product filtering and secure checkout.",
    color: "from-primary to-orange-400",
  },
  {
    id: 3,
    name: "Corporate Solutions",
    type: "B2B Website",
    description: "Professional B2B website designed to generate leads and showcase enterprise solutions.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    name: "Product Showcase",
    type: "Catalogue",
    description: "Interactive product catalogue with advanced search and category management.",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 5,
    name: "StartUp Launch",
    type: "Single Page",
    description: "High-converting landing page for a tech startup with optimized performance.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    id: 6,
    name: "Fashion Store",
    type: "Shopify",
    description: "Custom Shopify store with unique branding and optimized checkout flow.",
    color: "from-amber-500 to-yellow-600",
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
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2"
                      >
                        View Project <ExternalLink size={16} />
                      </motion.button>
                    </div>
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
