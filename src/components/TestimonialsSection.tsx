import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Muhammad Usman",
    role: "Owner, Shine Wall Stone",
    content: "Ahmed built our complete marble & granite business website with product catalogue and WhatsApp integration. We started getting inquiries from all over Pakistan within weeks.",
    rating: 5,
    avatar: "MU",
  },
  {
    name: "Khalid Al-Rashid",
    role: "Manager, Jeddah Auto Spare Parts",
    content: "Excellent work on our auto parts e-commerce store. Ahmed set up WooCommerce with proper product categories, search filters, and fast checkout. Very professional and delivers on time.",
    rating: 5,
    avatar: "KR",
  },
  {
    name: "Ayesha Farooq",
    role: "Founder, Silk & Spool",
    content: "Ahmed designed a beautiful Shopify store for my clothing brand. He handled everything — theme customization, product uploads, payment setup, and even helped with basic SEO. Highly recommend!",
    rating: 5,
    avatar: "AF",
  },
  {
    name: "Hassan Javed",
    role: "CEO, Eleeva Adhesives",
    content: "We needed a professional B2B website for our industrial adhesives company. Ahmed delivered a clean, fast website with proper SEO that ranks on Google for our target keywords.",
    rating: 5,
    avatar: "HJ",
  },
  {
    name: "Sara Ahmed",
    role: "Owner, Miss Peony",
    content: "Ahmed created an elegant website for my flower and gifting business. The design is beautiful, mobile-friendly, and my customers love placing orders through it. Great experience overall.",
    rating: 5,
    avatar: "SA",
  },
  {
    name: "Ali Raza",
    role: "Director, PixelHash Tech",
    content: "As a tech company, we needed a modern, fast-loading website. Ahmed delivered exactly that — clean design, proper schema markup, and the site loads in under 2 seconds. Outstanding work.",
    rating: 5,
    avatar: "AR",
  },
];

const StarRating = memo(({ rating }: { rating: number }) => (
  <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars rating`}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? "text-amber-400 fill-amber-400" : "text-hero-muted/30"}
        aria-hidden="true"
      />
    ))}
  </div>
));

StarRating.displayName = "StarRating";

const TestimonialCard = memo(({ testimonial, index, isInView }: { testimonial: typeof testimonials[0]; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="premium-card p-7 group hover:-translate-y-2 transition-all duration-500"
    role="article"
    aria-label={`Testimonial from ${testimonial.name}`}
  >
    <div className="relative z-10">
      {/* Quote Icon */}
      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">
        <Quote size={18} className="text-primary-foreground" aria-hidden="true" />
      </div>

      {/* Content */}
      <blockquote className="text-hero-muted leading-relaxed mb-6 text-sm">
        "{testimonial.content}"
      </blockquote>

      {/* Rating */}
      <div className="mb-5">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-5 border-t border-primary/10">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-semibold text-hero-text text-sm">{testimonial.name}</h4>
          <p className="text-xs text-hero-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  </motion.div>
));

TestimonialCard.displayName = "TestimonialCard";

const TestimonialsSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-section-dark relative overflow-hidden" ref={ref} aria-labelledby="testimonials-heading">
      {/* Background effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-semibold text-xs uppercase tracking-[0.15em] mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="heading-lg text-hero-text mt-4">
            What <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="body-lg text-hero-muted max-w-2xl mx-auto mt-5">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "40+", label: "Happy Clients" },
            { value: "50+", label: "Projects Delivered" },
            { value: "5.0", label: "Average Rating" },
            { value: "100%", label: "On-Time Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="premium-card p-6 text-center group hover:-translate-y-1 transition-all duration-500">
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-hero-muted text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;