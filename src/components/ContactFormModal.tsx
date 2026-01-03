import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, ChevronDown } from "lucide-react";
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

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
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
      onClose();
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-xl z-50 overflow-auto max-h-[90vh]"
          >
            <div className="relative bg-hero-bg border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient accent at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500" />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
                <p className="text-white/60 mb-6">Fill in your requirements and I'll get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Full Name *</label>
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
                      <label className="text-white/60 text-sm mb-1.5 block">Email Address *</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  {/* Row 2: Phone & Service */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        placeholder="+92 321 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors"
                      />
                      {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Service Required *</label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white focus:border-orange-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-hero-bg text-white/40">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-hero-bg text-white">{service}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={20} />
                      </div>
                      {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Project Details *</label>
                    <textarea
                      placeholder="Tell me about your project idea, goals, or any specific requirements..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  {/* Row 3: Budget & Timeline */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Budget Range</label>
                      <div className="relative">
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white focus:border-orange-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-hero-bg text-white/40">Select budget</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget} className="bg-hero-bg text-white">{budget}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={20} />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Project Timeline</label>
                      <div className="relative">
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white focus:border-orange-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-hero-bg text-white/40">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline} className="bg-hero-bg text-white">{timeline}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={20} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Reference URL */}
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Reference Website (Optional)</label>
                    <input
                      type="url"
                      placeholder="https://example.com"
                      value={formData.reference_url}
                      onChange={(e) => setFormData({ ...formData, reference_url: e.target.value })}
                      className="w-full px-4 py-3 bg-hero-bg border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none transition-colors"
                    />
                    {errors.reference_url && <p className="text-red-400 text-sm mt-1">{errors.reference_url}</p>}
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
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
