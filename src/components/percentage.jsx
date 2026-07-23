import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, animate } from 'framer-motion';

const stats = [
  { value: 99.8, suffix: '%', label: 'Satisfaction Rate', color: 'from-blue-400 to-indigo-500', glow: 'rgba(59, 130, 246, 0.15)', glowClass: 'text-blue-500' },
  { value: 24, suffix: '/7', label: 'AI Availability', color: 'from-purple-400 to-indigo-500', glow: 'rgba(139, 92, 246, 0.15)', glowClass: 'text-purple-500' },
  { value: 70, suffix: '%', label: 'Cost Reduction', color: 'from-blue-400 to-purple-500', glow: 'rgba(99, 102, 241, 0.15)', glowClass: 'text-indigo-400' },
  { value: 10, suffix: 'x', label: 'Faster Delivery', color: 'from-indigo-400 to-purple-600', glow: 'rgba(168, 85, 247, 0.15)', glowClass: 'text-purple-600' }
];

// Smooth count-up counter component triggered on viewport enter
const Counter = ({ value, suffix, index }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    node.textContent = '0' + suffix;

    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
      onUpdate(latestValue) {
        if (index === 0) {
          node.textContent = latestValue.toFixed(1) + suffix;
        } else {
          node.textContent = Math.floor(latestValue) + suffix;
        }
      }
    });

    return () => controls.stop();
  }, [value, suffix, index]);

  return <span ref={nodeRef} />;
};

// StatCard with 3D Tilt and Spotlight Hover Glow
const StatCard = ({ stat, index, isMobile }) => {
  const cardRef = useRef(null);
  
  // Mouse position inside the card relative to card dimensions (for tilt)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth rotation changes
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });
  const scale = useSpring(1, { stiffness: 150, damping: 20 });

  // Premium 3D perspective transform template
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  
  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalize coordinates between -0.5 and 0.5
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(relativeX);
    mouseY.set(relativeY);
    
    // Track absolute coordinates for CSS custom properties (spotlight)
    const absX = e.clientX - rect.left;
    const absY = e.clientY - rect.top;
    cardRef.current.style.setProperty('--x', `${absX}px`);
    cardRef.current.style.setProperty('--y', `${absY}px`);
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    scale.set(1.04);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    mouseX.set(0);
    mouseY.set(0);
  };

  const [inView, setInView] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
        delay: index * 0.12 
      }}
      style={{
        transform: isMobile ? 'none' : transform,
        transformStyle: 'preserve-3d',
      }}
      onViewportEnter={() => setInView(true)}
      className="relative bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl py-8 px-4 md:py-12 md:px-8 text-center cursor-pointer overflow-hidden group hover:border-white/20 transition-colors duration-500 select-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
    >
      {/* Dynamic radial glow spotlight following cursor (desktop only) */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{
            background: `radial-gradient(300px circle at var(--x, 0px) var(--y, 0px), ${stat.glow}, transparent 80%)`
          }}
        />
      )}

      {/* Neon beam boundary glow (desktop only) */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{
            border: '1px solid transparent',
            backgroundImage: `radial-gradient(150px circle at var(--x, 0px) var(--y, 0px), rgba(255, 255, 255, 0.08), transparent 80%)`,
            backgroundClip: 'border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      )}

      {/* Floating ambient glow orb */}
      <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-[0.03] group-hover:opacity-[0.08] blur-2xl rounded-full transition-opacity duration-500`} />

      {/* Content wrapper with preserve-3d to enable parallax depth */}
      <div style={{ transform: 'translateZ(40px)' }} className="relative z-10 space-y-2 md:space-y-4">
        {/* Dynamic Gradient Numbers with duplicate glow backing */}
        <div className="relative inline-block text-4xl md:text-5xl font-extrabold tracking-tight group-hover:scale-[1.03] transition-transform duration-500 transform-gpu pr-1">
          {/* Main gradient text */}
          <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}>
            {inView ? (
              <Counter value={stat.value} suffix={stat.suffix} index={index} />
            ) : (
              <span>0{stat.suffix}</span>
            )}
          </span>
          {/* Blurred duplicate for neon glow */}
          <span className={`absolute inset-0 ${stat.glowClass} blur-md opacity-25 group-hover:opacity-70 transition-opacity duration-500 select-none pointer-events-none z-0`}>
            {inView ? (
              <Counter value={stat.value} suffix={stat.suffix} index={index} />
            ) : (
              <span>0{stat.suffix}</span>
            )}
          </span>
        </div>

        {/* Text Label */}
        <div className="text-slate-400 text-xs md:text-sm font-semibold tracking-wider uppercase opacity-80 group-hover:text-slate-200 transition-colors duration-300">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
};

const Percentage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-black min-h-auto flex items-center justify-center py-16 md:py-24 px-6 md:px-12 relative overflow-hidden tracking-[0.5px]">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-[1200px] w-full relative z-[1]">
        {stats.map((stat, index) => (
          <StatCard 
            key={index} 
            stat={stat} 
            index={index} 
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
};

export default Percentage;
