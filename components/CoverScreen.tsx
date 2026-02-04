import React, { useEffect, useState } from 'react';
import WatercolorLily from './WatercolorLily';

interface CoverScreenProps {
  onOpen: () => void;
}

const CoverScreen: React.FC<CoverScreenProps> = ({ onOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsAnimating(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-blush overflow-hidden animate-fade-in">
      <WatercolorLily position="top-left" className="transition-transform duration-700 ease-out" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }} />
      <WatercolorLily position="bottom-right" className="transition-transform duration-700 ease-out" style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }} />

      <header className="absolute top-0 w-full flex justify-between px-10 py-8 opacity-60">
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase">L & S Wedding</p>
        <button className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-lg">volume_up</span>
          <span className="text-[8px] font-bold uppercase tracking-widest">Tap to play music</span>
        </button>
      </header>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated SVG Arch */}
        <div className="relative flex flex-col items-center justify-center p-12">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 350 500" fill="none">
            <path 
              d="M1 499V175C1 78.8984 78.8984 1 175 1C271.102 1 349 78.8984 349 175V499" 
              stroke="#ecc813" 
              strokeWidth="0.8" 
              className={`arch-path ${isAnimating ? 'animate-draw' : ''}`}
            />
          </svg>
          
          <div className="text-center space-y-8 py-20 px-10">
            <p className="text-gold-muted italic text-lg animate-blur-to-sharp delay-300 font-display">Together with heartfelt blessings</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1b190d] animate-blur-to-sharp delay-500 font-display leading-tight">
              Lakmini <br/> <span className="text-primary italic font-serif">&amp;</span> <br/> Shalinda
            </h1>
            <div className="space-y-1 animate-blur-to-sharp delay-700">
              <p className="text-[#1b190d] text-sm font-bold uppercase tracking-[0.3em]">Thursday, 05th March 2026</p>
              <p className="text-gold-muted text-xs uppercase tracking-[0.4em]">Amari Colombo Hotel</p>
            </div>
            
            <div className="pt-10 animate-blur-to-sharp delay-1000">
              <button 
                onClick={onOpen}
                className="group relative px-12 py-4 bg-white border border-primary text-primary text-xs font-bold uppercase tracking-[0.4em] rounded-lg transition-all hover:bg-primary hover:text-white shadow-lg hover:shadow-primary/20"
              >
                Open Invitation
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/30 animate-bounce">
        <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
      </div>
    </div>
  );
};

export default CoverScreen;