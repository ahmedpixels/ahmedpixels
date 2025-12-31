import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, GraduationCap, Briefcase, Target, Heart, Zap } from "lucide-react";

const AboutPage = () => {
  const highlights = [
    { icon: Briefcase, title: "2+ Years", subtitle: "Experience" },
    { icon: Target, title: "50+", subtitle: "Projects Done" },
    { icon: Heart, title: "100%", subtitle: "Client Satisfaction" },
    { icon: Zap, title: "Fast", subtitle: "Delivery" },
  ];

  return (
    <>
      <Helmet>
        <title>About Ahmed | WordPress Developer & SEO Specialist</title>
        <meta name="description" content="Learn about Ahmed, a WordPress Developer & SEO Specialist based in Lahore, Pakistan with 2+ years of experience." />
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
            <span className="text-primary font-semibold mb-4 block">ABOUT ME</span>
            <h1 className="heading-xl text-hero-text mb-6">
              Know More <span className="text-gradient">About Me</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-hero-text/60">
              <MapPin size={18} className="text-primary" />
              <span>Lahore, Pakistan</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card/50 border border-border/20 rounded-2xl p-6 text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-hero-text">{item.title}</div>
                <div className="text-hero-text/50 text-sm">{item.subtitle}</div>
              </div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-hero-text mb-6">My Journey</h2>
              <div className="space-y-4 text-hero-text/70 leading-relaxed">
                <p>
                  I'm Ahmed, a passionate WordPress Developer and SEO Specialist based in Lahore, Pakistan. 
                  With over 2 years of hands-on experience, I've dedicated myself to creating websites that 
                  not only look stunning but also perform exceptionally well.
                </p>
                <p>
                  My journey began at Brains College, Baghwanpura, where I learned the fundamentals of 
                  web development. Since then, I've worked with numerous clients across various industries, 
                  helping them establish their digital presence.
                </p>
                <p>
                  I specialize in building E-commerce websites, B2B platforms, Tech websites, Catalogue sites, 
                  and both single-page and multi-page web applications. My expertise extends to Shopify 
                  development as well.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-hero-text mb-6">Education & Skills</h2>
              
              <div className="bg-card/50 border border-border/20 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-hero-text">Brains College</h3>
                    <p className="text-hero-text/60 text-sm">Baghwanpura, Lahore</p>
                    <p className="text-hero-text/50 text-sm mt-2">WordPress & Web Development</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-hero-text">Core Expertise:</h3>
                <div className="flex flex-wrap gap-3">
                  {["WordPress", "SEO", "E-commerce", "Shopify", "HTML/CSS", "JavaScript", "PHP", "Performance Optimization"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
