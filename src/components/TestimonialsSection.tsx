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
        size={16}
        className={i < rating ? "text-primary fill-primary" : "text-muted-foreground"}
        aria-hidden="true"
      />
    ))}
  </div>
));

StarRating.displayName = "StarRating";

const TestimonialCard = memo(({ testimonial, index, isInView }: { testimonial: typeof testimonials[0]; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="glass-card p-6 md:p-8 relative group border border-border/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    role="article"
    aria-label={`Testimonial from ${testimonial.name}`}
  >
    {/* Quote Icon */}
    <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center" aria-hidden="true">
      <Quote size={18} className="text-primary-foreground" aria-hidden="true" />
    </div>

    {/* Content */}
    <blockquote className="text-muted-foreground leading-relaxed mb-6 mt-2">
      "{testimonial.content}"
    </blockquote>

    {/* Rating */}
    <div className="mb-4">
      <StarRating rating={testimonial.rating} />
    </div>

    {/* Author */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
        {testimonial.avatar}
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
));

TestimonialCard.displayName = "TestimonialCard";

const TestimonialsSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-section-light" ref={ref} aria-labelledby="testimonials-heading">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="heading-lg text-foreground mt-4">
            What <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-section-dark rounded-2xl border border-border/20"
        >
          {[
            { value: "40+", label: "Happy Clients" },
            { value: "50+", label: "Projects Delivered" },
            { value: "5.0", label: "Average Rating" },
            { value: "100%", label: "On-Time Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-hero-muted text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
