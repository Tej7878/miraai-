import React from 'react';
import boxMiraaiImg from '../assets/images/Boxmirrai.webp';

export default function BusinessesChooseMiraai() {
  const benefits = [
    { id: 1, text: "Consistent Output Quality", position: "top-left" },
    { id: 2, text: "Easy Scalability", position: "middle-left" },
    { id: 3, text: "Dedicated Support Team", position: "bottom-left" },
    { id: 4, text: "Up To 70% Cost Reduction", position: "top-right" },
    { id: 5, text: "10x Faster Production Cycles", position: "middle-right" },
    { id: 6, text: "No Studio Dependency", position: "bottom-right" }
  ];

  // ════════════════════════════════════════════════════════════════════════════
  // BI-DIRECTIONAL CLOSED-LOOP PATH DEFINITIONS
  // Flow: Center → Bezier → Box Edge → Border Trace → Return Bezier → Center
  // Each path starts and ends at the SAME coordinates for seamless infinite loop
  // ════════════════════════════════════════════════════════════════════════════
  // Arc syntax: A rx ry x-axis-rotation large-arc-flag sweep-flag x y
  // Box border-radius: 16px (rx=ry=16)
  //
  // Starting coordinates (center circle edge):
  // - Left paths start at (440, 240/300/360)
  // - Right paths start at (560, 240/300/360)

  const paths = [
    // ═══════════════════════════════════════════════════════════════
    // PATH 1: Top-left box - CLOSED LOOP
    // Start: (440, 240) → Box → Border → Return → (440, 240)
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'path1',
      d: `M 436 241
          C 400 200 350 160 294 125
          L 294 114
          A 16 16 0 0 0 278 98
          L 60 98
          A 16 16 0 0 0 44 114
          L 44 136
          A 16 16 0 0 0 60 152
          L 278 152
          A 16 16 0 0 0 294 136
          L 294 125
          C 350 160 400 200 436 241`,
      delay: '0s',
      duration: '3s'
    },

    // ═══════════════════════════════════════════════════════════════
    // PATH 2: Top-right box - CLOSED LOOP
    // Start: (560, 240) → Box → Border → Return → (560, 240)
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'path2',
      d: `M 564 241
          C 600 200 650 160 706 125
          L 706 114
          A 16 16 0 0 1 722 98
          L 940 98
          A 16 16 0 0 1 956 114
          L 956 136
          A 16 16 0 0 1 940 152
          L 722 152
          A 16 16 0 0 1 706 136
          L 706 125
          C 650 160 600 200 564 241`,
      delay: '0s',
      duration: '3s'
    },

    // ═══════════════════════════════════════════════════════════════
    // PATH 3: Middle-left box - CLOSED LOOP
    // Start: (425, 300) → Box → Border → Return → (425, 300)
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'path3',
      d: `M 425 280
          C 380 280 340 280 264 279
          L 264 271
          A 16 16 0 0 0 248 255
          L 60 255
          A 16 16 0 0 0 44 271
          L 44 287
          A 16 16 0 0 0 60 303
          L 248 303
          A 16 16 0 0 0 264 287
          L 264 279
          C 340 280 380 280 425 280`,
      delay: '0s',
      duration: '3s'
    },

    // ═══════════════════════════════════════════════════════════════
    // PATH 4: Middle-right box - CLOSED LOOP
    // Start: (575, 300) → Box → Border → Return → (575, 300)
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'path4',
      d: `M 575 280
          C 620 280 660 280 706 282
          L 706 271
          A 16 16 0 0 1 722 255
          L 940 255
          A 16 16 0 0 1 956 271
          L 956 293
          A 16 16 0 0 1 940 309
          L 722 309
          A 16 16 0 0 1 706 293
          L 706 282
          C 660 280 620 280 575 280`,
      delay: '0s',
      duration: '3s'
    },

    // ═══════════════════════════════════════════════════════════════
    // PATH 5: Bottom-left box - CLOSED LOOP
    // Start: (440, 360) → Box → Border → Return → (440, 360)
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'path5',
      d: `M 436 319
          C 400 350 350 400 294 439
          L 294 428
          A 16 16 0 0 0 278 412
          L 60 412
          A 16 16 0 0 0 44 428
          L 44 450
          A 16 16 0 0 0 60 466
          L 278 466
          A 16 16 0 0 0 294 450
          L 294 439
          C 350 400 400 350 436 319`,
      delay: '0s',
      duration: '3s'
    },

    // ═══════════════════════════════════════════════════════════════
    // PATH 6: Bottom-right box - CLOSED LOOP
    // Start: (560, 360) → Box → Border → Return → (560, 360)
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'path6',
      d: `M 564 319
          C 600 350 650 400 706 439
          L 706 428
          A 16 16 0 0 1 722 412
          L 940 412
          A 16 16 0 0 1 956 428
          L 956 450
          A 16 16 0 0 1 940 466
          L 722 466
          A 16 16 0 0 1 706 450
          L 706 439
          C 650 400 600 350 564 319`,
      delay: '0s',
      duration: '3s'
    }
  ];

  return (
    <section className="bcm-wrap tracking-[0.5px]">
      <div className="bcm-header">
        <div className="bcm-title tracking-[0.5px]">Why Smart Businesses Choose <span className='bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent font-semibold'> Miraai </span>?</div>
        <div className="bcm-subtitle tracking-[0.5px]">Because smart businesses choose results, not experiments.</div>
      </div>

      <div className="bcm-container">
        {/* Connection Lines with Energy Flow Pulse */}
        <svg className="bcm-lines" viewBox="0 0 1000 500">
          <defs>
            {/* Base Line Gradient */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>

            {/* Pulse Glow Gradient */}
            <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#C4B5FD" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>

            {/* Base Line Glow Filter */}
            <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Pulse Glow Filter - Brighter */}
            <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Render Base Paths + Pulse Paths */}
          {paths.map((path) => (
            <g key={path.id}>
              {/* Base Path - Dim background line */}
              <path
                d={path.d}
                stroke="url(#lineGradient)"
                strokeWidth="1.6"
                fill="none"
                opacity="0.38"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="100"
              />

              {/* Pulse Path - Traveling light effect with border tracing */}
              <path
                className="bcm-pulse-path"
                d={path.d}
                stroke="#A78BFA"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="100"
                style={{
                  animationDelay: path.delay,
                  animationDuration: path.duration
                }}
              />
            </g>
          ))}
        </svg>

        {/* Center Design */}
        <div className="bcm-center">
          <div className="bcm-circle">
            <div className="bcm-circle-inner">
              <img src={boxMiraaiImg} alt="" className="bcm-center-img" />
            </div>
          </div>
        </div>

        {/* Benefit Boxes */}
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className={`bcm-box bcm-box-${benefit.position}`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <div className="bcm-box-content">
              {benefit.text}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .bcm-wrap {
          width: 100%;
          padding: 40px 18px 40px;
          background: #000;
          color: #e9e9ee;
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .bcm-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(650px 260px at 50% 52%, rgba(124, 58, 237, 0.22) 0%, rgba(124, 58, 237, 0.06) 35%, rgba(0, 0, 0, 0) 70%),
            radial-gradient(900px 520px at 50% 50%, rgba(255, 255, 255, 0.04) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: 0;
        }

        .bcm-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .bcm-title {
          font-size: 40px !important;
          font-weight: 800;
          color: #f3f3f6;
          letter-spacing: 0.5px !important;
          line-height: 1.15;
          max-width: 90%;
          margin: 0 auto;
          margin-bottom: 12px;
        }

        .bcm-subtitle {
          font-size: 21px !important;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 100;
          max-width: 80%;
          margin: 0 auto;
          opacity: 0.8;
          line-height: 1.6;
          letter-spacing: 0.5px !important;
        }

        .bcm-container {
          position: relative;
          max-width: 1000px;
          height: 500px;
          margin: 0 auto;
          z-index: 1;
        }

        .bcm-center {
          position: absolute;
          top: 56%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .bcm-circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.98);
          border: 2px solid rgba(255, 255, 255, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          position: relative;
          box-shadow:
            0 22px 70px rgba(0, 0, 0, 0.85),
            0 0 0 5px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.08);
          animation: breathe 3s ease-in-out infinite;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* Breathing Animation for Center Circle */
        @keyframes breathe {
          0%, 100% {
            transform: scale(1) translateZ(0);
            box-shadow:
              0 22px 70px rgba(0, 0, 0, 0.85),
              0 0 0 5px rgba(0, 0, 0, 0.45),
              0 0 0 1px rgba(255, 255, 255, 0.08),
              0 0 40px rgba(139, 92, 246, 0.3);
          }
          50% {
            transform: scale(1.03) translateZ(0);
            box-shadow:
              0 26px 80px rgba(0, 0, 0, 0.9),
              0 0 0 6px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.12),
              0 0 60px rgba(139, 92, 246, 0.5);
          }
        }

        .bcm-circle::before {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.22);
          pointer-events: none;
        }

        .bcm-circle::after {
          content: '';
          position: absolute;
          inset: -20px;
          border-radius: 999px;
          background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.26) 0%, rgba(139, 92, 246, 0) 62%);
          filter: blur(2px);
          pointer-events: none;
        }

        .bcm-circle-inner {
          width: 138px;
          height: 138px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.35);
        }

        .bcm-center-img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          filter: brightness(1.08) contrast(1.06) drop-shadow(0 12px 20px rgba(0, 0, 0, 0.5));
        }

        .bcm-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* ========================================
           ENERGY FLOW PULSE ANIMATION
           Bi-directional closed-loop circuit:
           Center → Box → Border Trace → Return → Center
           Using pathLength="100" for normalized calculations
        ======================================== */
        .bcm-pulse-path {
          /* 10% visible pulse, 90% gap - single energy packet per circuit */
          stroke-dasharray: 10 90;
          stroke-dashoffset: 100;
          animation: pulseFlowContinuous 3s linear infinite;
          opacity: 1;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        @keyframes pulseFlowContinuous {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        /* ========================================
           BOX CHARGING PULSE EFFECT
           Double pulse: charges on arrival + return
        ======================================== */

        @keyframes boxChargingPulse {
          0%, 100% {
            transform: scale(1) translateZ(0);
            box-shadow:
              0 18px 50px rgba(0, 0, 0, 0.7),
              inset 0 1px 0 rgba(255, 255, 255, 0.08);
          }
          30%, 60% {
            transform: scale(1.03) translateZ(0); /* Reduced scale for smoother animation */
            box-shadow:
              0 18px 50px rgba(0, 0, 0, 0.7),
              0 0 30px rgba(167, 139, 250, 0.6),
              0 0 60px rgba(167, 139, 250, 0.3),
              inset 0 0 20px rgba(167, 139, 250, 0.2);
            border-color: rgba(167, 139, 250, 0.6);
          }
          70%, 90% {
            transform: scale(1.01) translateZ(0);
            box-shadow:
              0 18px 50px rgba(0, 0, 0, 0.7),
              0 0 20px rgba(167, 139, 250, 0.3);
          }
        }

        .bcm-box {
          position: absolute;
          min-width: 250px;
          height: 54px;
          padding: 0 22px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 45%, rgba(0, 0, 0, 0.22) 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          z-index: 5;
          box-shadow:
            0 18px 50px rgba(0, 0, 0, 0.7),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          animation: boxChargingPulse 3s ease-in-out infinite;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .bcm-box:hover {
          transform: scale(1.03) translateZ(0);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 45%, rgba(0, 0, 0, 0.26) 100%);
          border: 2px solid #7c3aed;
          box-shadow:
            0 24px 60px rgba(0, 0, 0, 0.8),
            0 0 30px rgba(124, 58, 237, 0.4),
            0 0 60px rgba(167, 139, 250, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          z-index: 20;
        }

        .bcm-box-content {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-align: left;
          line-height: 1.2;
          width: 100%;
        }

        .bcm-box-top-left {
          top: 98px;
          left: 44px;
        }

        .bcm-box-top-right {
          top: 98px;
          right: 44px;
        }

        .bcm-box-middle-left {
          top: 255px;
          left: 44px;
          min-width: 220px;
          height: 48px;
          padding: 0 18px;
        }

        .bcm-box-middle-right {
          top: 255px;
          right: 44px;
        }

        .bcm-box-bottom-left {
          top: 412px;
          left: 44px;
        }

        .bcm-box-bottom-right {
          top: 412px;
          right: 44px;
        }

        /* ========================================
           RESPONSIVE - Tablet (max-width: 768px)
        ======================================== */
        @media (max-width: 768px) {
          .bcm-wrap {
            padding: 40px 16px 40px;
          }

          .bcm-title {
            font-size: 25px !important;
            line-height: 1.2;
            max-width: 95%;
          }

          .bcm-subtitle {
            font-size: 18px !important;
            max-width: 90%;
          }

          .bcm-container {
            height: auto;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0;
            padding: 0;
          }

          /* Hide the SVG lines on mobile - we'll use CSS for connections */
          .bcm-lines {
            display: none;
          }

          /* Hide the center circle on mobile */
          .bcm-center {
            display: none;
          }

          /* Mobile boxes layout */
          .bcm-box {
            position: relative;
            min-width: unset;
            width: auto;
            max-width: 200px;
            height: auto;
            min-height: 50px;
            padding: 14px 18px;
            margin: 0;
            top: unset !important;
            left: unset !important;
            right: unset !important;
            bottom: unset !important;
            animation: boxChargingPulse 3s ease-in-out infinite;
          }

          .bcm-box-content {
            font-size: 14px;
            font-weight: 600;
            text-align: left;
          }

          /* Reorder boxes using order */
          .bcm-box-top-right { order: 1; }
          .bcm-box-middle-right { order: 2; }
          .bcm-box-bottom-right { order: 3; }
          .bcm-box-top-left { order: 4; }
          .bcm-box-middle-left { order: 5; }
          .bcm-box-bottom-left { order: 6; }

          /* Position boxes alternating left/right */
          .bcm-box-top-right,
          .bcm-box-bottom-right,
          .bcm-box-middle-left {
            align-self: flex-end;
            margin-right: 20px;
          }

          .bcm-box-middle-right,
          .bcm-box-top-left,
          .bcm-box-bottom-left {
            align-self: flex-start;
            margin-left: 20px;
          }

          /* Add purple markers using pseudo-elements */
          .bcm-box::before {
            content: '';
            position: absolute;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: #8B5CF6;
            box-shadow: 0 4px 20px rgba(139, 92, 246, 0.5);
          }

          /* Left positioned boxes - marker on left */
          .bcm-box-middle-right::before,
          .bcm-box-top-left::before,
          .bcm-box-bottom-left::before {
            left: -60px;
            top: 50%;
            transform: translateY(-50%);
          }

          /* Right positioned boxes - marker on right */
          .bcm-box-top-right::before,
          .bcm-box-bottom-right::before,
          .bcm-box-middle-left::before {
            right: -60px;
            top: 50%;
            transform: translateY(-50%);
          }

          /* Add play icon to left markers */
          .bcm-box-middle-right::after,
          .bcm-box-top-left::after,
          .bcm-box-bottom-left::after {
            content: '';
            position: absolute;
            left: -52px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 8px 0 8px 14px;
            border-color: transparent transparent transparent #fff;
          }

          /* Add arrow icon to right markers */
          .bcm-box-top-right::after,
          .bcm-box-bottom-right::after,
          .bcm-box-middle-left::after {
            content: '';
            position: absolute;
            right: -52px;
            top: 50%;
            transform: translateY(-50%) rotate(180deg);
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 8px 0 8px 14px;
            border-color: transparent transparent transparent #fff;
          }

          /* Connection lines using CSS */
          .bcm-box:not(:last-child)::after {
            display: none;
          }

          /* Create curved connecting lines */
          .bcm-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: 0;
          }
        }

        /* ========================================
           RESPONSIVE - Mobile (max-width: 480px)
        ======================================== */
        @media (max-width: 480px) {
          .bcm-wrap {
            padding: 40px 12px 40px;
          }

          .bcm-header {
            margin-bottom: 28px;
          }

          .bcm-title {
            /* Handled in 768px query */
            line-height: 1.25;
            padding: 0 10px;
            max-width: 100%;
          }

          .bcm-container {
            gap: 24px;
            padding: 0 8px;
          }

          .bcm-box {
            max-width: 180px;
            min-height: 48px;
            padding: 12px 16px;
            border-radius: 14px;
          }

          .bcm-box-content {
            font-size: 13px;
          }

          .bcm-box::before {
            width: 40px;
            height: 40px;
          }

          .bcm-box-middle-right::before,
          .bcm-box-top-left::before,
          .bcm-box-bottom-left::before {
            left: -54px;
          }

          .bcm-box-top-right::before,
          .bcm-box-bottom-right::before,
          .bcm-box-middle-left::before {
            right: -54px;
          }

          .bcm-box-middle-right::after,
          .bcm-box-top-left::after,
          .bcm-box-bottom-left::after {
            left: -47px;
            border-width: 6px 0 6px 10px;
          }

          .bcm-box-top-right::after,
          .bcm-box-bottom-right::after,
          .bcm-box-middle-left::after {
            right: -47px;
            border-width: 6px 0 6px 10px;
          }

          .bcm-box-top-right,
          .bcm-box-bottom-right,
          .bcm-box-middle-left {
            margin-right: 16px;
          }

          .bcm-box-middle-right,
          .bcm-box-top-left,
          .bcm-box-bottom-left {
            margin-left: 16px;
          }
        }

        /* ========================================
           RESPONSIVE - Extra Small (max-width: 360px)
        ======================================== */
        @media (max-width: 360px) {
          .bcm-wrap {
            padding: 40px 10px 40px;
          }

          .bcm-title {
            /* Handled in 768px query */
          }

          .bcm-container {
            gap: 20px;
            padding: 0 4px;
          }

          .bcm-box {
            max-width: 150px;
            min-height: 44px;
            padding: 10px 14px;
            border-radius: 12px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .bcm-box-content {
            font-size: 11px;
            line-height: 1.25;
          }

          .bcm-box::before {
            width: 36px;
            height: 36px;
          }

          .bcm-box-middle-right::before,
          .bcm-box-top-left::before,
          .bcm-box-bottom-left::before {
            left: -48px;
          }

          .bcm-box-top-right::before,
          .bcm-box-bottom-right::before,
          .bcm-box-middle-left::before {
            right: -48px;
          }

          .bcm-box-middle-right::after,
          .bcm-box-top-left::after,
          .bcm-box-bottom-left::after {
            left: -42px;
            border-width: 5px 0 5px 9px;
          }

          .bcm-box-top-right::after,
          .bcm-box-bottom-right::after,
          .bcm-box-middle-left::after {
            right: -42px;
            border-width: 5px 0 5px 9px;
          }

          .bcm-box-top-right,
          .bcm-box-bottom-right,
          .bcm-box-middle-left {
            margin-right: 12px;
          }

          .bcm-box-middle-right,
          .bcm-box-top-left,
          .bcm-box-bottom-left {
            margin-left: 12px;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .bcm-pulse-path {
            animation: none;
            opacity: 0.5;
            stroke-dasharray: none;
          }
          .bcm-box {
            animation: none;
          }
          .bcm-circle {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
