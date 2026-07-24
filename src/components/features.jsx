import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';

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
      title: "AI Video Generation",
      description: "Create High-Quality Marketing Videos, Ads, And Explainers Instantly From Scripts And Ideas.",
      tag: "Popular",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      glowColor: "rgba(99, 102, 241, 0.4)",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      )
    },
    {
      title: "AI Image Generation",
      description: "Generate Professional Product And Lifestyle Images Without Photoshoots Or Studios.",
      tag: "Ultra Quality",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      )
    },
    {
      title: "AI Product Catalog",
      description: "Automatically Create Complete Product Catalogs With Visuals, Descriptions, And Branding.",
      tag: "Automated",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: "UGC-Style Video Ads",
      description: "Produce Authentic, Influencer-Style Short Videos For Social Media And Performance Ads.",
      tag: "High ROI",
      gradient: "from-amber-400 via-orange-500 to-rose-500",
      glowColor: "rgba(245, 158, 11, 0.4)",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    },
    {
      title: "Infinite Customization",
      description: "Customize Colors, Fonts, Layouts, And Formats To Match Your Brand Identity.",
      tag: "Flexibility",
      gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
      glowColor: "rgba(217, 70, 239, 0.4)",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      title: "Virtual Characters & Avatars",
      description: "Use AI-Powered Models And Presenters For Ads, Explainers, And Promotions.",
      tag: "Next Gen",
      gradient: "from-violet-500 via-purple-500 to-indigo-600",
      glowColor: "rgba(139, 92, 246, 0.4)",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      title: "High-Impact Branding Ads",
      description: "Design And Launch Powerful Ad Creatives Optimized For Digital Platforms.",
      tag: "Performance",
      gradient: "from-blue-500 via-indigo-500 to-violet-600",
      glowColor: "rgba(59, 130, 246, 0.4)",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      )
    },
    {
      title: "Automated Editing & Effects",
      description: "Apply Professional Editing, Transitions, Color Grading, And Audio Optimization Automatically.",
      tag: "Smart FX",
      gradient: "from-teal-400 via-emerald-500 to-green-500",
      glowColor: "rgba(20, 184, 166, 0.4)",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      )
    },
    {
      title: "Brand Consistency",
      description: "Maintain A Consistent Brand Identity Across All Content And Campaigns.",
      tag: "Unified",
      gradient: "from-rose-500 via-pink-500 to-purple-600",
      glowColor: "rgba(244, 63, 94, 0.4)",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
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
              className="feature-card group relative bg-slate-950/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 transition-all duration-500 hover:border-slate-700 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-2xl"
              style={{
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
              }}
            >
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

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
