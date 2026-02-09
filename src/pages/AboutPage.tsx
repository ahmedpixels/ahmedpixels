import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import OptimizedImage from "@/components/OptimizedImage";
import ahmedPortrait from "@/assets/ahmed-portrait.png";
import { MapPin, GraduationCap, Briefcase, Target, Heart, Zap, Award, Rocket, Code } from "lucide-react";

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
        <link rel="canonical" href="https://ahmedpixels.com/about" />
        <meta property="og:title" content="About Ahmed | WordPress Developer & SEO Specialist" />
        <meta property="og:description" content="WordPress Developer & SEO Specialist based in Lahore, Pakistan with 2+ years of experience." />
        <meta property="og:url" content="https://ahmedpixels.com/about" />
        <meta property="og:image" content="https://ahmedpixels.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ahmedpixels.com/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ahmedpixels.com" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ahmedpixels.com/about" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Ahmed - WordPress Developer & SEO Specialist",
            "description": "Learn about Ahmed, a WordPress Developer & SEO Specialist based in Lahore, Pakistan with 2+ years of experience.",
            "url": "https://ahmedpixels.com/about",
            "mainEntity": {
              "@type": "Person",
              "name": "Ahmed",
              "jobTitle": "WordPress Developer & SEO Specialist",
              "description": "Professional WordPress Developer and SEO Specialist with 2+ years of experience, specializing in E-commerce, B2B platforms, and performance optimization.",
              "url": "https://ahmedpixels.com",
              "image": "https://ahmedpixels.com/og-image.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "Pakistan"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Brains College, Baghwanpura"
              },
              "knowsAbout": ["WordPress Development", "SEO", "E-commerce", "WooCommerce", "Shopify", "Web Development", "Performance Optimization"]
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-hero-bg pt-32 pb-20">
        <div className="container-custom px-8 md:px-12 lg:px-16 xl:px-24">
          {/* Header with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8"
            >
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-[-10px] rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[60px] scale-90" />
              
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-primary/50">
                <div className="w-full h-full rounded-full bg-hero-bg" />
              </div>
              
              {/* Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <OptimizedImage
                  src={ahmedPortrait}
                  alt="Ahmed Pixels - WordPress Developer & SEO Specialist"
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
              
              {/* Corner decorations */}
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-lg" />
            </motion.div>

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
                className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] hover:bg-primary/15 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-hero-text">{item.title}</div>
                <div className="text-primary-light text-sm">{item.subtitle}</div>
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
                  I'm Ahmed — a WordPress Developer and SEO Specialist based in Lahore, Pakistan. 
                  Over the past 2+ years, I've delivered 50+ websites for clients across Pakistan, Saudi Arabia, 
                  USA, and the UK — helping them get found on Google and grow their business online.
                </p>
                <p>
                  My journey started at Brains College, Baghwanpura, where I learned the fundamentals of web development. 
                  From there, I built my expertise in WordPress, WooCommerce, Shopify, and SEO through real-world projects. 
                  Today, I build e-commerce stores, corporate websites, landing pages, and complete 
                  Shopify stores for businesses of all sizes.
                </p>
                <p>
                  Every project I deliver includes on-page SEO, speed optimization, mobile-responsive design, and 
                  Google Search Console setup as standard — because a website is only valuable if it actually 
                  shows up on Google.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-hero-text mb-6">Education & Skills</h2>
              
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-6 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] hover:bg-primary/15 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-hero-text">Brains College</h3>
                    <p className="text-primary-light text-sm">Baghwanpura, Lahore</p>
                    <p className="text-primary-light text-sm mt-2">Web Development & Digital Marketing</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-hero-text">Core Expertise:</h3>
                <div className="flex flex-wrap gap-3">
                  {["WordPress", "WooCommerce", "Shopify", "On-Page SEO", "Technical SEO", "HTML/CSS", "PHP", "Speed Optimization", "Google Search Console", "Schema Markup"].map((skill) => (
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
                      className="bg-primary/10 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] hover:bg-primary/15 transition-all duration-300"
                    >
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-hero-text mb-2">{item.title}</h3>
                      <p className="text-primary-light text-sm mb-4">{item.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        {item.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary-light"
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
                      className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25"
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
          <CTASection 
            title="Ready to Start Your"
            highlight="Project?"
            subtitle="Let's discuss your requirements and create something amazing together. Get a free consultation today!"
            primaryText="Get a Free Quote"
            secondaryText="View My Work"
            secondaryLink="/projects"
            className="mt-12 -mx-8 md:-mx-12 lg:-mx-16 xl:-mx-24"
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
