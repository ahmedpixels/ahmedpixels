import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: { h: number; s: number; l: number };
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
  active: boolean;
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars
    const initStars = () => {
      const starCount = Math.min(200, Math.floor((canvas.width * canvas.height) / 8000));
      
      starsRef.current = Array.from({ length: starCount }, () => {
        // Variety of star colors - white, blue-white, purple-tinted
        const colorType = Math.random();
        let color;
        if (colorType < 0.6) {
          // White/blue-white stars
          color = { h: 220 + Math.random() * 40, s: 20 + Math.random() * 30, l: 85 + Math.random() * 15 };
        } else if (colorType < 0.85) {
          // Purple-tinted stars (matches theme)
          color = { h: 260 + Math.random() * 30, s: 60 + Math.random() * 30, l: 70 + Math.random() * 20 };
        } else {
          // Bright purple accent stars
          color = { h: 270, s: 85, l: 65 + Math.random() * 15 };
        }

        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.3,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2,
          color,
        };
      });

      // Initialize shooting stars pool
      shootingStarsRef.current = Array.from({ length: 3 }, () => ({
        x: 0,
        y: 0,
        length: 80 + Math.random() * 60,
        speed: 8 + Math.random() * 6,
        opacity: 0,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        active: false,
      }));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse position for subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Helper function to create valid HSLA color
    const createColor = (h: number, s: number, l: number, a: number) => {
      return `hsla(${h}, ${s}%, ${l}%, ${Math.max(0, Math.min(1, a)).toFixed(3)})`;
    };

    let time = 0;
    let lastShootingStarTime = 0;

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebula-like gradient clouds
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.3, 0,
        canvas.width * 0.2, canvas.height * 0.3, canvas.width * 0.4
      );
      gradient1.addColorStop(0, createColor(280, 70, 20, 0.15));
      gradient1.addColorStop(0.5, createColor(270, 60, 15, 0.08));
      gradient1.addColorStop(1, createColor(270, 50, 10, 0));
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.7, 0,
        canvas.width * 0.8, canvas.height * 0.7, canvas.width * 0.35
      );
      gradient2.addColorStop(0, createColor(290, 60, 18, 0.12));
      gradient2.addColorStop(0.5, createColor(270, 50, 12, 0.06));
      gradient2.addColorStop(1, createColor(260, 40, 8, 0));
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle center glow
      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.4, 0,
        canvas.width * 0.5, canvas.height * 0.4, canvas.width * 0.5
      );
      gradient3.addColorStop(0, createColor(270, 80, 25, 0.08));
      gradient3.addColorStop(1, createColor(270, 60, 10, 0));
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      starsRef.current.forEach((star) => {
        // Subtle parallax based on mouse
        const parallaxX = (mouseRef.current.x / canvas.width - 0.5) * star.size * 3;
        const parallaxY = (mouseRef.current.y / canvas.height - 0.5) * star.size * 3;

        // Calculate twinkle effect
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset);
        const currentOpacity = star.opacity * (0.6 + twinkle * 0.4);

        const x = star.x + parallaxX;
        const y = star.y + parallaxY;

        // Draw star glow
        if (star.size > 1.2) {
          const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, star.size * 4);
          glowGradient.addColorStop(0, createColor(star.color.h, star.color.s, star.color.l, currentOpacity * 0.4));
          glowGradient.addColorStop(0.5, createColor(star.color.h, star.color.s, star.color.l, currentOpacity * 0.1));
          glowGradient.addColorStop(1, createColor(star.color.h, star.color.s, star.color.l, 0));
          ctx.beginPath();
          ctx.arc(x, y, star.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();
        }

        // Draw star core
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = createColor(star.color.h, star.color.s, star.color.l, currentOpacity);
        ctx.fill();

        // Add cross flare for bright stars
        if (star.size > 1.8 && currentOpacity > 0.6) {
          ctx.strokeStyle = createColor(star.color.h, star.color.s, star.color.l, currentOpacity * 0.3);
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(x - star.size * 3, y);
          ctx.lineTo(x + star.size * 3, y);
          ctx.moveTo(x, y - star.size * 3);
          ctx.lineTo(x, y + star.size * 3);
          ctx.stroke();
        }
      });

      // Spawn shooting star occasionally
      if (time - lastShootingStarTime > 4 + Math.random() * 6) {
        const inactiveStar = shootingStarsRef.current.find(s => !s.active);
        if (inactiveStar) {
          inactiveStar.x = Math.random() * canvas.width * 0.8;
          inactiveStar.y = Math.random() * canvas.height * 0.3;
          inactiveStar.opacity = 1;
          inactiveStar.active = true;
          lastShootingStarTime = time;
        }
      }

      // Draw shooting stars
      shootingStarsRef.current.forEach((star) => {
        if (!star.active) return;

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.015;

        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          star.active = false;
          return;
        }

        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        gradient.addColorStop(0, createColor(270, 80, 70, 0));
        gradient.addColorStop(0.7, createColor(270, 85, 75, star.opacity * 0.5));
        gradient.addColorStop(1, createColor(0, 0, 100, star.opacity));

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();

        // Head glow
        const headGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 6);
        headGlow.addColorStop(0, createColor(0, 0, 100, star.opacity));
        headGlow.addColorStop(1, createColor(270, 80, 70, 0));
        ctx.beginPath();
        ctx.arc(star.x, star.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = headGlow;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

export default ParticlesBackground;
