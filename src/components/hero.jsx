// eslint-disable-next-line no-unused-vars
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Import local videos
import v1 from '../assets/images/videos/Cloth 1.gif';
import v2 from '../assets/images/videos/Cloth 2.gif';
import v3 from '../assets/images/videos/Cloth 3.gif';
import v4 from '../assets/images/videos/Cloth 4.gif';
import v5 from '../assets/images/videos/Cloth 5.gif';
import v6 from '../assets/images/videos/Cloth 6.gif';

// Video sources array
const videoSources = [v1, v2, v3, v4, v5, v6];

// Card positions around center - balanced layout (3 top, 3 bottom)
const cardConfigs = [
  // Top side cards
  { x: -500, y: -200, rotate: 0, scale: 0.95 },
  { x: 0, y: -280, rotate: 0, scale: 0.95 },
  { x: 500, y: -200, rotate: 0, scale: 0.95 },
  // Bottom side cards
  { x: -450, y: 150, rotate: 0, scale: 0.92 },
  { x: 0, y: 280, rotate: 0, scale: 0.92 },
  { x: 450, y: 150, rotate: 0, scale: 0.92 },
];

// Desktop Floating Video Card Component
const FloatingVideoCard = ({ src, config, index, randomValues, windowWidth }) => {
  const controls = useAnimationControls();
  const { duration, xAmp, yAmp, rotAmp } = randomValues;

  // Scale X positions for smaller screens to prevent cutoff
  const scaleX = Math.min(1, windowWidth / 1250);
  const adjustedX = config.x * scaleX;

  useEffect(() => {
    const animateSequence = async () => {
      await controls.start({
        x: -adjustedX * 0.15,
        y: -config.y * 0.15,
        rotate: -config.rotate * 0.3,
        scale: 0.5,
        opacity: 0.6,
        transition: {
          type: 'spring',
          stiffness: 120,
          damping: 20,
          mass: 1,
          delay: index * 0.08,
        },
      });

      await controls.start({
        x: adjustedX,
        y: config.y,
        rotate: config.rotate,
        scale: config.scale,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 45,
          damping: 18,
          mass: 1.2,
          delay: 0.05,
        },
      });

      controls.start({
        x: [adjustedX - xAmp, adjustedX + xAmp, adjustedX - xAmp],
        y: [config.y - yAmp, config.y + yAmp, config.y - yAmp],
        rotate: [config.rotate - rotAmp, config.rotate + rotAmp, config.rotate - rotAmp],
        transition: {
          x: { duration, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: duration * 1.2, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: duration * 1.4, repeat: Infinity, ease: 'easeInOut' },
        },
      });
    };

    animateSequence();
  }, [controls, config, index, duration, xAmp, yAmp, rotAmp, adjustedX]);

  return (
    <motion.div
      className="floating-card"
      initial={{ x: 0, y: 0, scale: 0.65, opacity: 0, rotate: 0 }}
      animate={controls}
      whileHover={{
        rotate: 0,
        zIndex: 100,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transition: { duration: 0.22 },
      }}
    >
      {src.includes('.gif') ? (
        <img src={src} className="card-video" alt="" />
      ) : (
        <video src={src} autoPlay muted loop playsInline className="card-video" />
      )}
    </motion.div>
  );
};

// Mobile Video Card - plays only when active
const MobileVideoCard = ({ src, isActive, index, cardRef }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (src.includes('.gif')) return;
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, src]);

  return (
    <motion.div
      ref={cardRef}
      className={`mobile-card ${isActive ? 'active' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {src.includes('.gif') ? (
        <img src={src} className="mobile-card-video" alt="" />
      ) : (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          className="mobile-card-video"
        />
      )}
      {isActive && <div className="active-indicator" />}
    </motion.div>
  );
};

// Hero Content Variants
const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0 },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Main Hero Component
export default function FloatingVideoHero({ openForm }) {
  const contentControls = useAnimationControls();
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Check if mobile and update width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-cycle videos on mobile (one by one)
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % videoSources.length);
    }, 3000); // Change video every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  // Auto-scroll to center active video
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current || !cardRefs.current[activeVideoIndex]) return;

    const container = scrollContainerRef.current;
    const activeCard = cardRefs.current[activeVideoIndex];
    const containerWidth = container.offsetWidth;
    const cardLeft = activeCard.offsetLeft;
    const cardWidth = activeCard.offsetWidth;

    // Scroll to center the active card
    const scrollTo = cardLeft - (containerWidth / 2) + (cardWidth / 2);
    container.scrollTo({ left: scrollTo, behavior: 'smooth' });
  }, [activeVideoIndex, isMobile]);

  // Generate random values for desktop floating - initialized once on mount
  const [randomValues] = useState(() =>
    cardConfigs.map(() => ({
      duration: 4 + Math.random() * 3,
      xAmp: 8 + Math.random() * 17,
      yAmp: 10 + Math.random() * 20,
      rotAmp: 2 + Math.random() * 4,
    }))
  );

  // Content entry animation
  useEffect(() => {
    const timer = setTimeout(() => {
      contentControls.start('visible');
    }, isMobile ? 500 : 1500);
    return () => clearTimeout(timer);
  }, [contentControls, isMobile]);

  return (
    <section className={`hero-section ${isMobile ? 'mobile' : ''}`}>
      {/* Desktop: Floating Cards */}
      {!isMobile && (
        <div className="cards-container">
          {videoSources.map((src, index) => (
            <FloatingVideoCard
              key={index}
              src={src}
              config={cardConfigs[index]}
              index={index}
              randomValues={randomValues[index]}
              windowWidth={windowWidth}
            />
          ))}
        </div>
      )}

      {/* Center Content */}
      <motion.div
        className="hero-content"
        variants={contentContainerVariants}
        initial="hidden"
        animate={contentControls}
      >
        <motion.h1 className="hero-heading" variants={contentItemVariants}>
          India's 1st Premium AI-Powered Image & Video Production Services
        </motion.h1>

        <motion.p className="hero-subheading" variants={contentItemVariants}>
          70% Cost reduction, 10x faster  no studios or crews required.
        </motion.p>

        <motion.button
          className="hero-button group relative overflow-hidden"
          variants={contentItemVariants}
          whileTap={{ scale: 0.95 }}
          onClick={openForm}
        >
          <span className="relative block overflow-hidden">
            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
              Talk to Our Expert
            </span>
            <span className="absolute inset-0 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
              Talk to Our Expert
            </span>
          </span>
        </motion.button>
      </motion.div>

      {/* Mobile: Horizontal Video Row */}
      {isMobile && (
        <div className="mobile-videos-container">
          <div className="mobile-videos-row" ref={scrollContainerRef}>
            {videoSources.map((src, index) => (
              <MobileVideoCard
                key={index}
                src={src}
                isActive={activeVideoIndex === index}
                index={index}
                cardRef={(el) => (cardRefs.current[index] = el)}
              />
            ))}
          </div>
          {/* Progress dots */}
          <div className="progress-dots">
            {videoSources.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeVideoIndex === index ? 'active' : ''}`}
                onClick={() => setActiveVideoIndex(index)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,400;1,500&display=swap');

        .hero-section {
          position: relative;
          min-height: 110vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          padding: 0;
        }

        .hero-section.mobile {
          flex-direction: column;
          justify-content: center; 
          gap: 0; 
        }

        .hero-button {
          background: #ffffff;
          color: #000000;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.15);
        }

        .hero-button:hover {
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.25);
        }

        /* Mobile Layout */
        .hero-section.mobile {
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 80px;
          gap: 20px;
          min-height: auto;
          padding-bottom: 40px;
        }

        /* Cards Container - Desktop */
        .cards-container {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 0;
        }

        /* Floating Card - Desktop */
        .floating-card {
          position: absolute;
          width: 165px;
          height: 282px;
          border-radius: 16px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 15px 50px -5px rgba(0, 0, 0, 0.5), 0 0 30px rgba(100, 100, 255, 0.1);
          cursor: pointer;
          transition: box-shadow 0.22s ease;
        }

        .card-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transform: scale(1.01);
        }

        /* Hero Content */
        .hero-content {
          position: relative;
          z-index: 50;
          text-align: center;
          max-width: 600px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .hero-heading {
          font-family: 'Inter', sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: 0.5px !important;
          margin: 0;
        }

        .heading-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
        }

        .hero-subheading {
          font-family: 'Inter', sans-serif;
          font-size: 21px !important;
          font-weight: 500;
          color: #9ca3af;
          line-height: 1.6;
          letter-spacing: 0.5px !important;
          margin: 0;
          max-width: 480px;
        }

        /* Mobile Videos Container */
        .mobile-videos-container {
          width: 100%;
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .mobile-videos-row {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 0px 0;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          width: 100%;
          justify-content: flex-start;
        }

        .mobile-videos-row::-webkit-scrollbar {
          display: none;
        }

        .mobile-card {
          flex-shrink: 0;
          width: 165px;
          height: 282px;
          border-radius: 12px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          scroll-snap-align: center;
          position: relative;
          opacity: 0.5;
          transform: scale(0.9);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-card.active {
          opacity: 1;
          transform: scale(1);
          box-shadow: 0 12px 35px rgba(100, 100, 255, 0.3), 0 0 20px rgba(100, 100, 255, 0.2);
        }

        .mobile-card-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .active-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          animation: progress 3s linear forwards;
        }

        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }

        /* Progress Dots */
        .progress-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #6366f1;
          width: 24px;
          border-radius: 4px;
        }

        /* Responsive - Tablet */
        @media (max-width: 1024px) {
          .floating-card {
            width: 165px;
            height: 282px;
          }
        }

        /* Responsive - Mobile */
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 25px !important;
            padding: 0 20px;
          }
          .hero-subheading {
            font-size: 18px !important;
            padding: 0 20px;
          }
          .hero-content {
            padding: 5rem 2rem 5rem 2rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .hero-section.mobile {
            padding-top: 60px;
            gap: 30px;
          }
          .hero-heading {
            font-size: 24px;
          }
          .mobile-card {
            width: 165px;
            height: 282px;
          }
        }
      `}</style>
    </section>
  );
}