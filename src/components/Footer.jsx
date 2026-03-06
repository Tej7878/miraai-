import React from 'react';

import mirraiLogo from '../assets/images/mirai.webp';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="ft-wrap tracking-[0.5px]">
      <div className="ft-inner">
        <div className="ft-top">
          <div className="ft-left">
            <img className="ft-logo" src={mirraiLogo} alt="Mirrai" />
            <div className="ft-desc tracking-[0.5px]">
              AI-powered creative production
              <br />
              platform for generating professional
              <br />
              videos, photos, and branding creatives
              <br />
              for modern businesses.
            </div>

            <div className="ft-social">
              <a className="ft-social-btn" href="https://www.facebook.com/people/Miraaiinai/61587247783790/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 8.5V7.2C14 6.54 14.54 6 15.2 6H17V3H15.2C12.88 3 11 4.88 11 7.2V8.5H9V12H11V21H14V12H16.7L17 8.5H14Z"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="ft-social-btn" href="https://www.instagram.com/miraai.inai?igsh=Zmd6cDQ1ajl1OGx0" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 3H17C19.209 3 21 4.791 21 7V17C21 19.209 19.209 21 17 21H7C4.791 21 3 19.209 3 17V7C3 4.791 4.791 3 7 3Z"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12 16.2C14.3196 16.2 16.2 14.3196 16.2 12C16.2 9.6804 14.3196 7.8 12 7.8C9.6804 7.8 7.8 9.6804 7.8 12C7.8 14.3196 9.6804 16.2 12 16.2Z"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="1.8"
                  />
                  <path d="M17.4 6.6H17.41" stroke="rgba(255,255,255,0.8)" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <div className="ft-copy">All Rights Reserved © 2026 by INAI Worlds Pvt. Ltd.</div>

          <div className="ft-legal-links">
            <Link to="/privacy-policy" className="ft-legal-link">
              Privacy Policy
            </Link>
            <span className="ft-sep">|</span>
            <Link to="/terms-and-conditions" className="ft-legal-link">
              Terms & Conditions
            </Link>
            <span className="ft-sep">|</span>
            <Link to="/cookies" className="ft-legal-link">
              Cookies
            </Link>
            <span className="ft-sep">|</span>
            <Link to="/refund-policy" className="ft-legal-link">
              Refund & Cancellation
            </Link>
            <span className="ft-sep">|</span>
            <Link to="/disclaimer" className="ft-legal-link">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .ft-wrap {
          width: 100%;
          padding: 80px 18px 80px;
          background: #000;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Urbanist', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .ft-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 120% at 50% 40%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.9) 100%);
          pointer-events: none;
          z-index: 0;
        }

        .ft-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .ft-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          margin-bottom: 40px;
        }

        .ft-left {
          max-width: 480px;
        }

        .ft-logo {
          height: 38px;
          width: auto;
          object-fit: contain;
          display: block;
          margin-bottom: 18px;
          filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.7));
        }

        .ft-desc {
          font-size: 18px !important;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.52);
        }

        .ft-social {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 24px;
        }

        .ft-social-btn {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.18);
          text-decoration: none;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.2s ease;
        }

        .ft-social-btn:hover {
          border-color: rgba(255, 255, 255, 0.6);
          color: #fff;
          transform: translateY(-2px);
        }

        .ft-bottom {
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }

        .ft-copy {
          font-size: 16px !important;
          color: rgba(255, 255, 255, 0.62);
        }

        .ft-legal-links {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ft-legal-link {
          font-size: 16px !important;
          color: rgba(255, 255, 255, 0.62);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ft-legal-link:hover {
          color: #fff;
        }

        .ft-sep {
          color: rgba(255, 255, 255, 0.3);
          font-size: 12px;
        }

        @media (max-width: 900px) {
           .ft-bottom {
             flex-direction: column-reverse;
             gap: 20px;
             text-align: center;
           }
           
           .ft-legal-links {
             justify-content: center;
           }
        }

        /* ========================================
           RESPONSIVE - Tablet/Mobile (max-width: 768px)
        ======================================== */
        @media (max-width: 768px) {
          .ft-desc {
            font-size: 16px !important;
          }
        }

        /* ========================================
           RESPONSIVE - Mobile (max-width: 680px)
        ======================================== */
        @media (max-width: 680px) {
          .ft-wrap {
            padding: 80px 16px 80px;
          }

          .ft-top {
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 30px;
          }

          .ft-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .ft-logo {
            height: 42px;
            margin-bottom: 20px;
          }

          .ft-desc br {
            display: none;
          }
          
          .ft-legal-links {
            gap: 8px;
          }
          
          .ft-sep {
            display: none;
          }
          
          .ft-legal-link {
             margin: 0 4px;
             font-size: 16px !important;
          }
        }
      `}</style>
    </footer>
  );
}
