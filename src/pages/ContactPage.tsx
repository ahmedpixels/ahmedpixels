import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Send, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+923216479192", href: "https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed" },
    { icon: Mail, label: "Email", value: "ahmedpixelspro@gmail.com", href: "mailto:ahmedpixelspro@gmail.com" },
    { icon: MapPin, label: "Location", value: "Lahore, Pakistan", href: null },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Ahmed | WordPress Developer & SEO Specialist</title>
        <meta name="description" content="Get in touch with Ahmed for WordPress development, SEO services, and web projects." />
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
            <span className="text-primary font-semibold mb-4 block">GET IN TOUCH</span>
            <h1 className="heading-xl text-hero-text mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h1>
            <p className="text-hero-text/60 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-2xl font-bold text-hero-text mb-8">Contact Information</h2>
              
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card/50 border border-border/20 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-hero-text/50 text-sm">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-hero-text font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-hero-text font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Why Work With Me */}
              <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl">
                <h3 className="font-bold text-hero-text mb-4">Why Work With Me?</h3>
                <ul className="space-y-3">
                  {["Fast & Reliable Delivery", "SEO-Optimized Websites", "100% Client Satisfaction", "Ongoing Support"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-hero-text/70">
                      <CheckCircle className="text-primary" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-card/50 border border-border/20 rounded-3xl p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-hero-text/70 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-hero-bg border border-border/20 rounded-xl text-hero-text focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-hero-text/70 text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-hero-bg border border-border/20 rounded-xl text-hero-text focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-hero-text/70 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-hero-bg border border-border/20 rounded-xl text-hero-text focus:border-primary focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-hero-text/70 text-sm mb-2">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-hero-bg border border-border/20 rounded-xl text-hero-text focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-orange text-primary-foreground rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
