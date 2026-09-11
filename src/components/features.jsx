/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import CyberLaserBorder from './animations/CyberLaserBorder';
import HoloCard from './animations/HoloCard';

const Features = () => {
  const sectionRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15, margin: "-50px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Background interactive cursor glow
      const sectionRect = sectionRef.current?.getBoundingClientRect();
      if (sectionRect && cursorGlowRef.current) {
        // Offset by 200px to center the 400px width/height orb
        const x = e.clientX - sectionRect.left - 200;
        const y = e.clientY - sectionRect.top - 200;
        
        // Smoothly animate the cursor follower
        cursorGlowRef.current.animate({
          transform: `translate(${x}px, ${y}px)`
        }, { duration: 1200, fill: "forwards", easing: "ease" });
      }

      // Individual cards hover effect tracking
      const cards = document.getElementsByClassName("feature-card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      title: "AI Video Modeling",
      description: "Generate High-Fidelity AI Video Models And Virtual Actors For Ads, Campaigns, And Commercials.",
      tag: "Trending",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      glowColor: "rgba(99, 102, 241, 0.4)",
      laserColor: "#8B5CF6",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      )
    },
    {
      title: "AI Photo Modeling",
      description: "Create Professional Studio-Grade Model Photoshoots Without Physical Studios, Sets, Or Crews.",
      tag: "Ultra Quality",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
      laserColor: "#06B6D4",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      )
    },
    {
      title: "Book Development",
      description: "Design Illustrated Covers, Full Layouts, And Dynamic Storybook Visuals Powered By AI.",
      tag: "Creative",
      gradient: "from-amber-400 via-orange-500 to-rose-500",
      glowColor: "rgba(245, 158, 11, 0.4)",
      laserColor: "#F59E0B",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    },
    {
      title: "AD Marketing",
      description: "Produce High-ROI Performance Ad Creatives Engineered For Maximum Social Media Conversions.",
      tag: "High ROI",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
      laserColor: "#10B981",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    },
    {
      title: "Brand Video Development",
      description: "Craft Premium Cinematic Brand Stories, Corporate Profiles, And Identity Videos At Scale.",
      tag: "Enterprise",
      gradient: "from-purple-500 via-indigo-500 to-blue-600",
      glowColor: "rgba(139, 92, 246, 0.4)",
      laserColor: "#8B5CF6",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
          <line x1="7" y1="2" x2="7" y2="22"></line>
          <line x1="17" y1="2" x2="17" y2="22"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="2" y1="7" x2="7" y2="7"></line>
          <line x1="2" y1="17" x2="7" y2="17"></line>
          <line x1="17" y1="17" x2="22" y2="17"></line>
          <line x1="17" y1="7" x2="22" y2="7"></line>
        </svg>
      )
    },
    {
      title: "Speech Video Marketing",
      description: "Deliver AI Avatars Delivering Multi-Language Speeches, Executive Messages, And Scripted Talks.",
      tag: "AI Voice",
      gradient: "from-violet-500 via-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.4)",
      laserColor: "#A855F7",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      )
    },
    {
      title: "Movie Marketing",
      description: "Generate Blockbuster Motion Posters, Teasers, Trailer Visuals, And Complete Promotional Campaigns.",
      tag: "Cinematic",
      gradient: "from-rose-500 via-red-500 to-amber-500",
      glowColor: "rgba(244, 63, 94, 0.4)",
      laserColor: "#F43F5E",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      )
    },
    {
      title: "Concept Shoot",
      description: "Execute Futuristic Thematic Campaigns, Abstract Artworks, And Avant-Garde Visual Concepts.",
      tag: "Artistic",
      gradient: "from-teal-400 via-emerald-500 to-green-500",
      glowColor: "rgba(20, 184, 166, 0.4)",
      laserColor: "#14B8A6",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
        </svg>
      )
    },
    {
      title: "Catalog Design",
      description: "Create Complete Digital Catalogs, Interactive Lookbooks, And Dynamic Multi-Product Showcases.",
      tag: "Automated",
      gradient: "from-blue-500 via-cyan-500 to-teal-400",
      glowColor: "rgba(59, 130, 246, 0.4)",
      laserColor: "#3B82F6",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: "Poster Design",
      description: "Design Striking High-Resolution Event Posters, Digital Billboards, And Eye-Catching Display Graphics.",
      tag: "Visual Art",
      gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
      glowColor: "rgba(217, 70, 239, 0.4)",
      laserColor: "#D946EF",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      title: "Product Design",
      description: "Photorealistic 3D Packaging Previews, Product Renders, And E-Commerce Showcase Graphics.",
      tag: "3D & AI",
      gradient: "from-indigo-400 via-purple-500 to-pink-500",
      glowColor: "rgba(99, 102, 241, 0.4)",
      laserColor: "#6366F1",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#030308] min-h-screen py-24 px-4 md:px-8 relative overflow-hidden font-['Inter']">
      
      {/* Interactive Cursor Glow */}
      <div 
        ref={cursorGlowRef} 
        className="absolute w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none z-0" 
        style={{ transform: 'translate(-200px, -200px)' }} 
      />

      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.15)] mb-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">Next-Gen Production Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-tight">
            Powerful Platform Features
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to create, scale, and automate your AI content production in one unified studio.
          </p>
        </motion.div>

        {/* Features Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <HoloCard borderRadius="24px" maxTilt={8} className="h-full">
                <div className="feature-card group relative p-8 flex flex-col justify-between h-full overflow-hidden select-none bg-slate-950/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl transition-all duration-500 hover:border-slate-700 hover:-translate-y-1.5 shadow-2xl">
                  {/* Subtle Gradient Glow on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${feature.glowColor}, transparent 40%)`
                    }}
                  />

                  {/* Glowing Corner Accent Bar */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-32`} />

                  <div>
                    {/* Header Row: Icon + Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] shadow-lg group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-300`}>
                        <div className="w-full h-full bg-slate-950/90 backdrop-blur-md rounded-[15px] flex items-center justify-center text-white group-hover:bg-transparent transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>

                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-400 group-hover:border-slate-700 group-hover:text-slate-200 transition-all">
                        {feature.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed font-normal group-hover:text-slate-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </HoloCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
