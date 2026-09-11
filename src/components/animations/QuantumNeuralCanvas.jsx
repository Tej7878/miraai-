/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';

/**
 * QuantumNeuralCanvas
 * A high-performance, GPU-accelerated interactive canvas animation:
 * - Dynamic 3D depth-layered floating neural nodes
 * - Synaptic energy filaments connecting nearby nodes
 * - Interactive gravitational pull towards the mouse cursor with luminous electric sparks
 * - Expanding shockwave ripple on mouse click
 * - Ethereal ambient nebula dust clouds matching Miraai's brand palette (violet, cyan, indigo, magenta)
 */
export default function QuantumNeuralCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, isHovering: false });
  const ripplesRef = useRef([]);
  const animFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle count
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 75;
    const maxConnectionDistance = isMobile ? 100 : 150;

    const colors = [
      'rgba(139, 92, 246, ',  // Violet
      'rgba(6, 182, 212, ',   // Cyan
      'rgba(99, 102, 241, ',  // Indigo
      'rgba(217, 70, 239, ',  // Fuchsia
      'rgba(255, 255, 255, ', // Starlight White
    ];

    // Initialize particles
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 0.8,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.5 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
        layer: Math.random() * 0.6 + 0.4, // Depth layer for parallax
      });
    }

    // Handle Window Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Handle Mouse Movement
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
    };

    // Handle Click for Shockwave Ripple
    const handlePointerDown = (e) => {
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: Math.min(width, height) * 0.45,
        opacity: 0.8,
        color: colors[Math.floor(Math.random() * 3)],
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let lastScrollY = window.scrollY;
    let scrollDelta = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDelta = (currentScrollY - lastScrollY) * 0.15;
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Draw subtle ambient nebula background flares
      const gradient1 = ctx.createRadialGradient(
        width * 0.2 + Math.sin(time * 0.3) * 60,
        height * 0.3 + Math.cos(time * 0.4) * 50,
        0,
        width * 0.2,
        height * 0.3,
        width * 0.4
      );
      gradient1.addColorStop(0, 'rgba(139, 92, 246, 0.035)');
      gradient1.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      const gradient2 = ctx.createRadialGradient(
        width * 0.8 + Math.cos(time * 0.25) * 60,
        height * 0.7 + Math.sin(time * 0.35) * 50,
        0,
        width * 0.8,
        height * 0.7,
        width * 0.45
      );
      gradient2.addColorStop(0, 'rgba(6, 182, 212, 0.03)');
      gradient2.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // Process Ripples
      for (let r = ripplesRef.current.length - 1; r >= 0; r--) {
        const ripple = ripplesRef.current[r];
        ripple.radius += 5;
        ripple.opacity *= 0.96;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${ripple.color}${ripple.opacity})`;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = `${ripple.color}0.8)`;
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.shadowBlur = 0;

        if (ripple.opacity < 0.02 || ripple.radius > ripple.maxRadius) {
          ripplesRef.current.splice(r, 1);
        }
      }

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply velocities & scroll drift
        p.x += p.vx * p.layer;
        p.y += p.vy * p.layer - scrollDelta * p.layer;

        // Wrap around boundaries smoothly
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse Gravitational Attraction
        if (mouseRef.current.isHovering) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;

          if (dist < maxDist && dist > 5) {
            const force = (1 - dist / maxDist) * 0.04;
            p.x += (dx / dist) * force * 10;
            p.y += (dy / dist) * force * 10;
          }
        }

        // Ripple interaction - push particles
        for (let r = 0; r < ripplesRef.current.length; r++) {
          const rip = ripplesRef.current[r];
          const rdx = p.x - rip.x;
          const rdy = p.y - rip.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
          if (Math.abs(rdist - rip.radius) < 30 && rdist > 0) {
            p.x += (rdx / rdist) * 2.5;
            p.y += (rdy / rdist) * 2.5;
          }
        }

        // Draw Synaptic Filaments between neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < maxConnectionDistance) {
            const filamentAlpha = (1 - cdist / maxConnectionDistance) * 0.22 * p.layer;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${p.colorBase}${filamentAlpha})`;
            ctx.lineWidth = 0.8 * p.layer;
            ctx.stroke();
          }
        }

        // Draw Particle Node
        const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset);
        const currentRadius = Math.max(0.5, p.radius * (1 + pulse * 0.3) * p.layer);
        const currentAlpha = Math.min(1, Math.max(0.1, (p.baseAlpha + pulse * 0.2) * p.layer));

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${currentAlpha})`;
        ctx.shadowColor = `${p.colorBase}0.8)`;
        ctx.shadowBlur = 8 * p.layer;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Decay scroll delta
      scrollDelta *= 0.92;

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
