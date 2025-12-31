import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ArrowUp, MapPin, Phone, Mail, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "WordPress Development",
    "SEO Optimization",
    "E-commerce Websites",
    "Shopify Stores",
  ];

  return (
    <footer className="bg-hero-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-orange" />

      <div className="container-custom px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="text-3xl font-bold text-hero-text font-space inline-block mb-4">
              AHMED<span className="text-primary">.</span>
            </Link>
            <p className="text-hero-text/60 mb-6 leading-relaxed">
              Crafting high-performance websites that rank and convert. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-hero-text/5 hover:bg-primary/20 border border-border/20 hover:border-primary/30 rounded-xl flex items-center justify-center text-hero-text/60 hover:text-primary transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-hero-text font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-hero-text/60 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/#portfolio"
                  className="text-hero-text/60 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                  Portfolio
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-hero-text font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-hero-text/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-hero-text font-bold text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-hero-text/60">Lahore, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-hero-text/60">0321-6479192</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-hero-text/60">ahmedpixelspro@gmail.com</span>
              </li>
            </ul>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-orange text-primary-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-hero-text/40 text-sm flex items-center gap-1"
          >
            © {currentYear} AHMED. All rights reserved. Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-primary inline" size={14} fill="currentColor" />
            </motion.span>{" "}
            in Lahore
          </motion.p>

          {/* Scroll to Top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center shadow-lg group"
          >
            <ArrowUp className="text-primary-foreground group-hover:animate-bounce" size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
