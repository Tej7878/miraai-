/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

/**
 * HoloCard
 * Multi-layer 3D holographic tilt card with cursor-responsive specular glare reflection.
 */
export default function HoloCard({
  children,
  className = '',
  maxTilt = 12,
  glareOpacity = 0.25,
  borderRadius = '24px',
  ...props
}) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 200,
    damping: 25,
  });
  const scale = useSpring(1, { stiffness: 200, damping: 25 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(relativeX);
    mouseY.set(relativeY);

    const absX = e.clientX - rect.left;
    const absY = e.clientY - rect.top;
    cardRef.current.style.setProperty('--holo-x', `${absX}px`);
    cardRef.current.style.setProperty('--holo-y', `${absY}px`);
  };

  const handleMouseEnter = () => {
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        borderRadius,
      }}
      className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
      {...props}
    >
      {/* Specular Holographic Glare Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--holo-x, 50%) var(--holo-y, 50%), rgba(255, 255, 255, ${glareOpacity}), transparent 60%)`,
          borderRadius,
        }}
      />

      {/* Holographic Iridescent Sheen Band */}
      <div
        className="pointer-events-none absolute -inset-[100%] z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-color-dodge"
        style={{
          background: `linear-gradient(135deg, transparent 40%, rgba(139, 92, 246, 0.4) 48%, rgba(6, 182, 212, 0.4) 52%, transparent 60%)`,
          transform: `translate3d(calc(var(--holo-x, 0px) * 0.2), calc(var(--holo-y, 0px) * 0.2), 0)`,
        }}
      />

      {children}
    </motion.div>
  );
}
