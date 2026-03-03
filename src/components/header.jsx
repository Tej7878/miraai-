import React, { useState, useEffect } from 'react';
import miraiLogo from '../assets/images/mirai.svg';
import Form from './form';

const Header = ({ openForm }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Scroll handler
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '95%',
                    maxWidth: '1200px',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    pointerEvents: 'auto',
                }}
            >
                <div
                    className={`w-full flex items-center justify-between px-4 md:px-8 py-2 md:py-3 rounded-2xl md:rounded-3xl transition-all duration-400 ease-in-out ${isScrolled
                        ? 'bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
                        : 'bg-transparent border border-transparent shadow-none'
                        }`}
                >
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img
                            src={miraiLogo}
                            alt="Mirai Logo"
                            className="h-8 md:h-10 w-auto"
                        />
                    </div>

                    {/* Button Section */}
                    <button
                        onClick={openForm}  
                        className="group relative bg-white lg:px-6 text-black border-none py-2 px-2 md:py-[0.6rem]  rounded-[2rem] font-bold font-['Inter'] tracking-[0.5px] text-xs md:text-[0.9rem] cursor-pointer transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(255,255,255,0.2)] overflow-hidden"
                    >
                        <span className="relative block overflow-hidden">
                            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full whitespace-nowrap">
                                <span className="relative z-10 mr-2">✦</span>
                                Get Started
                                <span className="relative z-10 ml-2">✦</span>
                            </span>
                            <span className="absolute inset-0 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 whitespace-nowrap">
                                <span className="relative z-10 mr-2">✦</span>
                                Get Started
                                <span className="relative z-10 ml-2">✦</span>
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
