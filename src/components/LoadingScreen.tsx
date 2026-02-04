import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300); // Small delay before hiding
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
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
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary-glow/20 blur-[80px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-primary-light/20 blur-[60px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Name with animated letters */}
        <div className="flex items-center gap-1">
          {"AHMED".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-5xl md:text-7xl font-bold font-space bg-gradient-to-r from-primary via-primary-light to-primary-glow bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Animated subtitle */}
        <motion.p
          className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          WordPress Developer
        </motion.p>

        {/* Rotating rings */}
        <div className="relative w-32 h-32 mt-4">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
          </motion.div>

          {/* Middle ring */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-primary-light/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-light" />
          </motion.div>

          {/* Inner ring */}
          <motion.div
            className="absolute inset-8 rounded-full border-2 border-primary-glow/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-glow" />
          </motion.div>

          {/* Center pulse */}
          <motion.div
            className="absolute inset-12 rounded-full bg-primary/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80 mt-4">
          <div className="relative h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary-light to-primary-glow rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
          <motion.p
            className="text-center text-xs text-muted-foreground mt-3 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {Math.round(progress)}%
          </motion.p>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
