import React, { useState } from 'react';
import { motion } from 'framer-motion';

const comparisonData = [
  {
    area: "Content Creation",
    diy: "Limited tools and skills",
    miraai: "Advanced AI + Professional Experts"
  },
  {
    area: "Design Quality",
    diy: "Basic and inconsistent",
    miraai: "Premium, brand-focused designs"
  },
  {
    area: "Production Speed",
    diy: "Slow and manual",
    miraai: "Fast and AI-powered delivery"
  },
  {
    area: "Cost Efficiency",
    diy: "Trial and error approach",
    miraai: "Optimized and affordable pricing"
  },
  {
    area: "Creative Strategy",
    diy: "Basic editing software",
    miraai: "Data-driven planning"
  },
  {
    area: "Editing & Effects",
    diy: "Basic editing software",
    miraai: "Professional-grade editing tools"
  },
  {
    area: "Scalability",
    diy: "Hard to scale campaigns",
    miraai: "Easily scalable production"
  },
  {
    area: "Final Output",
    diy: "Average results",
    miraai: "High-impact, conversion-focused output"
  }
];

export default function DoBest() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [tilt, setTilt] = useState({ x: 8, y: 0 });
  const [isTableHovered, setIsTableHovered] = useState(false);

  // Mouse movement handler for 3D tilt tracking cursor
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation: max 12 deg Y rotation, X rotation centered around 8 deg concave baseline
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = 8 + ((y - centerY) / centerY) * -10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsTableHovered(true);

  const handleMouseLeave = () => {
    setIsTableHovered(false);
    setTilt({ x: 8, y: 0 }); // Reset to default baseline concave angle
  };

  return (
    <section className="bg-[#000004] py-16 md:py-24 px-4 md:px-8 font-['Inter'] tracking-[0.5px] relative overflow-hidden">
      
      {/* Background Glows */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] blur-[160px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)' }}
      />

      <div className="max-w-[1240px] mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs md:text-sm font-semibold text-purple-300 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
            <span className="text-[#10B981]">✦</span> INTERACTIVE 3D CONCAVE TABLE <span className="text-[#10B981]">✦</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Do It Yourself <span className="text-purple-400 font-light italic font-serif">Vs</span> Miraai Expert Team
          </h2>
        </motion.div>

        {/* 3D CONCAVE TABLE WRAPPER WITH DYNAMIC MOUSE TILT TRACKING */}
        <div 
          className="hidden md:block relative my-8"
          style={{ perspective: '1200px' }}
        >
          {/* Mouse Reactive Concave 3D Card Container */}
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{
              rotateX: tilt.x,
              rotateY: tilt.y,
              scale: isTableHovered ? 1.01 : 1
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-[#0F0C1B] via-[#0A0714] to-[#05030A] overflow-hidden transition-shadow duration-300"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: isTableHovered
                ? 'inset 0 0 120px rgba(139, 92, 246, 0.35), 0 45px 100px rgba(0, 0, 0, 0.95), 0 0 50px rgba(139, 92, 246, 0.25)'
                : 'inset 0 0 100px rgba(139, 92, 246, 0.25), 0 35px 80px rgba(0, 0, 0, 0.85), 0 0 40px rgba(139, 92, 246, 0.15)'
            }}
          >
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-white/15 bg-gradient-to-r from-[#8B5CF6]/40 via-[#6366F1]/30 to-[#10B981]/40 text-white font-bold">
                  <th 
                    className="p-6 text-center w-[25%] border-r border-white/10 text-base md:text-lg tracking-wider font-extrabold uppercase bg-purple-900/30 backdrop-blur-md"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    Area
                  </th>
                  <th 
                    className="p-6 text-center w-[37.5%] border-r border-white/10 text-base md:text-lg tracking-wider font-extrabold uppercase bg-red-950/20 backdrop-blur-md"
                    style={{ transform: 'translateZ(5px)' }}
                  >
                    Do It Yourself
                  </th>
                  <th 
                    className="p-6 text-center w-[37.5%] text-base md:text-lg tracking-wider font-extrabold uppercase bg-emerald-950/30 backdrop-blur-md text-[#10B981] flex-1"
                    style={{ transform: 'translateZ(25px)' }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Miraai Expert Team <span className="text-emerald-400">✦</span>
                    </span>
                  </th>
                </tr>
              </thead>

              {/* Table Rows with Concave Side Curvature & Row Lift */}
              <tbody className="divide-y divide-white/10">
                {comparisonData.map((row, index) => {
                  const isHovered = hoveredRow === index;
                  
                  return (
                    <tr
                      key={index}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className="transition-all duration-300 cursor-default group"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isHovered ? 'translateZ(30px) scale(1.015)' : 'translateZ(0px)',
                        backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.12)' : 'transparent'
                      }}
                    >
                      {/* Area Cell (Left Curved Anchor) */}
                      <td 
                        className="p-6 text-gray-200 font-bold border-r border-white/10 text-base bg-[#8B5CF6]/15 group-hover:bg-[#8B5CF6]/35 group-hover:text-white transition-all duration-300"
                        style={{
                          transform: 'rotateY(4deg) translateZ(10px)',
                          transformOrigin: 'left center'
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-purple-400 group-hover:scale-150 transition-transform" />
                          {row.area}
                        </div>
                      </td>

                      {/* DIY Cell (Center Receded) */}
                      <td 
                        className="p-6 text-gray-400 text-base border-r border-white/10 group-hover:text-gray-200 transition-colors duration-300 bg-black/20"
                        style={{
                          transform: 'translateZ(0px)'
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xs font-bold flex-shrink-0">
                            ✕
                          </span>
                          <span>{row.diy}</span>
                        </div>
                      </td>

                      {/* Miraai Cell (Right Curved Popped Cell) */}
                      <td 
                        className="p-6 text-gray-100 text-base group-hover:text-white font-semibold transition-all duration-300 bg-emerald-950/10 group-hover:bg-emerald-950/25"
                        style={{
                          transform: 'rotateY(-4deg) translateZ(20px)',
                          transformOrigin: 'right center'
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#10B981]/20 border border-[#10B981]/60 flex items-center justify-center text-[#10B981] text-xs font-bold flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-white group-hover:text-emerald-300 transition-colors">
                            {row.miraai}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Mobile View - Concave 3D Stacking Cards */}
        <div className="md:hidden flex flex-col gap-6">
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-b from-[#140D28] to-[#0A0615] border border-purple-500/30 rounded-3xl p-6 flex flex-col gap-5 shadow-[0_15px_35px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(139,92,246,0.15)] relative overflow-hidden"
            >
              <h3 className="text-white font-black text-xl border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                {row.area}
              </h3>

              <div className="flex flex-col gap-3">
                {/* DIY */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 border border-white/5">
                  <span className="text-red-500 font-bold text-sm">✕</span>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase block">DIY</span>
                    <p className="text-gray-300 text-xs sm:text-sm">{row.diy}</p>
                  </div>
                </div>

                {/* Miraai */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-950/20 border border-[#10B981]/30">
                  <svg className="w-4 h-4 text-[#10B981] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-[10px] text-[#10B981] font-bold uppercase block">Miraai Expert Team</span>
                    <p className="text-white text-xs sm:text-sm font-bold">{row.miraai}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
