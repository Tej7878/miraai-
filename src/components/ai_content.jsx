import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Import images
import fashionImg from '../assets/images/fashion.webp';
import jewelleryImg from '../assets/images/jwellery.webp';
import realEstateImg from '../assets/images/real_estate.webp';
import ecommerceImg from '../assets/images/e-commerce.webp';
import retailServiceImg from '../assets/images/retail___service.jpg';

const categories = [
    {
        title: "Fashion & Apparel Brands",
        description: "We help clothing and fashion brands increase sales with professional product shoots, catalogs, and social media ads.",
        image: fashionImg
    },
    {
        title: "Jewellery Businesses",
        description: "We create premium visuals and catalogs that build trust and boost jewellery sales online and offline.",
        image: jewelleryImg
    },
    {
        title: "Real Estate",
        description: "We support developers and agents with property videos, walkthroughs, and lead-generation ads.",
        image: realEstateImg
    },
    {
        title: "E-Commerce Sellers",
        description: "We help online sellers grow faster with high-converting product images, videos, and marketplace creatives.",
        image: ecommerceImg
    },
    {
        title: "Retail & Service Businesses",
        description: "We help local and growing businesses attract more customers through effective digital ads and branding.",
        image: retailServiceImg
    }
];

const ImageBlock = ({ categories, activeTab }) => (
    <div className="relative w-full h-[320px] md:h-auto md:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A]">
        {categories.map((cat, index) => (
            <motion.img
                key={index}
                src={cat.image}
                alt={cat.title}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: activeTab === index ? 1 : 0,
                    scale: activeTab === index ? 1 : 1.05
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: activeTab === index ? 10 : 0 }}
            />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />
    </div>
);

const AiContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

    // Scroll Listener to update Active Tab
    // Scroll Listener to update Active Tab
    useEffect(() => {
        const handleScroll = () => {
            const isDesktop = window.innerWidth >= 768;

            // Calculate Trigger Line dynamically
            // Desktop: Sticky header is ~120px. Trigger at 150px detects it reliably.
            // Mobile: Sticky stack starts at roughly 80(Header) + 320(Image) + 24(Gap) = 424px.
            // We set the trigger slightly below this (e.g., +100px = 524px).
            // This ensures the incoming card triggers "Active" just before it hits the stack/sticky point.

            let triggerLine;
            if (isDesktop) {
                triggerLine = 150;
            } else {
                const mobileStackTop = 80 + 320 + 24; // 424px
                triggerLine = mobileStackTop + 100; // ~524px
            }

            let newActive = -1;
            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                const rect = card.getBoundingClientRect();
                // Check if card top has crossed the trigger line
                if (rect.top <= triggerLine) {
                    newActive = index;
                }
            });

            if (newActive !== -1 && newActive !== activeTab) {
                setActiveTab(newActive);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeTab]);

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div ref={sectionRef} className="bg-[#000004] relative w-full py-6 md:py-16 px-4 md:px-8 font-['Inter']">
            <div className="max-w-[1200px] mx-auto">

                {/* Header */}
                <motion.div
                    className="text-center mb-8 md:mb-16"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={headerVariants}
                >
                    <h2 className="text-[25px] md:text-[40px] font-bold text-white mb-6 tracking-[0.5px] leading-tight">
                        AI Content & Ad Creation Gallery
                    </h2>
                    <p className="text-gray-400 text-[18px] md:text-[21px] mx-auto max-w-[850px] tracking-[0.5px] opacity-80 leading-relaxed font-medium">
                        Explore Real Campaigns, Branding Ads, And AI-Generated Videos.
                    </p>
                </motion.div>

                {/* ===== DESKTOP LAYOUT ===== */}
                {/* 
                    Single relative container. 
                    Image: absolute left, h-full, with sticky inside.
                    Cards: normal flow on right half, determines container height.
                    Image stays sticky until cards are done → both scroll away together.
                */}
                <div className="hidden md:block relative">
                    {/* Image column: absolute positioned, full height of container */}
                    <div className="absolute left-0 top-0 h-full" style={{ width: 'calc(50% - 32px)' }}>
                        <div className="sticky top-[120px] z-30">
                            <ImageBlock categories={categories} activeTab={activeTab} />
                        </div>
                    </div>

                    {/* Cards column: normal flow on right side, determines container height */}
                    <div className="pb-[280px]" style={{ marginLeft: 'calc(50% + 32px)' }}>
                        {categories.map((item, index) => (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                className={`
                                    w-full sticky 
                                    rounded-[2rem] p-8 
                                    border border-white/10 
                                    backdrop-blur-md transition-all duration-300
                                    mb-8
                                    flex flex-col justify-center
                                    group relative p-8 rounded-[2rem] border transition-all duration-300 w-full cursor-pointer mb-8
                                    ${activeTab === index
                                        ? 'bg-white/5 border-l-[6px] border-l-[#8B5CF6] border-t-white/10 border-r-white/10 border-b-white/10 shadow-[0_0_30px_rgba(139,92,246,0.1)]'
                                        : 'bg-transparent border-white/10 hover:bg-white/5'}
                                `}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                style={{
                                    top: '120px',
                                    zIndex: 20 + index,
                                    minHeight: '240px'
                                }}
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="relative z-10 text-left">
                                    <h3 className={`text-[21px] font-bold mb-3 transition-colors ${activeTab === index ? 'text-[#8B5CF6]' : 'text-white'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-[18px] leading-relaxed transition-colors ${activeTab === index ? 'text-gray-300' : 'text-gray-500'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== MOBILE LAYOUT (Absolute Wrapper Approach for Perfect Scroll End) ===== */}
                <div className="md:hidden relative">
                    {/* 
                        Image Column: Absolute & Full Height (minus offset). 
                        We reduce the height by ~250px so that the "sticky container" for the image
                        ends exactly when the last card (which is at ~460px + 150px = ~610px) 
                        finish sticking.
                        Image Bottom Limit = 400px (80+320).
                        Last Card Bottom Limit = ~614px.
                        Difference ~214px. We use 250px to be safe and ensure they scroll away together
                        without the card crashing into the image.
                    */}
                    <div className="absolute top-0 left-0 w-full" style={{ height: 'calc(100% - 250px)', zIndex: 40 }}>
                        <div className="sticky top-[80px] w-full">
                            <ImageBlock categories={categories} activeTab={activeTab} />
                        </div>
                    </div>

                    {/* 
                        Cards Column: Normal flow content that drives the height.
                        We add top padding equal to:
                        Header (80px) + Image Height (320px) + Gap (24px).
                        Gap ensures separation from the image bottom line.
                        Z-Index 50 ensures cards are ON TOP of the image if they were to meet,
                        preventing them from "going under".
                    */}
                    <div className="relative z-50" style={{ paddingTop: 'calc(80px + 320px + 24px)' }}>
                        {/* Card mapping */}
                        {categories.map((item, index) => (
                            <div
                                key={`mobile-${index}`}
                                ref={el => {
                                    if (window.innerWidth < 768) {
                                        cardRefs.current[index] = el;
                                    }
                                }}
                                className={`
                                    w-full sticky 
                                    rounded-[2rem] p-6 
                                    border 
                                    backdrop-blur-md transition-all duration-300
                                    ${index === categories.length - 1 ? 'mb-0' : 'mb-2'}
                                    flex flex-col justify-center
                                    cursor-pointer group
                                    min-h-[150px]
                                `}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    // Sticky position ensures the card STOPS before hitting the image
                                    top: `calc(80px + 320px + 24px + ${index * 10}px)`,
                                    zIndex: 60 + index, // Higher than image (40) so it never goes "under"
                                    backgroundColor: activeTab === index ? 'rgba(18, 18, 20, 0.95)' : 'rgba(10, 10, 10, 0.9)',
                                    // Active State: Purple Left Border (Curved) vs Normal Border
                                    borderLeftWidth: activeTab === index ? '6px' : '1px',
                                    borderLeftColor: activeTab === index ? '#8B5CF6' : 'rgba(255, 255, 255, 0.1)',
                                    borderTopColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRightColor: 'rgba(255, 255, 255, 0.1)',
                                    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
                                    boxShadow: activeTab === index ? '0 -10px 30px rgba(0,0,0,0.5)' : 'none'
                                }}
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="relative z-10">
                                    <h3 className={`text-[16px] md:text-[21px] font-bold mb-3 transition-colors ${activeTab === index ? 'text-[#8B5CF6]' : 'text-white'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-[16px] md:text-[18px] leading-relaxed transition-colors ${activeTab === index ? 'text-gray-300' : 'text-gray-500'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style>{`
                html { scroll-behavior: smooth; }
            `}</style>
        </div >
    );
};

export default AiContent;

