import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    content: "Ahmed transformed our outdated website into a modern, SEO-optimized platform. Our organic traffic increased by 200% within 3 months.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Michael Chen",
    role: "Founder, E-Commerce Hub",
    content: "Working with Ahmed was a game-changer for our online store. He built a fast, beautiful WooCommerce site that our customers love.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Marketing Director, GlobalTrade",
    content: "Ahmed delivered our B2B platform ahead of schedule and under budget. His WordPress expertise helped us rank #1 for our target keywords.",
    rating: 5,
    avatar: "FA",
  },
  {
    name: "David Thompson",
    role: "Owner, CraftBrew Coffee",
    content: "Our Shopify store looks absolutely premium. Ahmed understood our brand perfectly and created an experience that reflects our quality.",
    rating: 5,
    avatar: "DT",
  },
  {
    name: "Aisha Malik",
    role: "Director, Tech Solutions Ltd",
    content: "Professional, responsive, and incredibly talented. Ahmed rebuilt our tech company website with perfect mobile optimization.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "James Wilson",
    role: "CEO, LuxeHome Interiors",
    content: "The catalogue website Ahmed created for us is a work of art. Our clients constantly compliment the design.",
    rating: 5,
    avatar: "JW",
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
            { value: "50+", label: "Happy Clients" },
            { value: "100+", label: "Projects Completed" },
            { value: "5.0", label: "Average Rating" },
            { value: "100%", label: "Client Satisfaction" },
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
