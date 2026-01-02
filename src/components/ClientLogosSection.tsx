import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "PixelHash Tech", initial: "PH" },
  { name: "Shine Wall Stone", initial: "SW" },
  { name: "Silks Pool", initial: "SP" },
  { name: "Jeddah Auto", initial: "JA" },
  { name: "Eleeva Adhesives", initial: "EA" },
  { name: "Local Businesses", initial: "10+" },
];

const ClientLogosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 bg-section-light border-y border-border/10" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Trusted by Businesses Across Industries
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-muted/50 border border-border/20 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                <span className="text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {client.initial}
                </span>
              </div>
              <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
