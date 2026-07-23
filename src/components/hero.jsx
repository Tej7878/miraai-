// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';

// Import local optimized MP4 videos
import joly1 from '../assets/images/videos/Joly .mp4';
import joly2 from '../assets/images/videos/Joly 2 .mp4';
import joly3 from '../assets/images/videos/Joly 3.mp4';
import joly4 from '../assets/images/videos/Joly 4.mp4';

// Import Cloudinary configuration
import cloudinaryVideos from '../config/cloudinary_videos.json';

// Video sources array (hardware-accelerated MP4s)
const videoSources = [joly1, joly2, joly3, joly4, joly1, joly3];

// Cloudinary Cloud Name
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

// Helper to construct optimized Cloudinary URL for videos and poster images
const getCloudinaryUrl = (index, isMobile = false, isImage = false) => {
  const publicId = cloudinaryVideos?.heroVideos?.[index];
  if (!publicId || !cloudName || cloudName === 'your_cloud_name') return null;
  const width = isMobile ? 360 : 720;
  
  if (isImage) {
    return `https://res.cloudinary.com/${cloudName}/video/upload/c_limit,w_${width}/f_auto/q_auto/${publicId}.jpg`;
  } else {
    return `https://res.cloudinary.com/${cloudName}/video/upload/c_limit,w_${width}/ac_none/f_auto/q_auto:good/${publicId}`;
  }
};

export default function FullscreenBackgroundHero({ openForm }) {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          const cloudinaryUrl = getCloudinaryUrl(index, isMobile, false);
          const cloudinaryPoster = getCloudinaryUrl(index, isMobile, true);
          const finalSrc = cloudinaryUrl || src;
          const wakeDelay = `${index * 1.2}s`;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`video-column ${hoveredIndex === index ? 'hovered' : ''}`}
              style={{ '--wake-delay': wakeDelay }}
            >
              {/* Hardware-Accelerated Video Player */}
              <div className="video-column-inner">
                <video
                  src={finalSrc}
                  poster={cloudinaryPoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="bg-video-element"
                  preload="auto"
                />
              </div>

              {/* Light Scan Sweep Bar */}
              <div className="column-sweep" />

              {/* Glowing Top/Bottom Border Highlights */}
              <div className="column-ring" />

              {/* AI Video Pill Badge */}
              <div className="column-badge">
                <span className="badge-dot" />
                <span>AI VIDEO</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center Content Section */}
      <div className="hero-content">
        
        {/* Top Tag Badge */}
        <div className="hero-badge-tag">
          <span className="badge-ping-dot" />
          <span>Next-Gen AI Video Production</span>
        </div>

        <h1 className="hero-heading">
          <div className="line-wipe-wrapper">
            <span className="line-wipe-text" style={{ animationDelay: '0.1s' }}>India's 1st Premium</span>
          </div>
          <div className="line-wipe-wrapper">
            <span className="line-wipe-text" style={{ animationDelay: '0.22s' }}>
              <span className="ai-powered-text">AI‑Powered</span> Image & Video
            </span>
          </div>
          <div className="line-wipe-wrapper">
            <span className="line-wipe-text" style={{ animationDelay: '0.34s' }}>Production Services</span>
          </div>
        </h1>

        <p className="hero-subheading">
          70% cost reduction, 10x faster — no studios or crews required.
        </p>

        <button className="hero-button group relative overflow-hidden" onClick={openForm}>
          <span className="relative block overflow-hidden z-10">
            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
              Talk to Our Expert
            </span>
            <span className="absolute inset-0 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
              Talk to Our Expert
            </span>
          </span>
        </button>
      </div>

      {/* Styles */}
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
          background: #000000;
        }

        /* Fullscreen 6-Column Video Grid */
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
          border-right: 1px solid rgba(255, 255, 255, 0.12);
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .video-column:last-child {
          border-right: none;
        }

        .video-column-inner {
          position: absolute;
          inset: 0;
          transform: scale(1);
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
          opacity: 1;
          filter: brightness(1) saturate(1);
          animation: columnWake 7.2s ease-in-out infinite;
          animation-delay: var(--wake-delay);
        }

        .video-column:hover .video-column-inner {
          opacity: 1 !important;
          filter: brightness(1.2) saturate(1.25) !important;
          transform: scale(1.06) !important;
        }

        @keyframes columnWake {
          0%, 50% {
            opacity: 1;
            filter: brightness(1) saturate(1);
            transform: scale(1);
          }
          66% {
            opacity: 1;
            filter: brightness(1.25) saturate(1.3);
            transform: scale(1.06);
          }
          86% {
            opacity: 1;
            filter: brightness(1.15) saturate(1.2);
            transform: scale(1.04);
          }
          100% {
            opacity: 1;
            filter: brightness(1) saturate(1);
            transform: scale(1);
          }
        }

        .bg-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          will-change: transform;
          transform: translateZ(0);
        }

        /* Column Light Scan Sweep */
        .column-sweep {
          position: absolute;
          top: -150%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(255, 255, 255, 0.25) 40%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0.25) 60%,
            transparent
          );
          pointer-events: none;
          z-index: 5;
          animation: columnSweepMove 7.2s ease-in-out infinite;
          animation-delay: var(--wake-delay);
        }

        @keyframes columnSweepMove {
          0%, 48% {
            top: -150%;
          }
          62% {
            top: 150%;
          }
          100% {
            top: 150%;
          }
        }

        /* Column Glow Ring Highlight */
        .column-ring {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 6;
          box-shadow: inset 0 0 0 0px rgba(99, 102, 241, 0);
          animation: columnRingGlow 7.2s ease-in-out infinite;
          animation-delay: var(--wake-delay);
        }

        @keyframes columnRingGlow {
          0%, 50% {
            box-shadow: inset 0 0 0 0px rgba(99, 102, 241, 0);
          }
          66% {
            box-shadow: inset 0 0 35px 4px rgba(99, 102, 241, 0.6), inset 0 0 15px 2px rgba(212, 175, 55, 0.5);
          }
          86% {
            box-shadow: inset 0 0 20px 2px rgba(99, 102, 241, 0.3);
          }
          100% {
            box-shadow: inset 0 0 0 0px rgba(99, 102, 241, 0);
          }
        }

        /* Column AI Video Badge Pill */
        .column-badge {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%) scale(0.7);
          background: rgba(10, 10, 18, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(212, 175, 55, 0.7);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.8), 0 0 12px rgba(212, 175, 55, 0.3);
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          padding: 5px 12px;
          border-radius: 20px;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
          z-index: 10;
          opacity: 0;
          display: flex;
          align-items: center;
          gap: 6px;
          animation: columnBadgeIn 7.2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          animation-delay: var(--wake-delay);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d4af37;
          box-shadow: 0 0 8px #d4af37;
        }

        @keyframes columnBadgeIn {
          0%, 58% {
            opacity: 0;
            transform: translateX(-50%) scale(0.7);
          }
          64%, 80% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
          90% {
            opacity: 0;
            transform: translateX(-50%) scale(0.85);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) scale(0.7);
          }
        }

        /* Hero Content Styles */
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 760px;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          pointer-events: auto;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 28px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }

        .hero-badge-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 30px;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.4);
          backdrop-filter: blur(10px);
          color: #a5b4fc;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.15);
        }

        .badge-ping-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #818cf8;
          box-shadow: 0 0 10px #818cf8;
        }

        .hero-heading {
          font-family: 'Inter', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px !important;
          margin: 0;
        }

        .line-wipe-wrapper {
          overflow: hidden;
          display: block;
          line-height: 1.2;
        }
        .line-wipe-text {
          display: inline-block;
          transform: translateY(105%);
          animation: fadeUp 0.85s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }
        @keyframes fadeUp {
          0% {
            transform: translateY(105%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .ai-powered-text {
          background: linear-gradient(
            90deg,
            #818cf8 0%,
            #c084fc 35%,
            #f472b6 70%,
            #818cf8 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: textSweep 4s linear infinite;
        }
        @keyframes textSweep {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: -200% center;
          }
        }

        .hero-subheading {
          font-family: 'Inter', sans-serif;
          font-size: 20px !important;
          font-weight: 500;
          color: #cbd5e1;
          line-height: 1.6;
          letter-spacing: 0.5px !important;
          margin: 0;
          max-width: 560px;
          opacity: 0;
          transform: translateY(20px);
          animation: simpleFadeUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
          animation-delay: 0.6s;
        }

        .hero-button {
          position: relative;
          background: #ffffff;
          color: #000000;
          border: none;
          padding: 14px 34px;
          border-radius: 14px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.25);
          margin-top: 6px;
          opacity: 0;
          transform: translateY(20px);
          animation: simpleFadeUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
          animation-delay: 0.75s;
        }

        @keyframes simpleFadeUp {
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.5);
        }

        .hero-button::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          border: 1.5px solid #818cf8;
          opacity: 0;
          transform: scale(1);
          animation: ctaPulse 2.2s cubic-bezier(0.25, 0, 0, 1) infinite;
          pointer-events: none;
        }
        @keyframes ctaPulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.24);
            opacity: 0;
          }
        }

        /* Mobile Layout */
        @media (max-width: 880px) {
          .fullscreen-video-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
          }
          .hero-heading {
            font-size: 32px !important;
          }
          .hero-subheading {
            font-size: 17px !important;
            padding: 0 10px;
          }
          .hero-content {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}