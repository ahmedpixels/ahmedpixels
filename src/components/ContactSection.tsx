import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Mail, CheckCircle, Linkedin, Instagram, MessageCircle, Send, Loader2, ChevronDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone/WhatsApp is required").max(20, "Phone must be less than 20 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Project details are required").max(2000, "Message must be less than 2000 characters"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  reference_url: z.string().url("Invalid URL").optional().or(z.literal("")),
});

const services = [
  "WordPress Website",
  "E-commerce (WooCommerce)",
  "Website Redesign",
  "Speed Optimization",
  "SEO Setup",
  "Maintenance / Support",
  "Custom Requirement",
];

const budgets = [
  "Under $100",
  "$100 – $300",
  "$300 – $700",
  "$700+",
  "Not Sure",
];

const timelines = [
  "ASAP",
  "1–2 Weeks",
  "1 Month",
  "Flexible",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+923216479192",
    href: "https://wa.me/923216479192?text=Hi%20Ahmed",
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
  { icon: MessageCircle, href: "https://wa.me/923216479192?text=Hi%20Ahmed", label: "WhatsApp", gradient: "from-emerald-500 to-teal-500" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    timeline: "",
    reference_url: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await supabase.from("contact_messages").insert({
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
      service: result.data.service,
      message: result.data.message,
      budget: result.data.budget || null,
      timeline: result.data.timeline || null,
      reference_url: result.data.reference_url || null,
    } as any);

    if (error) throw error;

    // Send email notification
    await supabase.functions.invoke("send-contact-notification", {
      body: {
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone,
        service: result.data.service,
        message: result.data.message,
        budget: result.data.budget,
        timeline: result.data.timeline,
        reference_url: result.data.reference_url,
      },
    });

    toast({
      title: "Request sent successfully!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      budget: "",
      timeline: "",
      reference_url: "",
    });
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
    <section id="contact" className="section-padding bg-section-dark" ref={ref} aria-labelledby="contact-heading">
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
          <h2 id="contact-heading" className="heading-lg text-hero-text mt-4">
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
              
              <h4 className="text-white font-semibold text-xl mb-4">Start Your Project</h4>
              
              {/* Row 1: Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-white/60 text-sm mb-1.5 block">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors"
                  />
                  {errors.name && <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="contact-email" className="text-white/60 text-sm mb-1.5 block">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors"
                  />
                  {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">{errors.email}</p>}
                </div>
              </div>
              
              {/* Row 2: Phone & Service */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="text-white/60 text-sm mb-1.5 block">WhatsApp / Phone *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+92 321 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors"
                  />
                  {errors.phone && <p id="phone-error" className="text-red-400 text-sm mt-1" role="alert">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="contact-service" className="text-white/60 text-sm mb-1.5 block">Service Required *</label>
                  <div className="relative">
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      aria-describedby={errors.service ? "service-error" : undefined}
                      className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white focus:border-orange-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-hero-bg text-white/40">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-hero-bg text-white">{service}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={20} aria-hidden="true" />
                  </div>
                  {errors.service && <p id="service-error" className="text-red-400 text-sm mt-1" role="alert">{errors.service}</p>}
                </div>
              </div>
              
              {/* Project Details */}
              <div>
                <label htmlFor="contact-message" className="text-white/60 text-sm mb-1.5 block">Project Details *</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project idea, goals, or any specific requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors resize-none"
                />
                {errors.message && <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">{errors.message}</p>}
              </div>
              
              {/* Row 3: Budget & Timeline */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-budget" className="text-white/60 text-sm mb-1.5 block">Budget Range</label>
                  <div className="relative">
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white focus:border-orange-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-hero-bg text-white/40">Select budget</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget} className="bg-hero-bg text-white">{budget}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={20} aria-hidden="true" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-timeline" className="text-white/60 text-sm mb-1.5 block">Project Timeline</label>
                  <div className="relative">
                    <select
                      id="contact-timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white focus:border-orange-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-hero-bg text-white/40">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline} className="bg-hero-bg text-white">{timeline}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={20} aria-hidden="true" />
                  </div>
                </div>
              </div>
              
              {/* Reference URL */}
              <div>
                <label htmlFor="contact-reference" className="text-white/60 text-sm mb-1.5 block">Reference Website (Optional)</label>
                <input
                  id="contact-reference"
                  type="url"
                  placeholder="https://example.com"
                  value={formData.reference_url}
                  onChange={(e) => setFormData({ ...formData, reference_url: e.target.value })}
                  aria-describedby={errors.reference_url ? "reference-error" : undefined}
                  className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors"
                />
                {errors.reference_url && <p id="reference-error" className="text-red-400 text-sm mt-1" role="alert">{errors.reference_url}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all disabled:opacity-70 mt-2"
              >
                {isSubmitting ? (
                  <Loader2 size={24} className="animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    Get Free Consultation
                  </>
                )}
              </button>
            </motion.form>

            {/* WhatsApp CTA Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <p className="text-hero-muted text-center text-sm mb-3">Or reach out directly</p>
              <a
                href="https://wa.me/923216479192?text=Hi%20Ahmed"
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
