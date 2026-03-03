import React, { useState, useEffect, useRef } from 'react';

const stats = [
    { value: 99.8, suffix: '%', label: 'Satisfaction Rate' },
    { value: 24, suffix: '/7', label: 'AI Availability' },
    { value: 70, suffix: '%', label: 'Cost Reduction' },
    { value: 10, suffix: 'x', label: 'Faster Delivery' }
];

const Percentage = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Check mobile first
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Check if mobile - if yes, set final values immediately, no animation
        const isMobileNow = window.innerWidth < 768;

        if (isMobileNow) {
            // Mobile: No animation, show final values immediately
            setCounts(stats.map(stat => stat.value));
        } else {
            // Desktop: Animate numbers counting up

            const duration = 3000;
            const steps = 60;
            const interval = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;

                setCounts(stats.map(stat => {
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    return stat.value * easeOutQuart;
                }));

                if (currentStep >= steps) {
                    clearInterval(timer);
                    setCounts(stats.map(stat => stat.value));
                }
            }, interval);

            return () => {
                clearInterval(timer);
                window.removeEventListener('resize', checkMobile);
            };
        }

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <section className="bg-[#000004] min-h-auto flex items-center justify-center py-20 px-4 md:px-8 relative overflow-hidden tracking-[0.5px]">
            {/* Animated background glow - only on desktop */}
            {!isMobile && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite] pointer-events-none" />
            )}

            <style>
                {`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.5;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    50% {
                        opacity: 0.8;
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>

            <div
                ref={containerRef}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-[1200px] w-full relative z-[1] font-['Inter']"
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`bg-[rgba(255,255,255,0.02)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-xl md:rounded-2xl py-6 px-3 md:py-10 md:px-8 text-center cursor-pointer relative overflow-hidden group hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(139,92,246,0.5)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)] ${isMobile ? '' : 'transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] md:hover:-translate-y-2 md:hover:scale-[1.02]'}`}
                        style={{
                            animationDelay: isMobile ? '0s' : `${(index + 1) * 0.1}s`
                        }}
                    >
                        {/* Shimmer effect on hover - only desktop */}
                        {!isMobile && (
                            <div className="absolute top-0 -left-full w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] transition-[left] duration-500 group-hover:left-full" />
                        )}

                        <div className="inline-block text-xl md:text-3xl font-bold text-white mb-1 md:mb-3 tracking-[0.5px] bg-gradient-to-br from-white to-[#e0e0e0] bg-clip-text text-transparent relative z-[1] pr-[4px]">
                            {index === 1
                                ? Math.floor(counts[index]) + stat.suffix
                                : counts[index].toFixed(index === 0 ? 1 : 0) + stat.suffix
                            }
                        </div>
                        <div className="text-gray-400 text-[10px] md:text-sm font-medium tracking-[0.5px] relative z-[1]">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Percentage;
