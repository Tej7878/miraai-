/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * MagneticButton
 * Interactive magnetic attraction wrapper that pulls buttons subtly towards the mouse cursor.
 * Features a dynamic liquid-light sweep and spring physics.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  onClick,
  ...props
}) {
  const ref = useRef(null);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = (clientX - centerX) * strength;
    const distanceY = (clientY - centerY) * strength;

    springX.set(distanceX);
    springY.set(distanceY);

    // Spotlight coordinate tracking
    const mouseX = clientX - left;
    const mouseY = clientY - top;
    ref.current.style.setProperty('--btn-x', `${mouseX}px`);
    ref.current.style.setProperty('--btn-y', `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    springX.set(0);
    springY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block relative cursor-pointer group ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
