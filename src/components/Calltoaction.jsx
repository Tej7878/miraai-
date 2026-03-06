import React from 'react';
import { motion } from 'framer-motion';
import contactUsBtn from '../assets/images/contact_us.webp';

export default function Calltoaction({ openForm }) {
  return (
    <section className="cta-wrap tracking-[0.5px]">
      <div className="cta-inner">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-title tracking-[0.5px]">
            Stop Overpaying For Video Production.
            Start Creating Smarter With <span className='bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent font-semibold'> Miraai </span>?
          </div>
          <div className="cta-sub tracking-[0.5px]">
            Start Creating Professional Videos With AI - Faster, Smarter, And More Cost-Effective.
          </div>

          <button className="cta-btn group relative overflow-hidden" type="button" onClick={openForm}>
            <span className="cta-btn-star relative z-10">✦</span>
            <span className="relative z-10 block overflow-hidden">
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                Contact Us
              </span>
              <span className="absolute inset-0 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                Contact Us
              </span>
            </span>
            <span className="cta-btn-star relative z-10">✦</span>
          </button>
        </motion.div>
      </div>

      <style>{`
        .cta-wrap {
          width: 100%;
          padding: 80px 18px 80px;
          background: #000;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .cta-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(760px 520px at 50% 40%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 60%),
            radial-gradient(820px 560px at 65% 70%, rgba(139, 92, 246, 0.08) 0%, rgba(0, 0, 0, 0) 62%);
          pointer-events: none;
          z-index: 0;
        }

        .cta-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 120% at 50% 50%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.86) 100%);
          pointer-events: none;
          z-index: 0;
        }

        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .cta-card {
          border-radius: 22px;
          padding: 74px 18px 64px;
          text-align: center;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 26px 90px rgba(0, 0, 0, 0.88);
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(70% 90% at 50% 10%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 55%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: 0;
        }

        .cta-title {
          position: relative;
          z-index: 1;
          font-size: 40px !important;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: 0.5px !important;
          color: rgba(255, 255, 255, 0.95);
          max-width: 900px;
          margin: 0 auto;
        }

        .cta-sub {
          position: relative;
          z-index: 1;
          margin-top: 12px;
          font-size: 21px !important;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.7);
          opacity: 0.8;
          max-width: 800px;
          margin: 0 auto;
          font-weight: 500;
          letter-spacing: 0.5px !important;
        }

        .cta-btn {
          border: 0;
          cursor: pointer;
          background: #fff;
          color: #000;
          padding: 12px 32px;
          margin-top: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
          z-index: 1;
          border-radius: 999px;
          font-weight: 700;
          font-size: 16px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
        }

        .cta-btn-star {
          font-size: 14px;
          color: inherit;
        }

        .cta-btn:hover {
          box-shadow: 0 6px 30px rgba(255, 255, 255, 0.25);
        }

        .cta-btn-img {
          width: auto;
          height: 40px;
          display: block;
        }



        @media (max-width: 980px) {
          /* Handled in 768px query */
          .cta-card {
            padding: 64px 18px 58px;
          }
        }

        /* ========================================
           RESPONSIVE - Tablet/Mobile (max-width: 768px)
        ======================================== */
        @media (max-width: 768px) {
          .cta-title {
            font-size: 23px !important;
            font-weight: 800;
          }
          
          .cta-sub {
            font-size: 18px !important;
          }
        }

        /* ========================================
           RESPONSIVE - Mobile (max-width: 680px)
        ======================================== */
        @media (max-width: 680px) {
          .cta-wrap {
            padding: 80px 16px 80px;
          }

          .cta-card {
            padding: 56px 24px 50px;
            border-radius: 18px;
          }

          .cta-title {
            /* Handled in 768px query */
            line-height: 1.2;
            font-weight: 800;
            max-width: 90%;
            margin: 0 auto;
          }

          .cta-title br {
            display: inline;
          }

          .cta-sub {
            /* Handled in 768px query */
            line-height: 1.6;
            margin-top: 18px;
            opacity: 0.8;
            max-width: 100%;
          }

          .cta-btn {
            margin-top: 32px;
            padding: 10px 24px;
            font-size: 14px;
          }
        }

        /* ========================================
           RESPONSIVE - Small Mobile (max-width: 480px)
        ======================================== */
        @media (max-width: 480px) {
          .cta-wrap {
            padding: 80px 14px 80px;
          }

          .cta-card {
            padding: 48px 20px 44px;
            border-radius: 16px;
          }

          .cta-title {
            /* Handled in 768px query */
          }

          .cta-sub {
            /* Handled in 768px query */
            padding: 0 8px;
            margin-top: 16px;
          }

          .cta-btn {
            margin-top: 28px;
            padding: 8px 20px;
            font-size: 13px;
          }
        }

        /* ========================================
           RESPONSIVE - Extra Small (max-width: 360px)
        ======================================== */
        @media (max-width: 360px) {
          .cta-wrap {
            padding: 80px 12px 80px;
          }

          .cta-card {
            padding: 42px 18px 38px;
            border-radius: 14px;
          }

          .cta-title {
            /* Handled in 768px query */
            line-height: 1.25;
          }

          .cta-sub {
            /* Handled in 768px query */
            line-height: 1.55;
            padding: 0 4px;
            margin-top: 14px;
          }

          .cta-btn {
            margin-top: 24px;
            padding: 7px 18px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
