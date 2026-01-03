import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, GraduationCap, Briefcase, Target, Heart, Zap, Award, Rocket, Users, Code } from "lucide-react";

const AboutPage = () => {
  const highlights = [
    { icon: Briefcase, title: "2+ Years", subtitle: "Experience" },
    { icon: Target, title: "50+", subtitle: "Projects Done" },
    { icon: Heart, title: "100%", subtitle: "Client Satisfaction" },
    { icon: Zap, title: "Fast", subtitle: "Delivery" },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Senior WordPress Developer",
      description: "Started taking on complex e-commerce and enterprise-level projects. Expanded expertise to Shopify development.",
      icon: Rocket,
      achievements: ["50+ Projects Completed", "Enterprise Clients"],
    },
    {
      year: "2022",
      title: "Freelance Developer & SEO Specialist",
      description: "Launched freelance career, focusing on WordPress development and SEO optimization for small businesses.",
      icon: Code,
      achievements: ["First 20 Clients", "SEO Mastery"],
    },
    {
      year: "2022",
      title: "Completed Web Development Training",
      description: "Graduated from Brains College, Baghwanpura with comprehensive knowledge in WordPress and web development.",
      icon: GraduationCap,
      achievements: ["Certification", "Technical Foundation"],
    },
    {
      year: "2021",
      title: "Started Learning Journey",
      description: "Began learning HTML, CSS, JavaScript, and WordPress development. Discovered passion for creating websites.",
      icon: Award,
      achievements: ["Self-Learning", "First Website"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Ahmed | WordPress Developer & SEO Specialist - Lahore</title>
        <meta name="description" content="Learn about Ahmed, a WordPress Developer & SEO Specialist based in Lahore, Pakistan with 2+ years of experience. 50+ projects completed with 100% client satisfaction." />
        <link rel="canonical" href="https://ahmedpixels.pro/about" />
        <meta property="og:title" content="About Ahmed | WordPress Developer & SEO Specialist" />
        <meta property="og:description" content="WordPress Developer & SEO Specialist based in Lahore, Pakistan with 2+ years of experience." />
        <meta property="og:url" content="https://ahmedpixels.pro/about" />
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
            <div className="flex items-center justify-center gap-2 text-hero-muted">
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
                className="bg-card/50 border border-border/20 rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">{item.title}</div>
                <div className="text-white/70 text-sm">{item.subtitle}</div>
              </div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-hero-text mb-6">My Journey</h2>
              <div className="space-y-4 text-hero-muted leading-relaxed">
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
              
              <div className="bg-card/50 border border-border/20 rounded-2xl p-6 mb-6 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Brains College</h3>
                    <p className="text-white/70 text-sm">Baghwanpura, Lahore</p>
                    <p className="text-white/70 text-sm mt-2">WordPress & Web Development</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-white">Core Expertise:</h3>
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

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-hero-text text-center mb-4">
              Career <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-hero-muted text-center max-w-xl mx-auto mb-12">
              My professional journey and key milestones along the way
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full hidden md:block" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-card/50 border border-border/20 rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300"
                    >
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70 text-sm mb-4">{item.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        {item.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-hero-bg border border-border/20 rounded-full text-xs text-white/60"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-orange rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <item.icon className="text-primary-foreground" size={28} />
                    </motion.div>
                  </div>

                  {/* Empty Space for Alternating Layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-card/50 border border-border/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
              <div className="relative z-10">
                <h2 className="heading-lg text-white">
                  Ready to Start Your <span className="text-gradient">Project?</span>
                </h2>
                <p className="text-white/70 mt-4 max-w-xl mx-auto">
                  Let's discuss your requirements and create something amazing together.
                  Get a free consultation today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <motion.a
                    href="https://web.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed,%20I%20want%20to%20get%20a%20quote%20for%20my%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-orange text-primary-foreground font-bold px-8 py-4 rounded-full glow-orange"
                  >
                    Get a Free Quote
                    <Rocket size={20} />
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 border-2 border-hero-text/20 text-hero-text font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-colors"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
