import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Frequentlyaskedquestions() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      q: 'How much does Miraai cost?',
      a: 'Pricing depends on your usage, content volume, and requirements. We offer flexible plans including project-based, subscription, and enterprise packages. Contact us for a customized quote.'
    },
    {
      id: 2,
      q: 'Will my data and content be secure?',
      a: 'Yes. All client data and content are protected using secure cloud infrastructure, encryption, and role-based access controls.'
    },
    {
      id: 3,
      q: 'Can I request revisions after delivery?',
      a: 'Yes. All projects include revision rounds. You can request changes to visuals, text, language, or formatting as per the agreed scope.'
    },
    {
      id: 4,
      q: 'Can Miraai replace my existing agency or studio?',
      a: 'Miraai can significantly reduce dependency on traditional agencies. Many clients use us as their primary production partner or as a scalable in-house solution.'
    },
    {
      id: 5,
      q: 'Do you provide human support or only AI tools?',
      a: 'Miraai combines AI technology with professional human support. Every project is reviewed by experts to ensure quality and brand consistency.'
    },
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-wrap tracking-[0.5px]">
      <div className="faq-inner">
        <div className="faq-grid">
          <motion.div
            className="faq-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="faq-title tracking-[0.5px]">
              Frequently Asked
              <br />
              Questions
            </div>
          </motion.div>

          <div className="faq-right" aria-label="Frequently asked questions">
            {faqs.map((item, index) => (
              <motion.div
                key={item.id}
                className={`faq-item-wrapper ${openId === item.id ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  type="button"
                  className="faq-item"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={openId === item.id}
                >
                  <span className="faq-q">
                    {item.id}. {item.q}
                  </span>
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </button>

                {/* Answer Section */}
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    {item.a}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .faq-wrap {
          width: 100%;
          padding: 80px 18px 80px;
          background: #000;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .faq-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(780px 520px at 35% 40%, rgba(255, 255, 255, 0.04) 0%, rgba(0, 0, 0, 0) 62%),
            radial-gradient(840px 540px at 78% 62%, rgba(139, 92, 246, 0.07) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: 0;
        }

        .faq-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 120% at 50% 50%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.86) 100%);
          pointer-events: none;
          z-index: 0;
        }

        .faq-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.35fr;
          gap: 56px;
          align-items: start;
        }

        .faq-left {
          padding-top: 200px;
        }

        .faq-title {
          font-size: 40px !important;
          font-weight: 800;
          letter-spacing: 0.5px !important;
          color: #f3f3f6;
          line-height: 1.15;
          max-width: 100%;
        }

        .faq-right {
          display: grid;
          gap: 18px;
          padding-top: 6px;
        }

        /* FAQ Item Wrapper */
        .faq-item-wrapper {
          border-radius: 16px;
          overflow: hidden;
          transition: all 300ms ease;
        }

        .faq-item-wrapper.is-open {
          border: none;
          box-shadow: none;
        }

        .faq-item {
          width: 100%;
          border: 2px solid rgba(255, 255, 255, 0.06);
          cursor: pointer;
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.82);
          border-radius: 16px;
          padding: 20px 22px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 18px;
          box-shadow: 0 22px 80px rgba(0, 0, 0, 0.86);
          position: relative;
          overflow: hidden;
          text-align: left;
          transform: scale(1);
          transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      border 300ms ease,
                      box-shadow 300ms ease;
        }

        .faq-item-wrapper.is-open .faq-item {
          border: none;
          border-radius: 16px 16px 0 0;
          box-shadow: none;
        }

        .faq-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(80% 90% at 40% 10%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 55%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0) 62%);
          pointer-events: none;
          z-index: 0;
        }

        .faq-q {
          position: relative;
          z-index: 1;
          font-size: 18px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.78);
          transition: color 300ms ease;
          letter-spacing: 0.5px !important;
        }

        .faq-plus {
          position: relative;
          z-index: 1;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 24px;
          line-height: 1;
          transition: transform 300ms ease, color 300ms ease;
        }

        /* Hover State */
        .faq-item:hover {
          /* Static - No effect */
        }

        .faq-item-wrapper.is-open .faq-item:hover {
          transform: scale(1);
          border: none;
          box-shadow: none;
        }

        .faq-item:hover .faq-plus {
          color: #fff;
          transform: rotate(90deg);
        }

        .faq-item:hover .faq-q {
          color: rgba(255, 255, 255, 0.95);
        }

        /* Open State - Plus becomes X */
        .faq-item-wrapper.is-open .faq-plus {
          color: #fff;
          transform: rotate(45deg);
        }

        .faq-item-wrapper.is-open .faq-q {
          color: rgba(255, 255, 255, 0.95);
        }

        /* Answer Section */
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 0 0 16px 16px;
          transition: max-height 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .faq-item-wrapper.is-open .faq-answer-wrapper {
          max-height: 600px;
        }

        .faq-answer {
          padding: 20px 22px 24px;
          font-size: 16px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.65);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          letter-spacing: 0.5px !important;
        }

        @media (max-width: 980px) {
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .faq-title {
            text-align: center;
            font-size: 25px !important;
            font-weight: 800;
            max-width: 90%;
            margin: 0 auto;
          }

          .faq-left {
            padding-top: 0;
          }

          .faq-wrap {
            padding: 80px 16px 80px;
          }
        }

        @media (max-width: 560px) {
          .faq-title {
            font-size: 25px !important;
          }

          .faq-item {
            padding: 18px 16px;
            border-radius: 14px;
          }

          .faq-q {
            font-size: 16px;
          }

          .faq-answer {
            padding: 16px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
