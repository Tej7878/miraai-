// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';

// Import local optimized MP4 videos
import joly1 from '../assets/images/videos/1.mp4';
import joly2 from '../assets/images/videos/2.mp4';
import joly3 from '../assets/images/videos/3.mp4';
import joly4 from '../assets/images/videos/4.mp4'; 
import joly5 from '../assets/images/videos/19.mp4'; 
import joly6 from '../assets/images/videos/7.mp4'; 

// Video sources array (hardware-accelerated local MP4s)
const videoSources = [joly4, joly2, joly5, joly3, joly1 , joly6];

export default function FullscreenBackgroundHero({ openForm }) {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Check mobile width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 880);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={`hero-section ${isMobile ? 'mobile' : ''} tracking-[0.5px]`}>
      
      {/* 6-Column Full-Screen Video Background Grid */}
      <div className="fullscreen-video-grid">
        {videoSources.map((src, index) => {
          const wakeDelay = `${index * 1.2}s`;
          const isOdd = index % 2 === 0;
          const parallaxFactor = isOdd ? -0.32 : 0.32;
          const parallaxOffset = isMobile ? 0 : scrollY * parallaxFactor;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`video-column ${isOdd ? 'from-top' : 'from-bottom'} ${hoveredIndex === index ? 'hovered' : ''}`}
              style={{ 
                '--wake-delay': wakeDelay,
                '--stagger-delay': `${index * 0.08}s`
              }}
            >
              <div 
                className="column-scroll-wrapper"
                style={{
                  transform: `translate3d(0, ${parallaxOffset}px, 0)`
                }}
              >
                <div className="video-column-inner">
                  {typeof src === 'string' && src.toLowerCase().includes('.gif') ? (
                    <img src={src} alt="Hero media" className="bg-video-element" />
                  ) : (
                    <video src={src} autoPlay muted loop playsInline className="bg-video-element" preload="auto" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vignette Overlay for Cinematic Feel */}
      <div className="vignette-overlay"></div>

      {/* Center Content Section */}
      <div className="hero-content-wrapper">
        
        {/* Dynamic Glowing Orbs Behind the Glass */}
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>

        <div className="hero-content glass-card">
          {/* Noise Texture for Frosted Glass */}
          <div className="glass-noise"></div>


          <h1 className="hero-heading">
            <div className="line-wipe-wrapper">
              <span className="line-wipe-text" style={{ animationDelay: '0.1s' }}>India's 1st Premium</span>
            </div>
            <div className="line-wipe-wrapper">
              <span className="line-wipe-text" style={{ animationDelay: '0.22s' }}>
                <span className="ai-powered-text" data-text="AI‑Powered">AI‑Powered</span> Image & Video
              </span>
            </div>
            <div className="line-wipe-wrapper">
              <span className="line-wipe-text" style={{ animationDelay: '0.34s' }}>Production Services</span>
            </div>
          </h1>

          <p className="hero-subheading">
            70% cost reduction, 10x faster — no studios or crews required.
          </p>

          <button className="premium-btn" onClick={openForm}>
            <span className="premium-btn-content">
              Talk to Our Expert
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@1,400;1,500&display=swap');

        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #050505; /* Deep rich black */
        }

        .fullscreen-video-grid {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .video-column {
          position: relative;
          height: 100%;
          overflow: hidden;
          // border-right: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
        }

        .video-column:last-child {
          border-right: none;
        }

        .video-column.from-top {
          animation: slideFromTop 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--stagger-delay);
          opacity: 0;
        }

        .video-column.from-bottom {
          animation: slideFromBottom 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--stagger-delay);
          opacity: 0;
        }

        @keyframes slideFromTop {
          0% { transform: translateY(-20%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideFromBottom {
          0% { transform: translateY(20%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .column-scroll-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          will-change: transform;
          transition: transform 0.1s linear;
        }

        .video-column-inner {
          position: absolute;
          inset: 0;
          opacity: 1;
          transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .video-column:hover .video-column-inner {
          transform: scale(1.05);
          z-index: 2;
        }

        .bg-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          will-change: transform;
          transform: translateZ(0);
          filter: contrast(1.1) saturate(1.1);
        }

        /* Vignette overlay to make center pop and text readable */
        // .vignette-overlay {
        //   position: absolute;
        //   inset: 0;
        //   background: radial-gradient(circle at center, transparent 15%, rgba(0,0,0,0.85) 90%);
        //   z-index: 5;
        //   pointer-events: none;
        // }

        /* Hero Content Styles */
        .hero-content-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0 20px;
        }

        /* Glowing Orbs */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          z-index: -1;
          animation: floatOrb 8s infinite alternate ease-in-out;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: rgba(139, 92, 246, 0.4); /* Deep Violet */
          top: -50px;
          left: -50px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 250px;
          height: 250px;
          background: rgba(236, 72, 153, 0.3); /* Pink */
          bottom: -20px;
          right: -20px;
          animation-delay: 2s;
        }
        
        .orb-3 {
          width: 200px;
          height: 200px;
          background: rgba(56, 189, 248, 0.3); /* Cyan */
          bottom: -80px;
          left: 30%;
          animation-delay: 4s;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -30px) scale(1.1); }
        }

        /* Glassmorphism Card */
        .glass-card {
          position: relative;
          text-align: center;
          max-width: 820px;
          padding: 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          pointer-events: auto;
          
          /* Frosted Glass Effect */
          background: rgba(20, 20, 20, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(18px);
          
          /* Premium Inner Shadows & Borders */
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 32px;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          overflow: hidden;
        }

        /* Subtle Noise Overlay */
        .glass-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .hero-badge-tag {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          z-index: 2;
        }

        .badge-ping-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 12px #38bdf8, 0 0 20px #38bdf8;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(56, 189, 248, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
        }

        .hero-heading {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-size: 45px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -1px !important;
          margin: 0;
          z-index: 2;
        }

        .line-wipe-wrapper {
          overflow: hidden;
          display: block;
        }
        
        .line-wipe-text {
          display: inline-block;
          transform: translateY(110%);
          animation: fadeUpReveal 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        @keyframes fadeUpReveal {
          0% { transform: translateY(110%); opacity: 0; filter: blur(4px); }
          100% { transform: translateY(0); opacity: 1; filter: blur(0); }
        }

        .ai-powered-text {
          position: relative;
          display: inline-block;
          background: linear-gradient(
            to right,
            #a78bfa,
            #f472b6,
            #38bdf8,
            #a78bfa
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        .hero-subheading {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-size: 20px !important;
          font-weight: 400;
          color: #94a3b8;
          line-height: 1.6;
          margin: 0;
          max-width: 600px;
          opacity: 0;
          transform: translateY(20px);
          animation: simpleFadeUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
          animation-delay: 0.6s;
          z-index: 2;
        }

        /* Premium CTA Button */
        .premium-btn {
          position: relative;
          margin-top: 15px;
          padding: 0;
          background: transparent;
          border: none;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px);
          animation: simpleFadeUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
          animation-delay: 0.75s;
          z-index: 2;
          border-radius: 16px;
        }

        .premium-btn::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 18px;
          background: linear-gradient(90deg, #a78bfa, #f472b6, #38bdf8, #a78bfa);
          background-size: 300%;
          z-index: -1;
          animation: buttonBorderGlow 4s linear infinite;
          transition: filter 0.3s ease;
        }

        .premium-btn:hover::before {
          filter: blur(10px);
        }

        .premium-btn-content {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #0f172a;
          padding: 16px 40px;
          border-radius: 16px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .premium-btn:hover .premium-btn-content {
          background: #f8fafc;
          color: #000000;
          transform: translateY(-2px);
        }

        @keyframes buttonBorderGlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        @keyframes simpleFadeUp {
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Layout */
        @media (max-width: 880px) {
          .fullscreen-video-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
          }
          .glass-card {
            padding: 2.5rem 1.5rem;
            border-radius: 24px;
          }
          .hero-heading {
            font-size: 36px !important;
            letter-spacing: -0.5px !important;
          }
          .hero-subheading {
            font-size: 16px !important;
          }
          .orb-1 { width: 200px; height: 200px; }
          .orb-2 { width: 150px; height: 150px; }
          .premium-btn-content {
            padding: 14px 32px;
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}