import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import WhyMiraaiImage from '../assets/images/why_Miraai.svg';

const TrustMiraai = () => {
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

    const issues = [
        "Expensive studio shoots and high production costs",
        "Delays caused by lengthy planning and editing cycles",
        "Multiple vendors creating communication gaps",
        "Difficulty scaling content across languages and campaigns",
        "Re-shoots and revisions that increase overall cost"
    ];

    // Animation variants - only used on desktop
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.05
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div ref={sectionRef} className="bg-[#000004] min-h-auto py-20 px-4 md:px-8 relative overflow-hidden font-['Inter'] tracking-[0.5px]">
            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header Section */}
                {isMobile ? (
                    <div className="text-center mb-10">
                        <h2 className="text-[40px] font-bold text-white tracking-[0.5px] max-w-full px-2 mx-auto leading-tight mb-6">
                            Traditional Production Slows Down Modern Brands
                        </h2>
                        <p className="text-gray-400 text-[14px] tracking-[0.5px] mt-4 max-w-[600px] mx-auto leading-relaxed opacity-80">
                            Traditional video shoots require high budgets, long timelines, and many resources, making consistent content creation difficult.
                        </p>
                    </div>
                ) : (
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={headerVariants}
                    >
                        <h2 className="text-[40px] font-bold text-white tracking-[0.5px] max-w-none mx-auto leading-tight mb-6">
                            Traditional Production Slows Down Modern Brands
                        </h2>
                        <motion.p
                            className="text-gray-400 text-[21px] tracking-[0.5px] mt-4 max-w-[600px] mx-auto leading-relaxed font-medium opacity-80"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Traditional video shoots require high budgets, long timelines, and many resources, making consistent content creation difficult.
                        </motion.p>
                    </motion.div>
                )}

                {/* Content Section: Two Columns */}
                <div className="flex flex-col-reverse md:grid md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 md:gap-16 items-center">

                    {/* Left Column: Text and List */}
                    {isMobile ? (
                        <div className="pr-0">

                            <h4 className="text-white text-base font-semibold mb-4">
                                What Most Businesses Face Today:
                            </h4>

                            <ul className="list-none p-0">
                                {issues.map((issue, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center mb-3 text-gray-400 text-sm"
                                    >
                                        <span className="text-red-500 mr-3 font-bold text-base">
                                            ✕
                                        </span>
                                        {issue}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <motion.div
                            className="pr-4"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            <motion.h4
                                className="text-white text-xl font-semibold mb-6"
                                variants={textVariants}
                            >
                                What Most Businesses Face Today:
                            </motion.h4>

                            <motion.ul
                                className="list-none p-0"
                                variants={containerVariants}
                            >
                                {issues.map((issue, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center mb-4 text-gray-400 text-base"
                                        variants={listItemVariants}
                                    >
                                        <span className="text-red-500 mr-4 font-bold text-xl">
                                            ✕
                                        </span>
                                        {issue}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}

                    {/* Right Column: Illustration */}
                    {isMobile ? (
                        <div className="w-full flex justify-center items-center">
                            <img
                                src={WhyMiraaiImage}
                                alt="Why Trust Miraai"
                                className="w-full max-w-[280px] h-auto object-contain"
                            />
                        </div>
                    ) : (
                        <motion.div
                            className="w-full flex justify-center items-center"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={imageVariants}
                        >
                            <img
                                src={WhyMiraaiImage}
                                alt="Why Trust Miraai"
                                className="w-full h-auto object-contain"
                            />
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default TrustMiraai;
