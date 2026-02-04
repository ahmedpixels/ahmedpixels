import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, User, Mail, Phone, Briefcase, DollarSign, Clock, Link2, FileText, Sparkles, Send, ArrowRight } from "lucide-react";
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const inputBaseClass = "w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-primary/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-[15px]";
  const selectBaseClass = "w-full pl-12 pr-10 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white focus:border-primary/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none cursor-pointer text-[15px]";
  const labelClass = "text-white/80 text-sm mb-2.5 block font-medium tracking-wide";
  const iconClass = "absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-colors duration-300";

  const InputWrapper = ({ children, fieldName }: { children: React.ReactNode; fieldName: string }) => (
    <div className="relative group">
      {children}
      {/* Animated border glow */}
      <motion.div 
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          boxShadow: focusedField === fieldName 
            ? '0 0 20px hsl(var(--primary) / 0.3), inset 0 0 20px hsl(var(--primary) / 0.05)' 
            : '0 0 0px transparent'
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1: Name & Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className={labelClass}>
            Full Name <span className="text-primary">*</span>
          </label>
          <InputWrapper fieldName="name">
            <User className={iconClass} size={18} />
            <input
              type="text"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className={`${inputBaseClass} ${errors.name ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}`}
            />
          </InputWrapper>
          {errors.name && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center gap-1.5"
            >
              <span className="w-1 h-1 bg-red-400 rounded-full" />
              {errors.name}
            </motion.p>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <label className={labelClass}>
            Email Address <span className="text-primary">*</span>
          </label>
          <InputWrapper fieldName="email">
            <Mail className={iconClass} size={18} />
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className={`${inputBaseClass} ${errors.email ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}`}
            />
          </InputWrapper>
          {errors.email && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center gap-1.5"
            >
              <span className="w-1 h-1 bg-red-400 rounded-full" />
              {errors.email}
            </motion.p>
          )}
        </motion.div>
      </div>
      
      {/* Row 2: Phone & Service */}
      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className={labelClass}>
            WhatsApp / Phone <span className="text-primary">*</span>
          </label>
          <InputWrapper fieldName="phone">
            <Phone className={iconClass} size={18} />
            <input
              type="tel"
              placeholder="+92 321 1234567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              className={`${inputBaseClass} ${errors.phone ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}`}
            />
          </InputWrapper>
          {errors.phone && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center gap-1.5"
            >
              <span className="w-1 h-1 bg-red-400 rounded-full" />
              {errors.phone}
            </motion.p>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <label className={labelClass}>
            Service Required <span className="text-primary">*</span>
          </label>
          <InputWrapper fieldName="service">
            <Briefcase className={iconClass} size={18} />
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              onFocus={() => setFocusedField("service")}
              onBlur={() => setFocusedField(null)}
              className={`${selectBaseClass} ${errors.service ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''} ${!formData.service ? 'text-white/30' : ''}`}
            >
              <option value="" className="bg-hero-bg text-white/40">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-hero-bg text-white">{service}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none group-focus-within:text-primary transition-colors duration-300" size={18} />
          </InputWrapper>
          {errors.service && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center gap-1.5"
            >
              <span className="w-1 h-1 bg-red-400 rounded-full" />
              {errors.service}
            </motion.p>
          )}
        </motion.div>
      </div>
      
      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className={labelClass}>
          Project Details <span className="text-primary">*</span>
        </label>
        <div className="relative group">
          <FileText className="absolute left-4 top-4 text-white/40 group-focus-within:text-primary transition-colors duration-300" size={18} />
          <textarea
            placeholder="Tell me about your project idea, goals, or any specific requirements..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className={`${inputBaseClass} resize-none pt-4 ${errors.message ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}`}
          />
          <motion.div 
            className="absolute inset-0 rounded-xl pointer-events-none"
            animate={{
              boxShadow: focusedField === "message" 
                ? '0 0 20px hsl(var(--primary) / 0.3), inset 0 0 20px hsl(var(--primary) / 0.05)' 
                : '0 0 0px transparent'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        {errors.message && (
          <motion.p 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-2 flex items-center gap-1.5"
          >
            <span className="w-1 h-1 bg-red-400 rounded-full" />
            {errors.message}
          </motion.p>
        )}
      </motion.div>
      
      {/* Row 3: Budget & Timeline */}
      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <label className={labelClass}>Budget Range</label>
          <InputWrapper fieldName="budget">
            <DollarSign className={iconClass} size={18} />
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              onFocus={() => setFocusedField("budget")}
              onBlur={() => setFocusedField(null)}
              className={`${selectBaseClass} ${!formData.budget ? 'text-white/30' : ''}`}
            >
              <option value="" className="bg-hero-bg text-white/40">Select budget</option>
              {budgets.map((budget) => (
                <option key={budget} value={budget} className="bg-hero-bg text-white">{budget}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none group-focus-within:text-primary transition-colors duration-300" size={18} />
          </InputWrapper>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className={labelClass}>Project Timeline</label>
          <InputWrapper fieldName="timeline">
            <Clock className={iconClass} size={18} />
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              onFocus={() => setFocusedField("timeline")}
              onBlur={() => setFocusedField(null)}
              className={`${selectBaseClass} ${!formData.timeline ? 'text-white/30' : ''}`}
            >
              <option value="" className="bg-hero-bg text-white/40">Select timeline</option>
              {timelines.map((timeline) => (
                <option key={timeline} value={timeline} className="bg-hero-bg text-white">{timeline}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none group-focus-within:text-primary transition-colors duration-300" size={18} />
          </InputWrapper>
        </motion.div>
      </div>
      
      {/* Reference URL */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <label className={labelClass}>Reference Website <span className="text-white/40 font-normal">(Optional)</span></label>
        <InputWrapper fieldName="reference_url">
          <Link2 className={iconClass} size={18} />
          <input
            type="url"
            placeholder="https://example.com"
            value={formData.reference_url}
            onChange={(e) => setFormData({ ...formData, reference_url: e.target.value })}
            onFocus={() => setFocusedField("reference_url")}
            onBlur={() => setFocusedField(null)}
            className={`${inputBaseClass} ${errors.reference_url ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}`}
          />
        </InputWrapper>
        {errors.reference_url && (
          <motion.p 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-2 flex items-center gap-1.5"
          >
            <span className="w-1 h-1 bg-red-400 rounded-full" />
            {errors.reference_url}
          </motion.p>
        )}
      </motion.div>
      
      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="pt-3"
      >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <MessageCircle size={22} className="relative z-10" />
          <span className="relative z-10">Send via WhatsApp</span>
          <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
        
        <p className="text-white/40 text-sm text-center mt-4 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          Your message will open in WhatsApp • Response within 24 hours
        </p>
      </motion.div>
    </form>
  );
};

export default ContactForm;
