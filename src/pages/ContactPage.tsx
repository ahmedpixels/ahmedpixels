import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import OptimizedImage from "@/components/OptimizedImage";
import ahmedPortrait from "@/assets/ahmed-portrait.png";
import { MapPin, Phone, Mail, Clock, CheckCircle, Linkedin, Instagram, MessageCircle, Sparkles } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+923216479192", href: "https://wa.me/923216479192?text=Hi%20Ahmed" },
    { icon: Mail, label: "Email", value: "ahmedpixelspro@gmail.com", href: "mailto:ahmedpixelspro@gmail.com" },
    { icon: MapPin, label: "Location", value: "Lahore, Pakistan", href: null },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://pk.linkedin.com/in/ahmedpixels", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/itx_ahmed_.0/", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/923216479192?text=Hi%20Ahmed", label: "WhatsApp" },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Ahmed | WordPress Developer & SEO Specialist - Lahore</title>
        <meta name="description" content="Get in touch with Ahmed for WordPress development, SEO services, and web projects. WhatsApp: +923216479192. Email: ahmedpixelspro@gmail.com. Fast response within 24 hours." />
        <link rel="canonical" href="https://ahmedpixels.com/contact" />
        <meta property="og:title" content="Contact Ahmed | WordPress Developer & SEO Specialist" />
        <meta property="og:description" content="Get in touch for WordPress development and SEO services. Fast response within 24 hours." />
        <meta property="og:url" content="https://ahmedpixels.com/contact" />
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
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://ahmedpixels.com/contact" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Ahmed - WordPress Developer & SEO Specialist",
            "description": "Get in touch with Ahmed for WordPress development and SEO services.",
            "url": "https://ahmedpixels.com/contact",
            "mainEntity": {
              "@type": "Person",
              "name": "Ahmed",
              "jobTitle": "WordPress Developer & SEO Specialist",
              "url": "https://ahmedpixels.com",
              "telephone": "+923216479192",
              "email": "ahmedpixelspro@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "Pakistan"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+923216479192",
                "email": "ahmedpixelspro@gmail.com",
                "contactType": "customer service",
                "availableLanguage": ["English", "Urdu"],
                "areaServed": "Worldwide"
              },
              "sameAs": [
                "https://pk.linkedin.com/in/ahmedpixels",
                "https://www.instagram.com/itx_ahmed_.0/"
              ]
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
              className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8"
            >
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-[-8px] rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[50px] scale-90" />
              
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
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary rounded-bl-lg" />
            </motion.div>

            <span className="text-primary font-semibold mb-4 block">GET IN TOUCH</span>
            <h1 className="heading-xl text-hero-text mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h1>
            <p className="text-hero-muted max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Reach out through any of the channels below.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative p-6 md:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                
                {/* Decorative glows */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-primary" size={20} />
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">Start Your Project</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Send Me a Message</h2>
                  <p className="text-white/60 mb-6">Fill in your requirements and I'll get back to you within 24 hours.</p>
                  
                  <ContactForm variant="page" />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              {/* Contact Info Cards */}
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-gradient-to-r from-white/[0.06] to-transparent border border-white/10 rounded-2xl hover:border-primary/40 hover:bg-white/[0.08] hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-hero-text font-medium text-lg hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-hero-text font-medium text-lg">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 rounded-xl flex items-center justify-center text-white/60 hover:text-primary transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Why Work With Me */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300"
              >
                <h3 className="font-bold text-hero-text mb-4">Why Work With Me?</h3>
                <ul className="space-y-3">
                  {["Fast & Reliable Delivery", "SEO-Optimized Websites", "100% Client Satisfaction", "Ongoing Support"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/70">
                      <CheckCircle className="text-primary flex-shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
