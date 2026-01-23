import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const LiquidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });
  const animationFrameRef = useRef<number>();
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    // Initialize blob points
    const initPoints = () => {
      const numPoints = 8;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.3;

      pointsRef.current = Array.from({ length: numPoints }, (_, i) => {
        const angle = (i / numPoints) * Math.PI * 2;
        return {
          x: centerX + Math.cos(angle) * baseRadius,
          y: centerY + Math.sin(angle) * baseRadius,
          vx: 0,
          vy: 0,
          radius: baseRadius,
        };
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Check if mouse is actually moving
      const dx = x - lastMousePosRef.current.x;
      const dy = y - lastMousePosRef.current.y;
      const isMoving = Math.abs(dx) > 1 || Math.abs(dy) > 1;
      
      mouseRef.current = { x, y, isMoving };
      lastMousePosRef.current = { x, y };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isMoving = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Purple color values (HSL 270, 85%, 58%)
    const primaryH = 270;
    const primaryS = 85;
    const primaryL = 58;

    let time = 0;

    const animate = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.35;
      const points = pointsRef.current;
      const mouse = mouseRef.current;

      // Update points
      points.forEach((point, i) => {
        const angle = (i / points.length) * Math.PI * 2;
        
        // Base position with organic movement
        const wave1 = Math.sin(time * 2 + i * 0.8) * 30;
        const wave2 = Math.cos(time * 1.5 + i * 1.2) * 20;
        const wave3 = Math.sin(time * 3 + i * 0.5) * 15;
        
        const targetX = centerX + Math.cos(angle) * (baseRadius + wave1 + wave2);
        const targetY = centerY + Math.sin(angle) * (baseRadius + wave1 + wave3);

        // Mouse interaction - create bulge effect
        if (mouse.isMoving) {
          const dx = point.x - mouse.x;
          const dy = point.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 250;

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 80;
            point.vx += (dx / distance) * force * 0.1;
            point.vy += (dy / distance) * force * 0.1;
          }
        }

        // Apply velocity with damping
        point.vx *= 0.92;
        point.vy *= 0.92;

        // Smoothly move towards target
        point.x += (targetX - point.x) * 0.05 + point.vx;
        point.y += (targetY - point.y) * 0.05 + point.vy;
      });

      // Draw liquid blob with gradient
      ctx.beginPath();

      // Create smooth curve through points using bezier curves
      const len = points.length;
      
      // Start at first point
      const startX = (points[0].x + points[len - 1].x) / 2;
      const startY = (points[0].y + points[len - 1].y) / 2;
      ctx.moveTo(startX, startY);

      for (let i = 0; i < len; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % len];
        
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        
        ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
      }

      ctx.closePath();

      // Create gradient fill
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, baseRadius * 1.5
      );
      
      gradient.addColorStop(0, `hsla(${primaryH}, ${primaryS}%, ${primaryL + 20}%, 0.4)`);
      gradient.addColorStop(0.3, `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, 0.3)`);
      gradient.addColorStop(0.6, `hsla(${primaryH - 20}, ${primaryS}%, ${primaryL - 10}%, 0.2)`);
      gradient.addColorStop(1, `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, 0)`);

      ctx.fillStyle = gradient;
      ctx.fill();

      // Add glow effect
      ctx.shadowColor = `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, 0.5)`;
      ctx.shadowBlur = 60;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw inner highlight blob
      ctx.beginPath();
      const innerScale = 0.6;
      const innerStartX = centerX + (startX - centerX) * innerScale;
      const innerStartY = centerY + (startY - centerY) * innerScale;
      ctx.moveTo(innerStartX, innerStartY);

      for (let i = 0; i < len; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % len];
        
        const p1x = centerX + (p1.x - centerX) * innerScale;
        const p1y = centerY + (p1.y - centerY) * innerScale;
        const midX = centerX + ((p1.x + p2.x) / 2 - centerX) * innerScale;
        const midY = centerY + ((p1.y + p2.y) / 2 - centerY) * innerScale;
        
        ctx.quadraticCurveTo(p1x, p1y, midX, midY);
      }

      ctx.closePath();

      const innerGradient = ctx.createRadialGradient(
        centerX - baseRadius * 0.2, centerY - baseRadius * 0.2, 0,
        centerX, centerY, baseRadius * 0.8
      );
      
      innerGradient.addColorStop(0, `hsla(${primaryH}, ${primaryS}%, ${primaryL + 30}%, 0.3)`);
      innerGradient.addColorStop(0.5, `hsla(${primaryH}, ${primaryS}%, ${primaryL + 15}%, 0.15)`);
      innerGradient.addColorStop(1, `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, 0)`);

      ctx.fillStyle = innerGradient;
      ctx.fill();

      // Add floating particles around the blob
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const particleAngle = (i / particleCount) * Math.PI * 2 + time * 0.5;
        const particleRadius = baseRadius * 1.2 + Math.sin(time * 2 + i) * 40;
        const px = centerX + Math.cos(particleAngle) * particleRadius;
        const py = centerY + Math.sin(particleAngle) * particleRadius;
        const particleSize = 3 + Math.sin(time * 3 + i * 0.5) * 2;
        const particleOpacity = 0.3 + Math.sin(time * 2 + i) * 0.2;

        const particleGradient = ctx.createRadialGradient(px, py, 0, px, py, particleSize * 3);
        particleGradient.addColorStop(0, `hsla(${primaryH}, ${primaryS}%, ${primaryL + 20}%, ${particleOpacity})`);
        particleGradient.addColorStop(1, `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, 0)`);

        ctx.beginPath();
        ctx.arc(px, py, particleSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = particleGradient;
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ opacity: 0.9 }}
    />
  );
};

export default LiquidBackground;
