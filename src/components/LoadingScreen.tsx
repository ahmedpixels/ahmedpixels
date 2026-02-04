import { motion } from "framer-motion";
import { useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #0f0a1a 50%, #0a0a0f 100%)" }}
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)"
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* AHMED */}
        <div className="flex items-center overflow-hidden">
          {"AHMED".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-space bg-gradient-to-r from-primary via-primary-light to-primary-glow bg-clip-text text-transparent"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* PIXELS */}
        <div className="flex items-center overflow-hidden mt-2">
          {"PIXELS".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-3xl md:text-5xl lg:text-6xl font-bold font-space text-white/90"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.08,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Underline animation */}
        <motion.div
          className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary-glow rounded-full mt-6"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1.5,
            delay: 1.2,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
