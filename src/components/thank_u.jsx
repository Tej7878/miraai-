import React from 'react';
import rightIcon from '../assets/images/right.svg';

const ThankU = ({ onClose }) => {
    return (
        <div className="tu-wrap px-4 py-12 md:py-16 text-center">
            <div className="tu-inner max-w-[800px] mx-auto">
                {/* Success Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="tu-check-circle">
                        <img src={rightIcon} alt="Success" className="w-[40px] h-[40px]" />
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Thank You For Contacting Miraai!
                </h1>
                <p className="text-gray-400 text-sm md:text-base mb-12 max-w-[600px] mx-auto leading-relaxed">
                    We Have Successfully Received Your Request.
                    <br />
                    Our Team Will Connect With You Shortly To Understand Your Requirements And Provide A Customized Solution.
                </p>

                {/* Info Card */}
                <div className="tu-card border border-[#262626] rounded-2xl p-8 md:p-10 mb-12 backdrop-blur-[16px]">
                    <h3 className="text-xl font-bold text-white mb-10">What Happens Next ?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="tu-icon-box mb-4">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                            <span className="text-white text-sm font-medium">Requirement Review</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="tu-icon-box mb-4">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                            </div>
                            <span className="text-white text-sm font-medium">Content Analysis</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="tu-icon-box mb-4">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                            <span className="text-white text-sm font-medium">Personalized Contact</span>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Looking Forward To Working With You
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Our Team Is Committed To Helping You Achieve Your Content Goals.
                        <br />
                        We Will Be In Touch With You Soon.
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="bg-[#8B5CF6] text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-[#7C4FE0] transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 active:scale-95"
                >
                    <span>✦</span> Back to Homepage <span>✦</span>
                </button>
            </div>

            <style>{`
                .tu-wrap {
                    font-family: 'Inter', system-ui, sans-serif;
                    position: relative;
                    letter-spacing: 0.5px !important;
                }
                .tu-check-circle {
                    width: 70px;
                    height: 70px;
                    background: #8B5CF6;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    box-shadow: 0 0 40px rgba(139, 92, 246, 0.5);
                }
                .tu-icon-box {
                    width: 44px;
                    height: 44px;
                    background: rgba(139, 92, 246, 0.9);
                    border-radius: 10px;
                    display: grid;
                    place-items: center;
                    color: white;
                }
                .tu-card {
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%);
                }
            `}</style>
        </div>
    );
};

export default ThankU;
