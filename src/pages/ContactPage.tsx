import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import ahmedPortrait from "@/assets/ahmed-portrait.png";
import { MapPin, Phone, Mail, Clock, CheckCircle, Linkedin, Instagram, MessageCircle } from "lucide-react";

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
        <link rel="canonical" href="https://ahmedpixels.pro/contact" />
        <meta property="og:title" content="Contact Ahmed | WordPress Developer & SEO Specialist" />
        <meta property="og:description" content="Get in touch for WordPress development and SEO services. Fast response within 24 hours." />
        <meta property="og:url" content="https://ahmedpixels.pro/contact" />
        <meta property="og:image" content="https://ahmedpixels.pro/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ahmedpixels.pro/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ahmedpixels.pro/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://ahmedpixels.pro/contact" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Ahmed - WordPress Developer & SEO Specialist",
            "description": "Get in touch with Ahmed for WordPress development and SEO services.",
            "url": "https://ahmedpixels.pro/contact",
            "mainEntity": {
              "@type": "Person",
              "name": "Ahmed",
              "jobTitle": "WordPress Developer & SEO Specialist",
              "url": "https://ahmedpixels.pro",
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

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Contact Info Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4 p-5 bg-card/50 border border-border/20 rounded-2xl hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <p className="text-primary-light text-sm">{item.label}</p>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <h3 className="text-hero-text font-semibold text-center mb-4">Connect With Me</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-primary/5 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 rounded-xl flex items-center justify-center text-primary-light hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Why Work With Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300"
            >
              <h3 className="font-bold text-hero-text mb-4">Why Work With Me?</h3>
              <ul className="space-y-3">
                {["Fast & Reliable Delivery", "SEO-Optimized Websites", "100% Client Satisfaction", "Ongoing Support"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-light">
                    <CheckCircle className="text-primary" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
