import React, { useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isHollow: boolean;
}

interface AnimatedBackgroundProps {
  isDark: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const dotsRef = useRef<Dot[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const DOT_COUNT = 100;
  const MAX_DISTANCE = 150;
  const DOT_SPEED = 0.5;

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize dots
    dotsRef.current = Array.from({ length: DOT_COUNT }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * DOT_SPEED,
      vy: (Math.random() - 0.5) * DOT_SPEED,
      radius: Math.random() * 2 + 1,
      isHollow: Math.random() > 0.5, // 50% chance of being hollow
    }));

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update dot positions
      dotsRef.current.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x <= 0 || dot.x >= dimensions.width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= dimensions.height) dot.vy *= -1;

        // Keep dots within bounds
        dot.x = Math.max(0, Math.min(dimensions.width, dot.x));
        dot.y = Math.max(0, Math.min(dimensions.height, dot.y));
      });

      // Draw connections
      ctx.strokeStyle = isDark 
        ? 'rgba(59, 130, 246, 0.3)' 
        : 'rgba(59, 130, 246, 0.2)';
      ctx.lineWidth = 1;

      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot1 = dotsRef.current[i];
          const dot2 = dotsRef.current[j];
          const distance = Math.sqrt(
            Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2)
          );

          if (distance < MAX_DISTANCE) {
            const opacity = (1 - distance / MAX_DISTANCE) * (isDark ? 0.3 : 0.2);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      dotsRef.current.forEach(dot => {
        if (dot.isHollow) {
          // Draw hollow dots
          ctx.strokeStyle = isDark 
            ? 'rgba(59, 130, 246, 0.8)' 
            : 'rgba(59, 130, 246, 0.6)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
          ctx.stroke();
          
          // Add glow effect for hollow dots
          ctx.shadowColor = 'rgba(59, 130, 246, 0.4)';
          ctx.shadowBlur = 8;
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else {
          // Draw filled dots
          ctx.fillStyle = isDark 
            ? 'rgba(59, 130, 246, 0.7)' 
            : 'rgba(59, 130, 246, 0.5)';
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
          ctx.fill();

          // Add glow effect for filled dots
          ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default AnimatedBackground;