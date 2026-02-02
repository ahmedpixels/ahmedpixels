import { memo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Import available testimonial photo
import michaelPhoto from "@/assets/testimonials/michael.jpg";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    content: "Ahmed transformed our outdated website into a modern, SEO-optimized platform. Our organic traffic increased by 200% within 3 months. His attention to detail and understanding of our business goals was exceptional.",
    rating: 5,
    avatar: "SM",
    photo: null,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Michael Chen",
    role: "Founder, E-Commerce Hub",
    content: "Working with Ahmed was a game-changer for our online store. He built a fast, beautiful WooCommerce site that our customers love. Sales increased by 150% in the first quarter after launch!",
    rating: 5,
    avatar: "MC",
    photo: michaelPhoto,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Marketing Director, GlobalTrade",
    content: "Ahmed delivered our B2B platform ahead of schedule and under budget. His WordPress expertise helped us rank #1 for our target keywords. Professional, skilled, and a pleasure to work with.",
    rating: 5,
    avatar: "FA",
    gradient: "from-emerald-500 to-teal-500",
    photo: null,
  },
  {
    name: "David Thompson",
    role: "Owner, CraftBrew Coffee",
    content: "Our Shopify store looks absolutely premium. Ahmed understood our brand perfectly and created an experience that reflects our quality. Customer feedback has been overwhelmingly positive!",
    rating: 5,
    avatar: "DT",
    gradient: "from-amber-500 to-orange-500",
    photo: null,
  },
  {
    name: "Aisha Malik",
    role: "Director, Tech Solutions Ltd",
    content: "Professional, responsive, and incredibly talented. Ahmed rebuilt our tech company website with perfect mobile optimization. Page load times improved by 70% and bounce rate dropped significantly.",
    rating: 5,
    avatar: "AM",
    gradient: "from-violet-500 to-purple-500",
    photo: null,
  },
  {
    name: "James Wilson",
    role: "CEO, LuxeHome Interiors",
    content: "The catalogue website Ahmed created for us is a work of art. Our clients constantly compliment the design. It's elegant, fast, and exactly what we envisioned. Highly recommended!",
    rating: 5,
    avatar: "JW",
    gradient: "from-indigo-500 to-blue-500",
    photo: null,
  },
];

const StarRating = memo(({ rating }: { rating: number }) => (
  <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars rating`}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground"}
        aria-hidden="true"
      />
    ))}
  </div>
));

StarRating.displayName = "StarRating";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  photo?: string | null;
  gradient: string;
}

const TestimonialCard = memo(({ testimonial, index, isInView }: { testimonial: Testimonial; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative bg-card border border-border/50 rounded-3xl p-6 md:p-8 group hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-300"
    role="article"
    aria-label={`Testimonial from ${testimonial.name}`}
  >
    {/* Decorative Quote Icon */}
    <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/25" aria-hidden="true">
      <Quote size={18} className="text-primary-foreground" aria-hidden="true" />
    </div>

    {/* Content */}
    <blockquote className="text-muted-foreground leading-relaxed mb-6 mt-4 text-[15px]">
      "{testimonial.content}"
    </blockquote>

    {/* Rating */}
    <div className="mb-5">
      <StarRating rating={testimonial.rating} />
    </div>

    {/* Divider */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-5" />

    {/* Author */}
    <div className="flex items-center gap-4">
      {testimonial.photo ? (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-sm opacity-50" />
          <img 
            src={testimonial.photo} 
            alt={testimonial.name}
            className="relative w-14 h-14 rounded-full object-cover border-2 border-primary/30"
          />
        </div>
      ) : (
        <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
          {testimonial.avatar}
          {/* Glow ring */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${testimonial.gradient} opacity-30 blur-sm -z-10 scale-110`} />
        </div>
      )}
      <div>
        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
        <p className="text-sm text-primary">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
));

TestimonialCard.displayName = "TestimonialCard";

const TestimonialsSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // For mobile carousel
  const totalSlides = testimonials.length;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

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
            Real feedback from satisfied clients who trusted me with their digital presence.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard
                    testimonial={testimonial}
                    index={0}
                    isInView={isInView}
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide 
                      ? "bg-primary w-8" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-8 bg-gradient-to-br from-hero-bg via-section-dark to-primary/10 rounded-3xl border border-primary/20 shadow-[0_0_60px_hsl(var(--primary)/0.1)]"
        >
          {[
            { value: "50+", label: "Happy Clients" },
            { value: "100+", label: "Projects Completed" },
            { value: "5.0", label: "Average Rating" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-hero-muted text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;