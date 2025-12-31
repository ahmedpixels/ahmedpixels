import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Mail, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "0321-6479192",
    href: "tel:+923216479192",
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

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
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-hero-text mb-4">
                Contact Information
              </h3>
              <p className="text-hero-text/60 leading-relaxed">
                Feel free to reach out through any of these channels. 
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-14 h-14 bg-gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <p className="text-hero-text/50 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
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

            {/* Decorative Element */}
            <motion.div
              variants={itemVariants}
              className="mt-12 p-6 border border-primary/20 rounded-2xl bg-primary/5"
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

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="bg-hero-bg/50 backdrop-blur-sm border border-border/10 rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-hero-text font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-5 py-4 bg-section-dark border border-border/20 rounded-xl text-hero-text placeholder-hero-text/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-hero-text font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-5 py-4 bg-section-dark border border-border/20 rounded-xl text-hero-text placeholder-hero-text/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-hero-text font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-section-dark border border-border/20 rounded-xl text-hero-text placeholder-hero-text/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-orange text-primary-foreground rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg glow-orange hover:shadow-2xl transition-shadow disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
