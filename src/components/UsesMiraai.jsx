
import React, { useEffect, useRef, useState } from 'react';

import textileImg from '../assets/textile & garments.webp';
import lifestyleImg from '../assets/images/lifestyles.webp';
import jwelleryImg from '../assets/images/jwellery.webp';
import realEstateImg from '../assets/images/real states.webp';
import foodImg from '../assets/images/food.webp';
import carImg from '../assets/images/car.webp';

const originalCards = [
  {
    title: 'Textile & Garments',
    subtitle: '(Clothing Brands, Fabric Manufacturers,\nFashion Houses, Boutique Designers)',
    image: textileImg,
  },
  {
    title: 'Lifestyle & Fashion Brands',
    subtitle: '(Clothing, Shoes, Bags, Watches,\nCosmetics, Perfumes)',
    image: lifestyleImg,
  },
  {
    title: 'Jewellery & Diamonds',
    subtitle: '(Gold Jewellery, Diamond Jewellery, Silver\nJewellery, Gemstones, Luxury Watches)',
    image: jwelleryImg,
  },
  {
    title: 'Real Estate & Property',
    subtitle: '(Property Developers, Architects,\nInterior Designers, Real Estate Agents)',
    image: realEstateImg,
  },
  {
    title: 'Food & Beverage',
    subtitle: '(Restaurants, Cafes, Food Brands,\nBeverage Companies, Catering)',
    image: foodImg,
  },
  {
    title: 'Automobile & Vehicles',
    subtitle: '(Car Dealerships, Auto Brands,\nMotorcycle Companies, Luxury Vehicles)',
    image: carImg,
  },
];

// Combine cards for infinite effect
const cards = [...originalCards, ...originalCards, ...originalCards];

export default function UsesMiraai() {
  const [isPaused, setIsPaused] = useState(false);
  const railRef = useRef(null);

  useEffect(() => {
    let interval;
    const getCardWidth = () => {
      if (window.innerWidth <= 480) return 260 + 20; // card width + gap
      if (window.innerWidth <= 768) return 280 + 20;
      return 350; // 320 + 30
    };

    if (!isPaused) {
      interval = setInterval(() => {
        if (railRef.current) {
          const rail = railRef.current;
          const cardPlusGap = getCardWidth();

          // Smoothly scroll to next
          rail.scrollLeft += cardPlusGap;

          const oneSetWidth = originalCards.length * cardPlusGap;
          if (rail.scrollLeft >= oneSetWidth * 2) {
            setTimeout(() => {
              if (railRef.current) {
                rail.style.scrollBehavior = 'auto';
                rail.scrollLeft = oneSetWidth;
                rail.style.scrollBehavior = 'smooth';
              }
            }, 600);
          }
        }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (railRef.current) {
        const getCardWidth = () => {
          if (window.innerWidth <= 480) return 260 + 20;
          if (window.innerWidth <= 768) return 280 + 20;
          return 350;
        };
        const cardPlusGap = getCardWidth();
        railRef.current.scrollLeft = originalCards.length * cardPlusGap;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="um-wrap tracking-[0.5px]">
      <div className="um-header">
        <div className="um-title tracking-[0.5px]">Who Uses <span className='bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent font-semibold'> Miraai </span>?</div>
        <div className="text-lg tracking-[0.5px]">
          Industries That Use Miraai To Reduce Production Costs And Scale High-Quality Content.
        </div>
      </div>

      <div className="um-container">
        <div
          className="um-rail"
          ref={railRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {cards.map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              className={`um-card ${card.title.includes('Jewellery') ? 'um-card-jewellery' : ''}`}
            >
              <img className="um-img" src={card.image} alt="" />
              <div className="um-overlay" aria-hidden="true" />
              <div className="um-text">
                <div className="um-card-title">{card.title}</div>
                <div className="um-card-subtitle">{card.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .um-wrap {
          width: 100%;
          padding: 40px 0;
          background: #000;
          color: #e9e9ee;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
        }

        .um-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .um-title {
          font-size: 40px !important;
          font-weight: 800;
          letter-spacing: 0.5px !important;
          color: #f3f3f6;
          line-height: 1.15;
          max-width: 1000px;
          margin: 0 auto;
          margin-bottom: 12px;
        }

        .um-subtitle {  
          margin-top: 12px;
          font-size: 18px !important;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          max-width: 850px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.8;
          line-height: 1.6;
          letter-spacing: 0.5px !important;
        }

        .um-container {
          width: 100%;
          position: relative;
          /* Fade edges for premium feel */
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .um-rail {
          display: flex;
          gap: 30px;
          overflow-x: auto; /* Changed to auto for better mobile interaction if needed, but JS still handles it */
          padding: 30px 0;
          scroll-behavior: smooth;
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
        }

        .um-rail::-webkit-scrollbar {
          display: none;
        }

          .um-card {
          position: relative;
          width: 320px;
          height: 420px;
          border-radius: 28px;
          overflow: hidden;
          flex: 0 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), 
                      border 0.3s ease, 
                      box-shadow 0.3s ease;
          background: #111;
          scroll-snap-align: center;
        }

        .um-card:hover {
          transform: translateY(-15px);
          border: 5px solid #7c3aed;
          box-shadow: 0 25px 50px rgba(124, 58, 237, 0.25);
          z-index: 10;
        }

        .um-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .um-card:hover .um-img {
          transform: scale(1.15);
        }

        .um-card-jewellery .um-img {
          object-position: center 70%;
        }

        .um-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
        }

        .um-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px;
          text-align: center;
          transform: translateY(0);
          transition: transform 0.4s ease;
        }

        .um-card:hover .um-text {
          transform: translateY(-5px);
        }

        .um-card-title {
          font-size: 19px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }

        .um-card-subtitle {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          white-space: pre-line;
        }

        @media (max-width: 768px) {
          .um-wrap { padding: 40px 18px 40px 18px; }
          .um-title { font-size: 25px!important; font-weight: 800; line-height: 1.2; max-width: 90%; }
          .um-subtitle { font-size: 18px !important; margin-top: 16px; opacity: 0.8; }
          .um-card { width: 280px; height: 360px; }
          .um-rail { gap: 20px; }
        }

        @media (max-width: 480px) {
          .um-title { font-size: 25px!important; }
          .um-subtitle { font-size: 18px !important; padding: 0 15px; }
          .um-card { width: 260px; height: 340px; }
          .um-container {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        }

        @media (max-width: 360px) {
          .um-title { font-size: 25px!important; }
          .um-subtitle { font-size: 18px !important; line-height: 1.4; padding: 0 10px; margin-top: 12px; }
          .um-card { width: 260px; border-radius: 20px; }
          .um-card-title { font-size: 17px; }
          .um-text { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
