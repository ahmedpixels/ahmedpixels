import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Mail, CheckCircle, Linkedin, Instagram, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+923216479192",
    href: "https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "ahmedpixelspro@gmail.com",
    href: "mailto:ahmedpixelspro@gmail.com",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="contact" className="section-padding bg-section-dark" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="heading-lg text-hero-text mt-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="body-lg text-hero-text/60 max-w-2xl mx-auto mt-4">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
            I'm always excited to work on new challenges.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-hero-bg/50 border border-border/10 rounded-2xl"
                >
                  <div className="w-14 h-14 bg-gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <p className="text-hero-text/50 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-hero-text font-semibold text-lg hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-hero-text font-semibold text-lg">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-orange text-primary-foreground rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg glow-orange hover:shadow-2xl transition-shadow"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="text-hero-text font-semibold text-center mb-4">Connect With Me</h4>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Linkedin, href: "https://pk.linkedin.com/in/ahmedpixels", label: "LinkedIn" },
                  { icon: Instagram, href: "https://www.instagram.com/itx_ahmed_.0/", label: "Instagram" },
                  { icon: MessageCircle, href: "https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed", label: "WhatsApp" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-hero-text/5 hover:bg-primary/20 border border-border/20 hover:border-primary/30 rounded-xl flex items-center justify-center text-hero-text/60 hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Why Work With Me */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 border border-primary/20 rounded-2xl bg-primary/5"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-hero-text font-semibold mb-2">
                    Why Work With Me?
                  </h4>
                  <ul className="text-hero-text/60 text-sm space-y-2">
                    <li>• Clean, maintainable code</li>
                    <li>• SEO-optimized from the ground up</li>
                    <li>• Mobile-first responsive design</li>
                    <li>• Clear communication throughout</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
