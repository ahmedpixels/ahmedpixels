import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, User, Mail, Phone, Briefcase, DollarSign, Clock, Link2, FileText, Sparkles } from "lucide-react";
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

interface ContactFormProps {
  onSuccess?: () => void;
  variant?: "modal" | "page";
}

const ContactForm = ({ onSuccess, variant = "page" }: ContactFormProps) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as keyof typeof errors] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Build WhatsApp message
    const whatsappMessage = `Hi Ahmed! 👋

*New Project Inquiry*

📌 *Name:* ${result.data.name}
📧 *Email:* ${result.data.email}
📱 *Phone:* ${result.data.phone}
🛠️ *Service:* ${result.data.service}
${result.data.budget ? `💰 *Budget:* ${result.data.budget}` : ''}
${result.data.timeline ? `⏰ *Timeline:* ${result.data.timeline}` : ''}
${result.data.reference_url ? `🔗 *Reference:* ${result.data.reference_url}` : ''}

📝 *Project Details:*
${result.data.message}`;

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/923216479192?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset form
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
    setIsSubmitting(false);
    onSuccess?.();
  };

  const inputBaseClass = "w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-primary/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300";
  const selectBaseClass = "w-full pl-12 pr-10 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none cursor-pointer";
  const labelClass = "text-white/70 text-sm mb-2 block font-medium";
  const iconClass = "absolute left-4 top-1/2 -translate-y-1/2 text-primary/70";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1: Name & Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className={labelClass}>Full Name *</label>
          <div className="relative group">
            <User className={iconClass} size={18} />
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`${inputBaseClass} ${errors.name ? 'border-red-500/50' : ''}`}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300" />
          </div>
          {errors.name && <p className="text-red-400 text-sm mt-1.5">{errors.name}</p>}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <label className={labelClass}>Email Address *</label>
          <div className="relative group">
            <Mail className={iconClass} size={18} />
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`${inputBaseClass} ${errors.email ? 'border-red-500/50' : ''}`}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300" />
          </div>
          {errors.email && <p className="text-red-400 text-sm mt-1.5">{errors.email}</p>}
        </motion.div>
      </div>
      
      {/* Row 2: Phone & Service */}
      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className={labelClass}>WhatsApp / Phone *</label>
          <div className="relative group">
            <Phone className={iconClass} size={18} />
            <input
              type="tel"
              placeholder="+92 321 1234567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`${inputBaseClass} ${errors.phone ? 'border-red-500/50' : ''}`}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300" />
          </div>
          {errors.phone && <p className="text-red-400 text-sm mt-1.5">{errors.phone}</p>}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <label className={labelClass}>Service Required *</label>
          <div className="relative group">
            <Briefcase className={iconClass} size={18} />
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={`${selectBaseClass} ${errors.service ? 'border-red-500/50' : ''} ${!formData.service ? 'text-white/40' : ''}`}
            >
              <option value="" className="bg-hero-bg text-white/40">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-hero-bg text-white">{service}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={18} />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300" />
          </div>
          {errors.service && <p className="text-red-400 text-sm mt-1.5">{errors.service}</p>}
        </motion.div>
      </div>
      
      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className={labelClass}>Project Details *</label>
        <div className="relative group">
          <FileText className="absolute left-4 top-4 text-primary/70" size={18} />
          <textarea
            placeholder="Tell me about your project idea, goals, or any specific requirements..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${inputBaseClass} resize-none pt-4 ${errors.message ? 'border-red-500/50' : ''}`}
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300" />
        </div>
        {errors.message && <p className="text-red-400 text-sm mt-1.5">{errors.message}</p>}
      </motion.div>
      
      {/* Row 3: Budget & Timeline */}
      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <label className={labelClass}>Budget Range</label>
          <div className="relative group">
            <DollarSign className={iconClass} size={18} />
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className={`${selectBaseClass} ${!formData.budget ? 'text-white/40' : ''}`}
            >
              <option value="" className="bg-hero-bg text-white/40">Select budget</option>
              {budgets.map((budget) => (
                <option key={budget} value={budget} className="bg-hero-bg text-white">{budget}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={18} />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className={labelClass}>Project Timeline</label>
          <div className="relative group">
            <Clock className={iconClass} size={18} />
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className={`${selectBaseClass} ${!formData.timeline ? 'text-white/40' : ''}`}
            >
              <option value="" className="bg-hero-bg text-white/40">Select timeline</option>
              {timelines.map((timeline) => (
                <option key={timeline} value={timeline} className="bg-hero-bg text-white">{timeline}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={18} />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300" />
          </div>
        </motion.div>
      </div>
      
      {/* Reference URL */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <label className={labelClass}>Reference Website (Optional)</label>
        <div className="relative group">
          <Link2 className={iconClass} size={18} />
          <input
            type="url"
            placeholder="https://example.com"
            value={formData.reference_url}
            onChange={(e) => setFormData({ ...formData, reference_url: e.target.value })}
            className={`${inputBaseClass} ${errors.reference_url ? 'border-red-500/50' : ''}`}
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300" />
        </div>
        {errors.reference_url && <p className="text-red-400 text-sm mt-1.5">{errors.reference_url}</p>}
      </motion.div>
      
      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="pt-2"
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <MessageCircle size={22} className="relative z-10" />
          <span className="relative z-10">Send via WhatsApp</span>
          <Sparkles size={18} className="relative z-10 opacity-70" />
        </button>
        <p className="text-white/40 text-sm text-center mt-3">
          Your message will open in WhatsApp • Response within 24 hours
        </p>
      </motion.div>
    </form>
  );
};

export default ContactForm;
