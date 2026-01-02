import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Mail, CheckCircle, Linkedin, Instagram, MessageCircle, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+923216479192",
    href: "https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: null,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ahmedpixelspro@gmail.com",
    href: "mailto:ahmedpixelspro@gmail.com",
    gradient: "from-pink-500 to-rose-500",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://pk.linkedin.com/in/ahmedpixels", label: "LinkedIn", gradient: "from-blue-500 to-cyan-500" },
  { icon: Instagram, href: "https://www.instagram.com/itx_ahmed_.0/", label: "Instagram", gradient: "from-pink-500 to-rose-500" },
  { icon: MessageCircle, href: "https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed", label: "WhatsApp", gradient: "from-emerald-500 to-teal-500" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as keyof typeof errors] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: result.data.name,
        email: result.data.email,
        message: result.data.message,
      });

      if (error) throw error;

      // Send email notification
      await supabase.functions.invoke("send-contact-notification", {
        body: {
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
        },
      });

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-4">
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
                  className="relative flex items-center gap-4 p-4 bg-hero-bg/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-white/20 transition-all duration-300"
                >
                  {/* Gradient accent on left */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${info.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-white/60 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold text-lg hover:text-white/80 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-lg">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="relative space-y-4 p-6 bg-hero-bg/50 border border-white/10 rounded-2xl overflow-hidden group"
            >
              {/* Gradient accent at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500" />
              
              <h4 className="text-white font-semibold text-lg mb-4">Send a Message</h4>
              
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors resize-none"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <Loader2 size={24} className="animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </motion.form>

            {/* WhatsApp CTA Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <p className="text-hero-muted text-center text-sm mb-3">Or reach out directly</p>
              <a
                href="https://api.whatsapp.com/send?phone=923216479192&text=Hi%20Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-hero-text/5 hover:bg-hero-text/10 border border-border/20 text-hero-text rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-colors"
              >
                <MessageCircle size={24} className="text-green-500" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="text-white font-semibold text-center mb-4">Connect With Me</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                    <social.icon size={24} className="relative z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Why Work With Me */}
            <motion.div
              variants={itemVariants}
              className="relative mt-8 p-6 border border-white/10 rounded-2xl bg-hero-bg/50 overflow-hidden group"
            >
              {/* Gradient accent at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Why Work With Me?
                  </h4>
                  <ul className="text-white/60 text-sm space-y-2">
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
