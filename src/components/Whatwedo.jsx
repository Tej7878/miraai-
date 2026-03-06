import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import whatwedoImg from '../assets/images/what we do.jpeg';

const Whatwedo = () => {
    const sectionRef = useRef(null);
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const isInView = useInView(sectionRef, { once: false, amount: 0.15, margin: "-50px" });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const benefits = [
        "High Production Costs And Large Budgets",
        "Weeks Or Months Of Turnaround Time",
        "Multiple Agencies And Vendors",
        "Language Localization Barriers",
        "Costly Re-Shoots And Revisions"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section ref={sectionRef} className="bg-[#000004] py-20 px-4 md:px-8 relative overflow-hidden tracking-[0.5px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            <style>{`
                .wwd-section * {
                    font-family: 'Inter', sans-serif !important;
                }
            `}</style>
            <div className="max-w-[1200px] mx-auto wwd-section">

                <div className="text-center mb-9 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="text-[25px] md:text-[40px] font-bold text-white tracking-[0.5px] max-w-[1000px] mx-auto leading-tight mb-6"
                    >
                        Create Premium Content Faster With <span className='bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent font-semibold'> Miraai </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-[18px] md:text-[21px] lg:text-[20px] font-medium tracking-[0.5px] opacity-80 max-w-[850px] mx-auto leading-relaxed"
                    >
                        Miraai combines advanced AI with human creativity to deliver enterprise-grade content.
                    </motion.p>
                </div>

                {/* Content: Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">



                    {/* Left side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8 }}
                        className="w-full aspect-square md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden relative"
                    >
                        <img
                            src={whatwedoImg}
                            alt="What we do"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right side: Text and List */}
                    <div className="flex flex-col">
                        <motion.h4
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            className="text-white text-sm sm:text-base md:text-lg mb-4 md:mb-6 font-bold tracking-[0.5px]"
                        >
                            Why Brands Choose Miraai:
                        </motion.h4>

                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="space-y-4 md:space-y-5"
                        >
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start gap-3 md:gap-4"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            className="w-4 h-4 md:w-5 md:h-5 text-[#22c55e]"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3.5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-400 text-sm sm:text-base md:text-lg font-normal leading-tight tracking-[0.5px]">
                                        {benefit}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Whatwedo;
