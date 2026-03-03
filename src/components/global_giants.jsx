// import React, { useState, useEffect } from 'react';

// // Importing all requested logos
// import allenSolly from '../assets/images/Allen_Solly-SIL0FckF_brandlogos.net.svg';
// import crocs from '../assets/images/crocs.svg';
// import huggingFace from '../assets/images/huggingface.svg';
// import logo4 from '../assets/images/id8mzHBwLP_logos.svg';
// import logo5 from '../assets/images/idVsOLKccS_1770448108912.png';
// import loreal from '../assets/images/L\'Oréal_logo.svg';
// import nike from '../assets/images/Logo_NIKE.svg';
// import maybelline from '../assets/images/Maybelline-Logo.svg';
// import nykaa from '../assets/images/Nykaa_New_Logo.svg';
// import tanishq from '../assets/images/Tanishq_Logo.svg';
// import zara from '../assets/images/Zara_Logo.svg';

// const GlobalGiants = () => {
//     const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

//     useEffect(() => {
//         const checkMobile = () => {
//             setIsMobile(window.innerWidth < 768);
//         };
//         checkMobile();
//         window.addEventListener('resize', checkMobile);
//         return () => window.removeEventListener('resize', checkMobile);
//     }, []);

//     const companies = [
//         { name: 'Allen Solly', icon: allenSolly },
//         { name: 'Crocs', icon: crocs },
//         { name: 'Hugging Face', icon: huggingFace, keepColor: true },
//         { name: 'Biba', icon: logo4, keepColor: true },
//         { name: 'Malabar', icon: logo5, keepColor: true },
//         { name: 'L\'Oréal', icon: loreal },
//         { name: 'Nike', icon: nike },
//         { name: 'Maybelline', icon: maybelline },
//         { name: 'Nykaa', icon: nykaa },
//         { name: 'Tanishq', icon: tanishq },
//         { name: 'Zara', icon: zara },
//     ];

//     // Duplicate list for seamless scrolling
//     const scrollingCompanies = [...companies, ...companies];

//     return (
//         <div className="bg-[#000004] min-h-auto py-6 md:py-12 px-4 md:px-8 relative overflow-hidden flex items-center justify-center">
//             <style>
//                 {`
//                 @keyframes scroll {
//                     0% { transform: translateX(0); }
//                     100% { transform: translateX(-50%); }
//                 }
//                 @keyframes pulse {
//                     0%, 100% {
//                         opacity: 0.5;
//                         transform: translate(-50%, -50%) scale(1);
//                     }
//                     50% {
//                         opacity: 0.8;
//                         transform: translate(-50%, -50%) scale(1.1);
//                     }
//                 }
//                 `}
//             </style>

//             {/* Animated background glow - matching Percentage section */}
//             {!isMobile && (
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite] pointer-events-none z-0" />
//             )}

//             <div className="max-w-[1200px] w-full relative z-[1]">
//                 {/* Header */}
//                 <div className="text-center mb-10 md:mb-16 font-['Inter']">
//                     <h2 className="text-[25px] md:text-[40px] font-bold text-white mb-6 tracking-[0.5px]">
//                         Trusted by Global Giants
//                     </h2>
//                     <p className="text-gray-400 text-[18px] md:text-[21px] max-w-[850px] mx-auto leading-relaxed font-medium tracking-[0.5px] opacity-80 px-2 mt-4">
//                         Trusted By Businesses, Creators, And Institutions Across India For Scalable Content Production
//                     </p>
//                 </div>

//                 {/* Scrolling Marquee - Clean Minimal Logos */}
//                 <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//                     <div
//                         className={`flex w-max py-4 ${isMobile ? 'gap-8 animate-[scroll_20s_linear_infinite]' : 'gap-16 animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]'}`}
//                     >
//                         {scrollingCompanies.map((company, index) => (
//                             <div
//                                 key={index}
//                                 className={`flex items-center justify-center transition-all duration-300 ease-in-out ${isMobile
//                                     ? 'min-w-[100px] h-12'
//                                     : 'min-w-[160px] h-20'
//                                     } ${company.keepColor
//                                         ? 'hover:scale-110'
//                                         : 'brightness-0 invert opacity-70 hover:brightness-0 hover:invert hover:opacity-100 hover:scale-110'
//                                     }`}
//                             >
//                                 <img
//                                     src={company.icon}
//                                     alt={company.name}
//                                     className={`max-w-full max-h-full object-contain ${isMobile
//                                         ? 'h-[30px] w-auto'
//                                         : company.name === 'Hugging Face'
//                                             ? 'h-[50px]'
//                                             : 'h-[50px] w-auto'
//                                         } ${company.name === 'Biba' && !isMobile ? 'w-[120px] h-auto' : ''} ${company.name === 'Biba' && isMobile ? 'w-[80px] h-auto' : ''}`}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GlobalGiants;
