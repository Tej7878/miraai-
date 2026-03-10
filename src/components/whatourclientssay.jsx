import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Whatourclientssay() {
  const [currentIndex, setCurrentIndex] = useState(3); // Start at the first real item (index 3)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const trackRef = useRef(null);
  const dragStateRef = useRef({ startX: 0, moved: false });
  const wheelStateRef = useRef({ lastTs: 0 });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "“Miraai transformed our content production process. We went from spending ₹25 lakh on regional campaigns to ₹1 lakh-with better results. Our internal team now manages everything without vendor dependencies. This is a game-changer for enterprise marketing.”",
      role: "Marketing Director",
      brand: "FMCG Brand"
    },
    {
      id: 2,
      quote: "“Our agency can now take on 5x more clients without hiring additional editors or production staff. Miraai handles the heavy lifting while our creatives focus on strategy and storytelling. ROI has been incredible.”",
      role: "Creative Lead",
      brand: "Ad Agency"
    },
    {
      id: 3,
      quote: "“The scale at which we can now iterate on our video ads is mind-blowing. What used to take a week of back-and-forth now happens in a single afternoon. Miraai's AI understands our brand voice perfectly.”",
      role: "Brand Manager",
      brand: "E-commerce Giant"
    },
    {
      id: 4,
      quote: "“Miraai has democratized high-quality video production for us. Even our junior designers can now create stunning visual assets that look like they were made by a top-tier production house. Outstanding technology.”",
      role: "Head of Marketing",
      brand: "Fintech Startup"
    },
    {
      id: 5,
      quote: "“We've seen a 40% increase in social engagement since we started using Miraai for our daily content. The ability to localize our message instantly across 10 regions has been a massive competitive advantage.”",
      role: "Digital Strategist",
      brand: "Global Fashion Retailer"
    }
  ];

  // Create Clones for Infinite Loop
  // Clone last 3 to start, first 3 to end
  const extendedTestimonials = [
    ...testimonials.slice(-3),
    ...testimonials,
    ...testimonials.slice(0, 3)
  ];

  const nextSlide = () => {
    if (currentIndex >= extendedTestimonials.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // If we reached the end clones (index 8 or 9 or 10), jump to start real items (index 3 or 4 or 5)
    if (currentIndex >= testimonials.length + 3) {
      setCurrentIndex(currentIndex - testimonials.length);
    }
    // If we reached the start clones (index 0, 1, 2), jump to end real items
    else if (currentIndex < 3) {
      setCurrentIndex(currentIndex + testimonials.length);
    }
  };

  const getTransform = () => {
    // Desktop: 33.333% width + 10px part of gap (total gap 30px)
    if (windowWidth > 980) {
      return `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 10}px))`;
    }
    // Tablet (<= 980): 100% width + 30px gap
    if (windowWidth > 680) {
      return `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 30}px))`;
    }
    // Mobile (<= 680): 100% width + 24px gap
    return `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 24}px))`;
  };

  return (
    <section className="wcs-wrap tracking-[0.5px]" ref={sectionRef}>
      <div className="wcs-inner">
        <motion.div
          className="wcs-head"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="wcs-title tracking-[0.5px]">What Our Clients Say</div>
          <div className="text-[18px] text-[#ffffffb3] tracking-[0.5px]">
            Trusted By Forward-Thinking Teams For Reliable, Intelligent, And
            <br />
            High-Impact Creative Production.
          </div>
        </motion.div>

        <motion.div
          className="wcs-stage"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div
            className={`wcs-viewport ${isDragging ? 'dragging' : ''}`}
            onWheel={(e) => {
              const now = Date.now();
              if (now - wheelStateRef.current.lastTs < 450) return;

              const dy = e.deltaY;
              const dx = e.deltaX;
              const primary = Math.abs(dx) > Math.abs(dy) ? dx : dy;
              if (Math.abs(primary) < 8) return;

              wheelStateRef.current.lastTs = now;
              e.preventDefault();
              if (primary > 0) nextSlide();
              else prevSlide();
            }}
            onTouchStart={(e) => {
              const t = e.touches?.[0];
              if (!t) return;
              dragStateRef.current = {
                startX: t.pageX,
                startY: t.pageY,
                moved: false,
                isHorizontal: null,
              };
              setIsDragging(true);
            }}
            onTouchMove={(e) => {
              const t = e.touches?.[0];
              if (!t) return;

              const startX = dragStateRef.current.startX;
              const startY = dragStateRef.current.startY;
              const dx = t.pageX - startX;
              const dy = t.pageY - startY;

              if (dragStateRef.current.isHorizontal === null) {
                if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
                dragStateRef.current.isHorizontal = Math.abs(dx) > Math.abs(dy);
              }

              if (dragStateRef.current.isHorizontal) {
                e.preventDefault();
                if (Math.abs(dx) > 10) dragStateRef.current.moved = true;
              }
            }}
            onTouchEnd={(e) => {
              const t = e.changedTouches?.[0];
              setIsDragging(false);
              if (!t) return;

              const dx = t.pageX - dragStateRef.current.startX;
              if (!dragStateRef.current.moved) return;
              if (Math.abs(dx) < 50) return;
              if (dx < 0) nextSlide();
              else prevSlide();
            }}
            onMouseDown={(e) => {
              dragStateRef.current = { startX: e.pageX, moved: false };
              setIsDragging(true);
            }}
            onMouseMove={(e) => {
              if (!isDragging) return;
              const dx = e.pageX - dragStateRef.current.startX;
              if (Math.abs(dx) > 6) dragStateRef.current.moved = true;
            }}
            onMouseUp={(e) => {
              const dx = e.pageX - dragStateRef.current.startX;
              setIsDragging(false);
              if (!dragStateRef.current.moved) return;
              if (Math.abs(dx) < 50) return;
              if (dx < 0) nextSlide();
              else prevSlide();
            }}
            onMouseLeave={() => {
              setIsDragging(false);
            }}
          >
            <div
              className="wcs-track"
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: getTransform(),
                transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
              }}
            >
              {extendedTestimonials.map((t, index) => (
                <article key={`${index}-${t.id}`} className="wcs-card">
                  <div className="wcs-quote">{t.quote}</div>
                  <div className="wcs-role">{t.role}</div>
                  <div className="wcs-brand">{t.brand}</div>
                </article>
              ))}
            </div>
          </div>

          <div className="wcs-nav">
            <button
              className="wcs-nav-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="wcs-nav-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .wcs-wrap {
          width: 100%;
          padding: 40px 18px 40px;
          background: #000;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .wcs-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(760px 520px at 42% 30%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 62%),
            radial-gradient(780px 520px at 75% 70%, rgba(139, 92, 246, 0.08) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: 0;
        }

        .wcs-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .wcs-head {
          text-align: center;
          margin-bottom: 40px;
        }

        .wcs-title {
          font-size: 40px !important;
          font-weight: 800;
          letter-spacing: 0.5px !important;
          color: #f3f3f6;
          line-height: 1.15;
          max-width: 1000px;
          margin: 0 auto 12px auto;
        }

        .wcs-sub {
          margin-top: 24px;
          font-size: 18px;
          color: #ffffffb3;
          font-weight: 500;
          max-width: 850px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.8;
          line-height: 1.6;
          letter-spacing: 0.5px !important;
        }

        .wcs-stage {
          position: relative;
          width: 100%;
        }

        .wcs-viewport {
          width: 100%;
          overflow: hidden;
          padding: 10px 10px;
          box-sizing: border-box;
          cursor: grab;
          user-select: none;
          touch-action: pan-y;
        }

        .wcs-viewport.dragging {
          cursor: grabbing;
        }

        .wcs-track {
          display: flex;
          gap: 30px;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .wcs-card {
          flex: 0 0 calc(33.333% - 20px);
          background: rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 32px 34px 28px;
          box-shadow: 0 26px 90px rgba(0, 0, 0, 0.86);
          min-height: 220px;
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.06);
          transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      border 300ms ease,
                      box-shadow 300ms ease;
        }

        .wcs-card:hover {
          transform: scale(1.02);
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.9);
        }

        .wcs-quote {
          position: relative;
          z-index: 1;
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.75);
          text-align: center;
        }

        .wcs-role {
          position: relative;
          z-index: 1;
          margin-top: 24px;
          font-size: 13px;
          font-weight: 700;
          color: #a78bfa;
          text-align: center;
        }

        .wcs-brand {
          position: relative;
          z-index: 1;
          margin-top: 6px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
        }

        .wcs-nav {
          position: absolute;
          right: 0;
          bottom: -40px; /* Moved further down */
          display: flex;
          gap: 12px;
          z-index: 20;
        }

        .wcs-nav-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: transparent;
          border: 2px solid #2d1b54;
          color: #7c3aed;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .wcs-nav-btn:hover:not(.disabled) {
          border-color: #7c3aed;
          background: rgba(124, 58, 237, 0.1);
        }

        .wcs-nav-btn.disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }

        .wcs-nav-btn svg {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 980px) {
          .wcs-track {
            gap: 30px;
          }

          .wcs-card {
            flex: 0 0 100%;
          }

          .wcs-nav {
            position: relative;
            bottom: 0;
            margin-top: 24px;
            justify-content: center;
          }
        }

        /* ========================================
           RESPONSIVE - Mobile (max-width: 680px)
        ======================================== */
        @media (max-width: 680px) {
          .wcs-wrap {
            padding: 40px 16px 40px;
          }

          .wcs-head {
            margin-bottom: 40px;
          }

          .wcs-title {
            font-size: 25px !important;
            font-weight: 800;
            line-height: 1.2;
            max-width: 100%;
            margin: 0 auto;
          }

          .wcs-sub {
            font-size: 18px !important;
            line-height: 1.5;
            margin-top: 16px;
            opacity: 0.8;
            max-width: 100%;
          }

          .wcs-sub br {
            display: none;
          }

          .wcs-viewport {
            padding: 30px 24px;
          }

          .wcs-track {
            gap: 24px;
          }

          .wcs-card {
            padding: 28px 24px 24px;
            min-height: auto;
            border-radius: 16px;
          }

          .wcs-quote {
            font-size: 14px;
            line-height: 1.65;
          }

          .wcs-role {
            margin-top: 20px;
            font-size: 14px;
          }

          .wcs-brand {
            font-size: 12px;
            margin-top: 4px;
          }

          .wcs-nav {
            margin-top: 30px;
          }

          .wcs-nav-btn {
            width: 40px;
            height: 40px;
          }

          .wcs-nav-btn svg {
            width: 18px;
            height: 18px;
          }
        }

        /* ========================================
           RESPONSIVE - Small Mobile (max-width: 480px)
        ======================================== */
        @media (max-width: 480px) {
          .wcs-wrap {
            padding: 40px 14px 40px;
          }

          .wcs-head {
            margin-bottom: 36px;
          }

          .wcs-title {
            font-size: 25px !important;
          }

          .wcs-sub {
            font-size: 18px !important;
            padding: 0 8px;
          }

          .wcs-card {
            padding: 24px 20px 20px;
            border-radius: 14px;
          }

          .wcs-quote {
            font-size: 13px;
            line-height: 1.6;
          }

          .wcs-role {
            margin-top: 18px;
            font-size: 13px;
          }

          .wcs-brand {
            font-size: 11px;
          }

          .wcs-nav-btn {
            width: 38px;
            height: 38px;
          }

          .wcs-nav-btn svg {
            width: 17px;
            height: 17px;
          }
        }

        /* ========================================
           RESPONSIVE - Extra Small (max-width: 360px)
        ======================================== */
        @media (max-width: 360px) {
          .wcs-wrap {
            padding: 40px 12px 40px;
          }

          .wcs-head {
            margin-bottom: 32px;
          }

          .wcs-title {
            font-size: 25px !important;
          }

          .wcs-sub {
            font-size: 18px !important;
            line-height: 1.55;
            padding: 0 4px;
            margin-top: 12px;
          }

          .wcs-viewport {
            padding: 30px 20px;
          }

          .wcs-card {
            padding: 22px 18px 18px;
            border-radius: 12px;
          }

          .wcs-quote {
            font-size: 12px;
            line-height: 1.55;
          }

          .wcs-role {
            margin-top: 16px;
            font-size: 12px;
          }

          .wcs-brand {
            font-size: 10px;
          }

          .wcs-nav {
            margin-top: 24px;
            gap: 10px;
          }

          .wcs-nav-btn {
            width: 36px;
            height: 36px;
          }

          .wcs-nav-btn svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </section>
  );
}
