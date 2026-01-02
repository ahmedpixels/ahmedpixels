import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { 
    name: "PixelHash Tech", 
    url: "https://pixelhashtech.com",
    textLogo: "PIXEL HASH",
    subtext: "Technologies",
    color: "text-red-500"
  },
  { 
    name: "Shine Wall Stone", 
    url: "https://shinewallstone.com",
    textLogo: "SHINE WALL",
    subtext: "STONE",
    color: "text-cyan-400"
  },
  { 
    name: "Silks Pool", 
    url: "https://silkspool.com",
    textLogo: "SILKS",
    subtext: "POOL",
    color: "text-amber-500"
  },
  { 
    name: "Jeddah Auto", 
    url: "https://jeddahautospareparts.com",
    textLogo: "JEDDAH",
    subtext: "AUTO SPARE PARTS",
    color: "text-blue-500"
  },
  { 
    name: "Eleeva Adhesives", 
    url: "https://eleevaadhesives.com",
    textLogo: "ELEEVA",
    subtext: "Adhesives",
    color: "text-orange-500"
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
              className="flex flex-col items-center gap-0.5 group cursor-pointer"
            >
              <div className="flex flex-col items-center px-4 py-3 rounded-xl bg-muted/30 border border-border/10 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                <span className={`text-lg md:text-xl font-bold ${client.color} group-hover:brightness-110 transition-all tracking-tight`}>
                  {client.textLogo}
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground/70 font-medium tracking-widest uppercase">
                  {client.subtext}
                </span>
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
