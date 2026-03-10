import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';

const Features = () => {
    const sectionRef = useRef(null);
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const isInView = useInView(sectionRef, { once: false, amount: 0.15, margin: "-50px" });

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const features = [
        {
            title: "AI Video Generation",
            description: "Create High-Quality Marketing Videos, Ads, And Explainers Instantly From Scripts And Ideas.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
            )
        },
        {
            title: "AI Image Generation",
            description: "Generate Professional Product And Lifestyle Images Without Photoshoots Or Studios.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            )
        },
        {
            title: "AI Product Catalog Generation",
            description: "Automatically Create Complete Product Catalogs With Visuals, Descriptions, And Branding.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
            )
        },
        {
            title: "UGC-Style Video Ads Creator",
            description: "Produce Authentic, Influencer-Style Short Videos For Social Media And Performance Ads.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                    <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                </svg>
            )
        },
        {
            title: "Infinite Customization",
            description: "Customize Colors, Fonts, Layouts, And Formats To Match Your Brand Identity.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            )
        },
        {
            title: "Virtual Characters & Avatars",
            description: "Use AI-Powered Models And Presenters For Ads, Explainers, And Promotions.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            )
        },
        {
            title: "High-Impact Branding Ads",
            description: "Design And Launch Powerful Ad Creatives Optimized For Digital Platforms.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                </svg>
            )
        },
        {
            title: "Automated Editing & Effects",
            description: "Apply Professional Editing, Transitions, Color Grading, And Audio Optimization Automatically.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
            )
        },
        {
            title: "Brand Consistency",
            description: "Maintain A Consistent Brand Identity Across All Content And Campaigns.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            )
        }
    ];

    // Animation variants - same as trust_miraai.jsx
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div ref={sectionRef} className="bg-[#000004] min-h-auto py-10 px-4 md:px-8 relative overflow-hidden font-['Inter'] tracking-[0.5px]">
            {/* Background glow */}
            <div className="absolute top-[20%] right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_60%)] pointer-events-none z-0" />

            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header Section */}
                {isMobile ? (
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-3xl 
             font-extrabold leading-tight tracking-[0.5px]
             text-white text-center mb-10 md:mb-16">
                            Powerful Platform Features
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-[18px] font-medium leading-relaxed tracking-[0.5px] text-white/80 text-center max-w-3xl">
                            Everything You Need In One AI Production Platform.
                        </p>
                    </div>
                ) : (
                    <motion.div
                        className="text-center mb-10"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={headerVariants}
                    >
                        <h2 className="text-[40px] font-bold text-white tracking-[0.5px] max-w-none mx-auto leading-tight mb-3">
                            Powerful Platform Features
                        </h2>
                        <p className="text-gray-400 text-[21px] tracking-[0.5px] max-w-[850px] mx-auto leading-relaxed font-medium opacity-80">
                            Everything You Need In One AI Production Platform.
                        </p>
                    </motion.div>
                )}

                {/* Features Grid */}
                {isMobile ? (
                    <div className="grid grid-cols-1 gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 flex flex-col justify-start items-start h-full"
                            >
                                <div className="w-[40px] h-[40px] rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] flex items-center justify-center mb-4 text-white">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white text-lg font-bold mb-3 leading-snug">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10 cursor-pointer flex flex-col justify-start items-start h-full group relative overflow-hidden transition-all duration-300 hover:bg-[rgba(139,92,246,0.1)] hover:border-[#8B5CF6] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-1"
                                variants={cardVariants}
                            >
                                {/* Icon Container */}
                                <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-xl font-bold mb-4 leading-snug">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-[0.95rem] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Features;
