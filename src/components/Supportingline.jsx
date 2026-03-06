
import React from 'react';
import { motion } from 'framer-motion';

import aiGenerationImg from '../assets/images/ai_generation.webp';
import customizeBrandImg from '../assets/images/customize_brand.webp';
import inputYourVisionImg from '../assets/images/input.webp';
import reviewDeployImg from '../assets/images/review_deploy.webp';

const stepImages = {
  1: inputYourVisionImg,
  2: customizeBrandImg,
  3: aiGenerationImg,
  4: reviewDeployImg,
};

const steps = [
  {
    number: 1,
    title: 'Input Your Vision',
    subtitle: 'Start With A Script Or Concept',
    description:
      'Paste Your Script, Upload A Brief, Or Use Our AI Assistant To Create One \nFrom Scratch. Miraai Breaks It Into Scenes Automatically And Suggests \nVisual Treatments.',
    side: 'right',
  },
  {
    number: 2,
    title: 'Customize & Brand',
    subtitle: 'Make It Uniquely Yours',
    description:
      'Select Templates, Customize Colors, Fonts, And Visual Styles To Match Your Brand Guidelines. Upload Logos, Set Tone Preferences, Choose Virtual Characters.',
    side: 'left',
  },
  {
    number: 3,
    title: 'AI Generation',
    subtitle: 'Let AI Work Its Magic',
    description:
      'Miraai Generates Your Video With Professional Editing, Effects, Color \nGrading, And Audio. Localize Into Multiple Languages With One Click. Wait Minutes, Not Weeks.',
    side: 'right',
  },
  {
    number: 4,
    title: 'Review & Deploy',
    subtitle: 'Refine And Publish',
    description:
      'Review Your Content, Make Any Final Adjustments, Get Team Approvals, And Export In Your Preferred Formats. Deploy Across All Channels Instantly.',
    side: 'left',
  },
];

export default function Supportingline() {
  return (
    <section className="sl-wrap tracking-[0.5px]">
      <motion.div
        className="sl-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="sl-title tracking-[0.5px]">Here's Exactly How We Work With You
        </div>
        <div className="sl-subtitle tracking-[0.5px]">No confusion. No complexity. Just a simple process from idea to delivery.</div>
      </motion.div>

      <div className="sl-timeline">
        {/* Central Timeline Line with Energy Flow */}
        <div className="sl-line" aria-hidden="true">
          <div className="sl-line-glow"></div>
        </div>

        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className={`sl-row ${step.side === 'left' ? 'is-left' : 'is-right'}`}
            initial={{ opacity: 0, x: step.side === 'left' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {step.side === 'left' ? (
              <>
                <div className="sl-spacer" />
                {/* Card with Border Tracing Effect */}
                <div className="sl-card-wrapper">
                  <div className="sl-border-trace"></div>
                  <div className="sl-card" aria-hidden="true">
                    {stepImages[step.number] ? (
                      <img className="sl-card-img" src={stepImages[step.number]} alt="" />
                    ) : null}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Card with Border Tracing Effect */}
                <div className="sl-card-wrapper">
                  <div className="sl-border-trace"></div>
                  <div className="sl-card" aria-hidden="true">
                    {stepImages[step.number] ? (
                      <img className="sl-card-img" src={stepImages[step.number]} alt="" />
                    ) : null}
                  </div>
                </div>
                <div className="sl-spacer" />
              </>
            )}

            <div className={`sl-marker ${step.number === 1 ? 'is-active' : ''}`}>
              <span className="sl-marker-inner">{step.number}</span>
            </div>

            <div
              className={`sl-content ${step.side === 'left' ? 'content-left' : 'content-right'}`}
            >
              <div className="sl-content-title">{step.title}</div>
              <div className="sl-content-subtitle">{step.subtitle}</div>
              <div className="sl-content-desc">{step.description}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .sl-wrap {
          width: 100%;
          min-height: auto;
          padding: 80px 18px 80px;
          background: #000004;
          color: #e9e9ee;
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }

        .sl-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .sl-title {
          font-size: 40px !important;
          font-weight: 800;
          letter-spacing: 0.5px !important;
          color: #f3f3f6;
          line-height: 1.15;
          max-width: 1000px;
          margin: 0 auto;
        }

        .sl-subtitle {
          margin-top: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 21px !important;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          max-width: 850px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.8;
          line-height: 1.6;
          letter-spacing: 0.5px !important;
        }

        .sl-timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 8px 0 12px;
        }

        /* ========================================
           ENERGY FLOW - Central Timeline Line
        ======================================== */
        .sl-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          transform: translateX(-50%);
          background: rgba(120, 70, 255, 0.15);
          border-radius: 999px;
          z-index: 1;
          overflow: hidden;
        }

        .sl-line-glow {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(120, 70, 255, 0.3) 10%,
            rgba(168, 85, 247, 0.9) 30%,
            #a855f7 50%,
            rgba(168, 85, 247, 0.9) 70%,
            rgba(120, 70, 255, 0.3) 90%,
            transparent 100%
          );
          animation: energyFlow 3s linear infinite;
          will-change: transform;
        }

        @keyframes energyFlow {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(200%);
          }
        }

        /* ========================================
           CARD WRAPPER with Border Tracing
        ======================================== */
        .sl-card-wrapper {
          position: relative;
          height: 380px; 
          border-radius: 22px;
          overflow: hidden;
          padding: 2px;
        }

        /* Snake/Tracing Border Effect - Conic Gradient */
        .sl-border-trace {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 30deg,
            #7846FF 90deg,
            #a855f7 180deg,
            #7846FF 270deg,
            transparent 330deg,
            transparent 360deg
          );
          opacity: 0;
          animation: none;
          will-change: transform;
          transition: opacity 0.3s ease;
        }

        .sl-card-wrapper:hover .sl-border-trace {
          opacity: 1;
          animation: borderTrace 3s linear infinite;
        }

        @keyframes borderTrace {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* ========================================
           CARD Styles
        ======================================== */
        .sl-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(8px);
          overflow: hidden;
        }

        .sl-card-wrapper:hover .sl-card {
          
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.7), 
            0 0 30px rgba(120, 70, 255, 0.25);
        }

        .sl-card-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .sl-row:first-child .sl-card-img {
          object-fit: contain;
          padding: 18px;
          background: rgba(0, 0, 0, 0.28);
        }

        .sl-row {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          padding: 24px 0;
        }

        .sl-spacer {
          height: 380px;
        }

        /* ========================================
           MARKER Styles
        ======================================== */
        .sl-marker {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #000;
          border: 3px solid rgba(255, 255, 255, 0.95);
          display: grid;
          place-items: center;
          z-index: 2;
          transition: border-color 240ms ease, transform 240ms ease;
        }

        .sl-marker::after {
          content: '';
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          background: rgba(120, 70, 255, 0.95);
          opacity: 0;
          transition: opacity 240ms ease;
          z-index: 1;
        }

        .sl-row:nth-child(1) .sl-marker {
          border-color: rgba(120, 70, 255, 1);
        }

        .sl-row:nth-child(1) .sl-marker::after {
          opacity: 1;
        }

        .sl-row:hover .sl-marker {
          border-color: rgba(120, 70, 255, 1);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .sl-row:hover .sl-marker::after {
          opacity: 1;
        }

        .sl-marker-inner {
          font-size: 14px;
          line-height: 1;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.95);
          user-select: none;
          z-index: 2;
          position: relative;
        }

        /* ========================================
           CONTENT Styles
        ======================================== */
        .sl-content {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: calc(50% - 60px);
        }

        .sl-content.content-right {
          left: calc(50% + 38px);
          text-align: left;
        }

        .sl-content.content-left {
          right: calc(50% + 38px);
          text-align: left;
        }

        .sl-content-title {
          font-size: 34px;
          font-weight: 800;
          color: rgba(154, 105, 255, 0.92);
          letter-spacing: 0.2px;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .sl-content-subtitle {
          font-size: 20px;
          font-weight: 700;
          color: rgba(188, 181, 181, 1);
          margin-top: 0;
        }

        .sl-content-desc {
          margin-top: 10px;
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          font-size: 14px;
          line-height: 1.6;
          letter-spacing: 0.15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.75);
          max-width: 100%;
          white-space: pre-wrap;
        }

        /* ========================================
           RESPONSIVE - Mobile (max-width: 680px)
        ======================================== */
        @media (max-width: 900px) {
           .sl-wrap {
            padding: 80px 16px 80px;
          }

          .sl-header {
            margin-bottom: 30px;
          }

          .sl-title {
            font-size: 25px !important;
            font-weight: 800;
            color: #fff; /* Match other sections white title */
            line-height: 1.2;
            max-width: 90%;
            margin: 0 auto;
          }

          .sl-subtitle {
            font-size: 18px !important;
            margin-top: 16px;
            color: rgba(255, 255, 255, 0.7);
            opacity: 0.8;
            max-width: 100%;
            line-height: 1.5;
            font-style: normal; /* Remove italic for consistency */
          }

          .sl-timeline {
            padding-left: 0;
            padding-right: 0;
          }

          .sl-line {
            display: none;
          }

          .sl-row {
            display: flex;
            flex-direction: column;
            align-items: center; /* Center all items */
            gap: 0;
            padding: 0 0 40px 0;
          }

          .sl-row:last-of-type {
            padding-bottom: 10px;
          }

          .sl-row.is-left,
          .sl-row.is-right {
            flex-direction: column;
          }

          .sl-spacer {
            display: none;
          }

          /* Number Circle - Move to Top & Center */
          .sl-marker {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            width: 44px;
            height: 44px;
            margin-bottom: 20px;
            order: 1; /* First */
            background: #7846FF;
            border: none;
            display: grid;
            place-items: center;
          }

          .sl-marker::after {
            display: none;
          }

          .sl-marker-inner {
            font-size: 16px;
            font-weight: 700;
            color: #fff;
          }

          .sl-row:hover .sl-marker {
            transform: none;
          }

          /* Text Content - Center */
          .sl-content {
            position: relative;
            top: auto;
            transform: none;
            left: auto;
            right: auto;
            width: 100%;
            max-width: 100%;
            margin-left: 0;
            margin-bottom: 30px; /* Spacing below text */
            order: 2; /* Second - Right under the number */
            text-align: center; 
          }

          .sl-content.content-left,
          .sl-content.content-right {
            left: auto;
            right: auto;
            text-align: center;
          }

          /* Image Card - Bottom */
          .sl-card-wrapper {
            width: 100%;
            max-width: 500px;
            height: auto;
            aspect-ratio: 16 / 10;
            border-radius: 16px;
            margin-bottom: 0;
            order: 3; /* Third - At the bottom */
          }

          .sl-card {
            border-radius: 14px;
          }

          .sl-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .sl-row:first-child .sl-card-img {
            object-fit: cover;
            padding: 0;
            background: transparent;
          }

          .sl-content-title {
            font-size: 22px;
            font-weight: 700;
            color: #a855f7;
            letter-spacing: 0;
            margin-bottom: 8px;
          }

          .sl-content-subtitle {
            font-size: 16px;
            font-weight: 700;
            color: #d4d4d4ff;
            margin-top: 0;
            margin-bottom: 12px;
          }

          .sl-content-desc {
            font-size: 14px;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.65);
            white-space: normal;
            max-width: 100%;
          }

          /* Adjust border trace for mobile */
          .sl-border-trace {
            background: conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 90deg,
              #7846FF 150deg,
              #a855f7 180deg,
              #7846FF 210deg,
              transparent 270deg,
              transparent 360deg
            );
          }
        }



        /* ========================================
           REDUCED MOTION
        ======================================== */
        @media (prefers-reduced-motion: reduce) {
          .sl-card,
          .sl-marker {
            transition: none;
          }

          .sl-line-glow {
            animation: none;
          }

          .sl-border-trace {
            animation: none;
          }

          .sl-row:hover .sl-card {
            transform: none;
          }

          .sl-row:hover .sl-marker {
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </section>
  );
}
