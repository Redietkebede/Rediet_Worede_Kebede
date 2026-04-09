"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
};

interface AetherFlowHeroProps {
  className?: string;
}

export function AetherFlowHero({ className }: AetherFlowHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, radius: 190 };
    const cellSize = 120;

    const getParticleCap = (width: number) => {
      if (width >= 1920) return 84;
      if (width >= 1600) return 76;
      if (width >= 1280) return 68;
      if (width >= 1024) return 60;
      if (width >= 768) return 50;
      return 42;
    };

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(bounds.width));
      canvas.height = Math.max(1, Math.floor(bounds.height));
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const areaBasedCount = Math.floor((canvas.width * canvas.height) / 11000);
      const count = Math.max(30, Math.min(areaBasedCount, getParticleCap(canvas.width)));

      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: Math.random() * 0.42 - 0.21,
          dy: Math.random() * 0.42 - 0.21,
          size: Math.random() * 2.8 + 1.35,
        });
      }
    };

    const drawConnections = () => {
      const connectDistance = canvas.width >= 1600 ? 112 : canvas.width >= 1200 ? 124 : 136;
      const threshold = connectDistance * connectDistance;
      const grid = new Map<string, number[]>();

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        const gx = Math.floor(p.x / cellSize);
        const gy = Math.floor(p.y / cellSize);
        const key = `${gx},${gy}`;
        const existing = grid.get(key);
        if (existing) {
          existing.push(i);
        } else {
          grid.set(key, [i]);
        }
      }

      const glowScale = canvas.width >= 1700 ? 0.25 : canvas.width >= 1300 ? 0.5 : 1;

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        const gx = Math.floor(a.x / cellSize);
        const gy = Math.floor(a.y / cellSize);

        for (let ox = -1; ox <= 1; ox += 1) {
          for (let oy = -1; oy <= 1; oy += 1) {
            const neighbors = grid.get(`${gx + ox},${gy + oy}`);
            if (!neighbors) continue;

            for (let n = 0; n < neighbors.length; n += 1) {
              const j = neighbors[n];
              if (j <= i) continue;

              const b = particles[j];
              const distSq = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
              if (distSq >= threshold) continue;

              const proximity = 1 - distSq / threshold;
              const alpha = Math.min(0.9, 0.12 + proximity * 0.58);
              const midX = (a.x + b.x) / 2;
              const midY = (a.y + b.y) / 2;
              const mouseDist = Math.hypot(mouse.x - midX, mouse.y - midY);
              const nearMouse = mouseDist < mouse.radius;

              ctx.strokeStyle = nearMouse
                ? `rgba(248,248,255,${Math.min(1, alpha + 0.2)})`
                : `rgba(229,9,20,${alpha})`;
              ctx.lineWidth = nearMouse ? 1.7 : 1.2;
              ctx.shadowBlur = (nearMouse ? 10 : 6) * glowScale;
              ctx.shadowColor = nearMouse ? "rgba(255,255,255,0.65)" : "rgba(229,9,20,0.62)";
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0b0b0b";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        if (p.x > canvas.width || p.x < 0) p.dx = -p.dx;
        if (p.y > canvas.height || p.y < 0) p.dy = -p.dy;

        const mx = mouse.x - p.x;
        const my = mouse.y - p.y;
        const mouseDist = Math.hypot(mx, my);

        if (mouseDist < mouse.radius && mouseDist > 0) {
          const force = (mouse.radius - mouseDist) / mouse.radius;
          p.x -= (mx / mouseDist) * force * 2.8;
          p.y -= (my / mouseDist) * force * 2.8;
        }

        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.shadowBlur = canvas.width >= 1700 ? 4 : canvas.width >= 1300 ? 7 : 14;
        ctx.shadowColor = "rgba(229,9,20,0.62)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      drawConnections();
      frameId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(canvas);
    resizeCanvas();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={cn("h-full w-full", className)} aria-hidden="true" />;
}
