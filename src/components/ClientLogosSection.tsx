import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import OptimizedImage from "./OptimizedImage";

import pixelhashLogo from "@/assets/logos/pixelhash.png";
import shinewallstoneLogo from "@/assets/logos/shinewallstone.png";
import silkspoolLogo from "@/assets/logos/silkspool.png";
import jeddahautoLogo from "@/assets/logos/jeddahauto.png";
import eleevaLogo from "@/assets/logos/eleeva.png";

const clients = [
  { 
    name: "PixelHash Tech", 
    url: "https://pixelhashtech.com",
    logo: pixelhashLogo,
  },
  { 
    name: "Shine Wall Stone", 
    url: "https://shinewallstone.com",
    logo: shinewallstoneLogo,
  },
  { 
    name: "Silks Pool", 
    url: "https://silkspool.com",
    logo: silkspoolLogo,
  },
  { 
    name: "Jeddah Auto", 
    url: "https://jeddahautospareparts.com",
    logo: jeddahautoLogo,
  },
  { 
    name: "Eleeva Adhesives", 
    url: "https://eleevaadhesives.com",
    logo: eleevaLogo,
  },
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
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="px-6 py-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:border-primary/40 group-hover:from-primary/30 group-hover:to-primary/10 transition-all shadow-lg shadow-primary/5 group-hover:shadow-primary/10">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 text-muted-foreground/60 text-sm"
        >
          + Many More Local Businesses
        </motion.p>
      </div>
    </section>
  );
};

export default ClientLogosSection;
