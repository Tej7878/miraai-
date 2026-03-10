import React, { useEffect, useRef, useState, useCallback } from 'react';
import aiGenerationImg from '../assets/images/ai_generation.webp';
import customizeImg from '../assets/images/customize_brand.webp';
import inputVisionImg from '../assets/images/input.webp';
import reviewDeployImg from '../assets/images/review_deploy.webp';
import jolyImg from '../assets/images/Joly .webp';
import jolyVideo from '../assets/images/videos/Joly .mp4';
import joly2Img from '../assets/images/Joly 2 .webp';
import joly2Video from '../assets/images/videos/Joly 2 .mp4';
import joly3Img from '../assets/images/Joly 3.webp';
import joly3Video from '../assets/images/videos/Joly 3.mp4';
import joly4Img from '../assets/images/Joly 4.webp';
import joly4Video from '../assets/images/videos/Joly 4.mp4';
import jwelleryImg from '../assets/images/jwellery.webp';
import jwelleryVideo from '../assets/images/videos/Joly 4.mp4';
import lifestyleImg from '../assets/images/lifestyles.webp';
import textileImg from '../assets/textile & garments.webp';
import clothingVideo from '../assets/images/videos/Joly 3.mp4';


const features = [
  {
    id: 1,
    title: "Online Image Converter",
    titleLines: ["Online Image", "Converter"],
    desc: [
      "Breathe Motion Into Still Images Convert Photos Into Captivating Animated Videos With AI-Powered Fluidity. Add Seamless Motion, Effects, And Emotion Effortlessly."
    ],
    img: jolyImg,
    video: jolyVideo,
  },
  {
    id: 2,
    title: "Smart Creative Assets",
    titleLines: ["Smart Creative", "Assets"],
    desc: [
      "Generate Multiple Variations Of Your Marketing Banners In One Click. Stay Brand-Consistent While Scaling Your Creative Output. Designed For High-Performance Ads."
    ],
    img: joly2Img,
    video: joly2Video,
  },
  {
    id: 3,
    title: "Generative Fill & Expand",
    titleLines: ["Generative Fill", "& Expand"],
    desc: [
      "Expand The Boundaries Of Your Photos Or Intelligently Fill Missing Details. Fix Composition Errors And Create Formatting Variations. Perfect For Adapting Content To Different Social Platforms."
    ],
    img: joly3Img,
    video: joly3Video,
  },
  {
    id: 4,
    title: "Marketing Asset Generation",
    titleLines: ["Marketing Asset", "Generation"],
    desc: [
      "Scale Your Production By Generating Dozens Of Variations From A Single Seed Image. Test Different Styles, Colors, And Compositions To Find The Perfect High-Performing Creative."
    ],
    img: joly4Img,
    video: joly4Video,
  }
];

const ComparisonSlider = ({ img, video }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Mouse move handler
  const handleMove = useCallback((clientX) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPos(percentage);
    }
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const onTouchStart = (e) => {
    isDragging.current = true;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };

    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      handleMove(e.touches[0].clientX);
    };

    const onEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [handleMove]);

  return (
    <div
      className="cr-compare-container"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* Background: Video or Grayscale Image (Right Side) */}
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="cr-compare-img"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      ) : (
        <img src={img} alt="" className="cr-compare-img cr-img-bw" />
      )}

      {/* Overlay: Color Image (Left Side) - Clipped */}
      <img
        src={img}
        alt=""
        className="cr-compare-img cr-img-color"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      />

      {/* Slider Line (Simple sleek line with button) */}
      <div className="cr-compare-line" style={{ left: `${sliderPos}%` }}>
        <div className="cr-compare-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L11 9V15L8 12Z" fill="black" />
            <path d="M16 12L13 9V15L16 12Z" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function Creativerevisualization({ openForm }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when the element is in the middle 20% of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    triggerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Mobile navigation handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="cr-scroll-track tracking-[0.5px]">
      <div className="cr-sticky-viewport bg-[#000004] min-h-auto py-10 px-4 md:px-8 relative overflow-hidden font-['Inter'] tracking-[0.5px]">
        <div className="cr-wrap">
          <div className="cr-head text-center max-w-4xl mx-auto">

            {/* HEADING */}
            <div
              className="
               text-xl sm:text-2xl md:text-3xl
               font-extrabold
               leading-tight
               tracking-[0.5px]
               text-white
               mb-[12px]"
            >
              Creative
              Revisualization
            </div>

            {/* SUBHEADING */}
            <div
              className="
                text-sm sm:text-base
                font-medium
                leading-relaxed
                text-white/80
                tracking-[0.5px]
               max-w-4xl mx-auto"
            >
              Transform Your Existing Photos, Videos, And Creatives
              Into High-Performing Marketing Assets Using AI.
            </div>

          </div>

          <div className="cr-grid">
            <div className="cr-left">
              <div className="cr-card-stack">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`cr-card-layer ${index === activeIndex ? 'active' : ''}`}
                    style={{ zIndex: index === activeIndex ? 10 : 1 }}
                  >
                    <div className="cr-card">
                      {feature.img ? (
                        <ComparisonSlider img={feature.img} video={feature.video} />
                      ) : (
                        <div className="cr-img-placeholder" style={{ background: feature.gradient }}>
                          <span className="placeholder-number">{index + 1}</span>
                          <span className="placeholder-text">{feature.title}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation Buttons */}
              <button className="cr-nav-btn cr-nav-prev" onClick={handlePrev} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="cr-nav-btn cr-nav-next" onClick={handleNext} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="cr-right">
              <div className="cr-progress" aria-hidden="true">
                <div
                  className="cr-progress-fill"
                  style={{
                    transform: `translateX(${activeIndex * 100}%)`,
                    width: `${100 / features.length}%`
                  }}
                />
              </div>

              <div className="cr-content-display">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`cr-text-group ${index === activeIndex ? 'active' : ''}`}
                  >
                    <div className="cr-r-title">
                      {feature.titleLines ? (
                        feature.titleLines.map((line, i) => (
                          <p key={i} className="text-2xl">{line}</p>
                        ))
                      ) : (
                        <p className="text-2xl">{feature.title}</p>
                      )}
                    </div>
                    <div className="cr-r-desc">
                      {feature.desc.map((line, i) => (
                        <span key={i} className="cr-r-desc-line">{line}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button className="cr-try-btn group relative overflow-hidden" type="button" aria-label="Try it now" onClick={openForm}>
                <span className="relative z-10">✦</span>
                <span className="relative z-10 block overflow-hidden">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    Try It Now
                  </span>
                  <span className="absolute inset-0 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                    Try It Now
                  </span>
                </span>
                <span className="relative z-10">✦</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cr-triggers">
        {features.map((_, index) => (
          <div
            key={index}
            ref={(el) => (triggerRefs.current[index] = el)}
            data-index={index}
            className="cr-scroll-trigger"
          />
        ))}
      </div>

      <style>{`
        .cr-scroll-track {
          position: relative;
          width: 100%;
          min-height: 400vh;
          background: #000;
        }

        .cr-sticky-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cr-triggers {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .cr-scroll-trigger {
          height: 80vh;
          width: 100%;
        }

        .cr-wrap {
          width: 100%;
          padding: 0 18px;
          max-width: 1280px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }

        .cr-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(880px 380px at 18% 58%, rgba(139, 92, 246, 0.14) 0%, rgba(0, 0, 0, 0) 62%),
            radial-gradient(900px 420px at 70% 35%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: -1;
        }

        .cr-head {
          text-align: center;
          margin-top: 0px;
          margin-bottom: 40px;
          transition: opacity 0.3s;
        }

        .cr-title {
          font-size: 40px !important;
          font-weight: 800;
          letter-spacing: 0.5px !important;
          color: #f3f3f6;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0 10px;
          line-height: 1.15;
          max-width: 1000px;
          margin: 0 auto;
        }

        .cr-title span {
          display: inline-block;
        }

        .cr-sub {
          margin-top: 12px;
          font-size: 21px !important;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          opacity: 0.8;
          max-width: 850px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 500;
          letter-spacing: 0.5px !important;
        }

        .cr-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .cr-left {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .cr-card-stack {
           position: relative;
           width: 100%;
           max-width: 520px;
           max-height: 55vh;
           aspect-ratio: 1/1;
           margin: 0 auto;
        }

        .cr-card-layer {
           position: absolute;
           inset: 0;
           width: 100%;
           height: 100%;
           opacity: 0;
           transform: scale(0.95) translateY(20px);
           transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cr-card-layer.active {
           opacity: 1;
           transform: scale(1) translateY(0);
           pointer-events: auto;
        }
        
        .cr-card-layer:not(.active) {
            pointer-events: none;
        }

        .cr-card {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.85);
          position: relative;
        }

        .cr-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(90% 80% at 50% 35%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 55%);
          pointer-events: none;
          z-index: 2;
        }

        /* Comparison Slider Styles */
        .cr-compare-container {
           position: relative;
           width: 100%;
           height: 100%;
           cursor: ew-resize;
           user-select: none;
           touch-action: pan-y;
        }

        .cr-compare-img {
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           object-fit: cover;
           object-position: top center;
           pointer-events: none;
        }

        .cr-img-bw {
           filter: grayscale(100%);
        }

        .cr-img-color {
           z-index: 10;
        }

        .cr-compare-line {
           position: absolute;
           top: 0;
           bottom: 0;
           width: 2px;
           background: #fff;
           z-index: 20;
           box-shadow: 0 0 10px rgba(0,0,0,0.3);
           pointer-events: none;
           transform: translateX(-50%);
        }
        
        .cr-compare-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 44px;
            height: 44px;
            /* Gradient matching reference: Purple/Pink mix */
            background: #fff;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
            z-index: 25;
        }

        /* ========================================
           NAVIGATION BUTTONS (Mobile Only)
        ======================================== */
        .cr-nav-btn {
          display: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          background: transparent;
          border: 1.5px solid #8b5cf6;
          border-radius: 50%;
          cursor: pointer;
          z-index: 20;
          transition: all 0.3s ease;
          color: #8b5cf6;
        }

        .cr-nav-btn:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: #a78bfa;
          color: #a78bfa;
          transform: translateY(-50%) scale(1.1);
        }

        .cr-nav-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        .cr-nav-prev {
          left: -60px;
        }

        .cr-nav-next {
          right: -60px;
        }

        .cr-right {
          max-width: 520px;
        }

        .cr-progress {
          width: 100%;
          height: 4px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.16);
          overflow: hidden;
          margin-bottom: 30px;
        }

        .cr-progress-fill {
          height: 100%;
          background: #8b5cf6;
          border-radius: 999px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cr-content-display {
           position: relative;
           min-height: 150px;
           display: grid;
           grid-template-columns: 1fr;
        }

        .cr-text-group {
           grid-area: 1 / 1;
           opacity: 0;
           transform: translateY(10px);
           pointer-events: none;
           transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .cr-text-group.active {
           opacity: 1;
           transform: translateY(0);
           pointer-events: auto;
           position: relative;
        }
        
        .cr-r-title {
          font-size: 21px !important;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 0 8px;
        }

        .cr-r-title-line {
          display: inline-block;
        }

        .cr-r-desc {
          font-size: 18px !important;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
        }

        .cr-r-desc-line {
          display: block;
        }

        .cr-try-btn {
          margin-top: 30px;
          border: 0;
          background: #fff;
          color: #000;
          padding: 14px 28px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          transition: transform 0.2s, filter 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
          font-weight: 700;
        }

        .cr-try-btn:hover {
          box-shadow: 0 6px 28px rgba(255, 255, 255, 0.25);
        }

        .cr-btn-star {
          font-size: 14px;
          color: #fff;
        }

        .cr-btn-text {
          font-size: 14px;
          font-weight: 700;
          color: inherit;
          letter-spacing: 0.3px;
        }

        /* ========================================
           RESPONSIVE - Tablet (max-width: 980px)
        ======================================== */
        @media (max-width: 980px) {
          .cr-scroll-track {
            min-height: auto;
          }

          .cr-sticky-viewport {
            position: relative;
            height: auto;
            padding: 10px 0 20px;
            top: 0;
            display: block;
          }

          .cr-triggers {
            display: none;
          }

          .cr-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }

          .cr-left {
            order: 0;
          }

          .cr-right {
            order: 1;
            margin: 0 auto;
          }

          .cr-text-group {
            transform: none;
          }

          .cr-text-group.active {
            opacity: 1;
            transform: none;
          }

          /* Show navigation buttons on tablet */
          .cr-nav-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
          }

          .cr-nav-prev {
            left: 8px;
          }

          .cr-nav-next {
            right: 8px;
          }
        }

        /* ========================================
           RESPONSIVE - Tablet/Mobile (max-width: 768px)
        ======================================== */
        @media (max-width: 768px) {
          .cr-title {
            font-size: 25px !important;
          }

          .cr-sub {
            font-size: 18px !important;
          }

          .cr-r-title {
            font-size: 16px !important;
          }

          .cr-r-desc {
            font-size: 16px !important;
          }
        }

        /* ========================================
           RESPONSIVE - Mobile (max-width: 680px)
        ======================================== */
        @media (max-width: 680px) {
          .cr-wrap {
            padding: 0 16px;
          }

          .cr-head {
            margin-top: 0px;
            margin-bottom: 40px;
          }

          .cr-title {
            /* Handled in 768px query */
            line-height: 1.2;
            flex-direction: row;
            gap: 0 8px;
            max-width: 90%;
            margin: 0 auto;
          }

          .cr-title span {
            display: inline-block;
          }

          .cr-sub {
            /* Handled in 768px query */
            line-height: 1.55;
            margin-top: 16px;
            padding: 0 10px;
            opacity: 0.8;
            max-width: 100%;
          }

          .cr-sub br {
            display: none;
          }

          .cr-grid {
            gap: 28px;
          }

          .cr-card-stack {
            max-width: 100%;
            aspect-ratio: 4/3;
          }

          .cr-card {
            border-radius: 14px;
          }

          .cr-compare-button {
            width: 40px;
            height: 40px;
          }

          .cr-compare-button svg {
            width: 20px;
            height: 20px;
          }

          .cr-nav-btn {
            width: 36px;
            height: 36px;
          }

          .cr-right {
            max-width: 100%;
            width: 100%;
            text-align: center;
            padding: 0 4px;
            overflow: hidden;
          }

          .cr-progress {
            height: 5px;
            margin-bottom: 20px;
          }

          .cr-content-display {
            min-height: auto;
            width: 100%;
            overflow: hidden;
          }

          .cr-r-title {
            /* Handled in 768px query */
            margin-bottom: 16px;
            font-weight: 800;
            line-height: 1.2;
            flex-direction: column;
            align-items: center;
            gap: 0;
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: auto;
          }

          .cr-r-title-line {
            display: block;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .cr-r-desc {
            font-size: 14px;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.65);
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: auto;
          }

          .cr-r-desc-line {
            display: inline;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .cr-try-btn {
            margin-top: 28px;
            padding: 12px 24px;
          }

          .cr-btn-star {
            font-size: 12px;
          }

          .cr-btn-text {
            font-size: 13px;
          }
        }

        /* ========================================
           RESPONSIVE - Small Mobile (max-width: 480px)
        ======================================== */
        @media (max-width: 480px) {
          .cr-sticky-viewport {
            padding: 80px 0 20px;
          }

          .cr-wrap {
            padding: 0 14px;
          }

          .cr-head {
            margin-top: 0px;
            margin-bottom: 40px;
          }

          .cr-title {
            font-size: 22px;
          }

          .cr-sub {
            font-size: 12px;
            padding: 0 8px;
          }

          .cr-grid {
            gap: 24px;
          }

          .cr-card-stack {
            aspect-ratio: 4/3;
          }

          .cr-card {
            border-radius: 12px;
          }

          .cr-compare-button {
            width: 36px;
            height: 36px;
          }

          .cr-compare-button svg {
            width: 18px;
            height: 18px;
          }

          .cr-nav-btn {
            width: 32px;
            height: 32px;
          }
          
          .cr-nav-btn svg {
            width: 16px;
            height: 16px;
          }

          .cr-nav-prev {
            left: 4px;
          }

          .cr-nav-next {
            right: 4px;
          }

          .cr-progress {
            height: 4px;
            margin-bottom: 16px;
          }

          .cr-r-title {
            font-size: 22px;
            margin-bottom: 14px;
          }

          .cr-r-desc {
            font-size: 13px;
            line-height: 1.55;
          }

          .cr-try-btn {
            margin-top: 24px;
            padding: 11px 22px;
          }

          .cr-btn-star {
            font-size: 11px;
          }

          .cr-btn-text {
            font-size: 12px;
          }
        }

        /* ========================================
           RESPONSIVE - Extra Small (max-width: 360px)
        ======================================== */
        @media (max-width: 360px) {
          .cr-sticky-viewport {
            padding: 80px 0 20px;
          }

          .cr-wrap {
            padding: 0 12px;
          }

          .cr-head {
            margin-top: 0px;
            margin-bottom: 40px;
          }

          .cr-title {
            font-size: 20px;
          }

          .cr-sub {
            font-size: 11px;
            line-height: 1.5;
            padding: 0 4px;
            margin-top: 10px;
          }

          .cr-grid {
            gap: 20px;
          }

          .cr-card {
            border-radius: 10px;
          }

          .cr-compare-button {
            width: 32px;
            height: 32px;
          }

          .cr-compare-button svg {
            width: 16px;
            height: 16px;
          }

          .cr-nav-btn {
            width: 28px;
            height: 28px;
          }

          .cr-nav-btn svg {
            width: 14px;
            height: 14px;
          }

          .cr-nav-prev {
            left: 2px;
          }

          .cr-nav-next {
            right: 2px;
          }

          .cr-progress {
            margin-bottom: 14px;
          }

          .cr-r-title {
            font-size: 20px;
            margin-bottom: 12px;
          }

          .cr-r-desc {
            font-size: 12px;
          }

          .cr-try-btn {
            margin-top: 20px;
            padding: 10px 20px;
          }

          .cr-btn-star {
            font-size: 10px;
          }

          .cr-btn-text {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
