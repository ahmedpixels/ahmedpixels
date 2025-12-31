import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    content: "Ahmed transformed our outdated website into a modern, SEO-optimized platform. Our organic traffic increased by 200% within 3 months. His attention to detail and communication is exceptional.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Michael Chen",
    role: "Founder, E-Commerce Hub",
    content: "Working with Ahmed was a game-changer for our online store. He built a fast, beautiful WooCommerce site that our customers love. Sales have doubled since the launch!",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Marketing Director, GlobalTrade",
    content: "Ahmed delivered our B2B platform ahead of schedule and under budget. His WordPress expertise and SEO knowledge helped us rank #1 for our target keywords.",
    rating: 5,
    avatar: "FA",
  },
  {
    name: "David Thompson",
    role: "Owner, CraftBrew Coffee",
    content: "Our Shopify store looks absolutely premium. Ahmed understood our brand perfectly and created an experience that reflects our quality. Highly recommend his services!",
    rating: 5,
    avatar: "DT",
  },
  {
    name: "Aisha Malik",
    role: "Director, Tech Solutions Ltd",
    content: "Professional, responsive, and incredibly talented. Ahmed rebuilt our tech company website with stunning animations and perfect mobile optimization. A true expert!",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "James Wilson",
    role: "CEO, LuxeHome Interiors",
    content: "The catalogue website Ahmed created for us is a work of art. Our clients constantly compliment the design. He truly understands how to showcase products beautifully.",
    rating: 5,
    avatar: "JW",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-primary fill-primary" : "text-muted-foreground"}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-6 md:p-8 relative group"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-2 w-10 h-10 bg-gradient-orange rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
        <Quote size={18} className="text-primary-foreground" />
      </div>

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed mb-6 mt-2">
        "{testimonial.content}"
      </p>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center text-primary-foreground font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-section-light" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="heading-lg text-foreground mt-4">
            What <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say 
            about working together.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-section-dark rounded-2xl"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
            <div className="text-hero-text/60 text-sm mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
            <div className="text-hero-text/60 text-sm mt-1">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">5.0</div>
            <div className="text-hero-text/60 text-sm mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
            <div className="text-hero-text/60 text-sm mt-1">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
