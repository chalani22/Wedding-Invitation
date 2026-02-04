
import React, { useState, useEffect, useRef } from 'react';
import { generateBlessing } from '../services/geminiService';

interface InvitationScreenProps {
  onOpen: () => void;
}

const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3"; 

const InvitationScreen: React.FC<InvitationScreenProps> = ({ onOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [blessing, setBlessing] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.error("Audio playback failed:", err);
            setIsPlaying(false);
          });
        }
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

  const handleGenerateBlessing = async (theme: string) => {
    setIsGenerating(true);
    const result = await generateBlessing(theme);
    setBlessing(result);
    setIsGenerating(false);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-blush dark:bg-background-dark font-display animate-fade-in overflow-hidden">
      {/* Subtle Particles */}
      <div className="absolute inset-0 gold-dust opacity-10 pointer-events-none"></div>

      {/* Watercolor Lilies */}
      <div className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 opacity-40 pointer-events-none">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPKwYrLuaYUlOnaEqrFCsn9VGu0ccr7D0XY9U6qXXztlK7P-RQAcHwVr4UWYStQBcxfvvxcpTYYAtcymGLLC0G-8lzEPsJyZmId4Zg8IV23AprvFgYq93YHasX8P_XXTWgUPbcKbgZ-e6SlhVpcqcrihaTffCjJAErFAY8Hbj30OaQLJRGcV5KpS1BcKmydT_LTWaTM0sHCgTUldDsU2P2Mlk31PY58fsc4bs4V71kzPoOWn_FSRsfelGoOoMdKA1IQZvIzMO_5i-T" 
          alt="Top Left Lily" 
          className="w-full h-full object-contain rotate-12"
        />
      </div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 md:w-96 md:h-96 opacity-40 pointer-events-none">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAImvZYo_FISpay4S4q4j0zRJT4bIVx_UduOxnTE-Fwh7IZpjKBcJicA0PZi56GftICLujUO6VodM4eh3uG7ZO05KTY-3KI91migI6NhuuYrdIYThGX_9en4NES38bfYEPryu8pJm7EW_HGIT1SGdMSL9K7n1WHSKEAv6jj_cRULwU_HETw26wksVP9w9RuAl7OqGWSlAhWKsbX3_1RRmKBayg1yaDve3gWcKJP4T-UG0_RIq1_vXj6GBADxPGyE51gWX00gwEaZiJi" 
          alt="Bottom Right Lily" 
          className="w-full h-full object-contain -rotate-12"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">local_florist</span>
          </div>
          <h2 className="text-[#1b190d] dark:text-ivory text-xl font-bold tracking-widest uppercase">L & S</h2>
        </div>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-3 px-4 py-2 bg-ivory/80 dark:bg-background-dark/50 border border-primary/30 rounded-full shadow-sm hover:shadow-md transition-all"
        >
          <span className="material-symbols-outlined text-primary text-xl">
            {isPlaying ? 'volume_up' : 'volume_off'}
          </span>
          <span className="text-sm font-medium text-[#9a8d4c] uppercase tracking-tighter">
            {isPlaying ? 'Music Playing' : 'Tap to play music'}
          </span>
        </button>
      </header>

      {/* Main Hero */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        <div className="arch-frame w-full max-w-[450px] aspect-[3/4] flex flex-col items-center justify-center p-8 md:p-12 bg-ivory/10 backdrop-blur-[1px] relative border-[#ecc813] border-opacity-40 rounded-t-[1000px] border-[1px]">
          <div className="text-center space-y-10 animate-slide-up">
            <div className="space-y-4">
              <p className="text-[#9a8d4c] italic text-lg md:text-xl font-light">
                Together with heartfelt blessings
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-[#1b190d] dark:text-ivory leading-tight tracking-tight">
                Lakmini <br/>
                <span className="text-primary italic font-serif text-4xl md:text-5xl mx-2">&amp;</span> <br/>
                Shalinda
              </h1>
            </div>

            <div className="w-16 h-[1px] bg-primary/40 mx-auto"></div>

            <div className="space-y-2">
              <p className="text-[#1b190d] dark:text-ivory/80 text-base md:text-lg font-medium tracking-wide uppercase">
                Saturday, 12th October 2024
              </p>
              <p className="text-[#9a8d4c] text-sm md:text-base tracking-widest uppercase font-light">
                The Grand Ballroom
              </p>
            </div>

            {/* Button */}
            <div className="pt-8">
              <button 
                onClick={onOpen}
                className="group relative inline-flex items-center justify-center px-10 py-4 font-bold transition-all duration-200 bg-ivory border-2 border-primary rounded-lg shadow-[0_4px_0_0_rgba(236,200,19,1)] active:shadow-none active:translate-y-1 hover:brightness-105"
              >
                <span className="relative text-[#1b190d] text-lg uppercase tracking-[0.2em]">Open Invitation</span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary/30 animate-bounce">
            <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
          </div>
        </div>

        {/* Gemini Blessing Section */}
        <section className="mt-12 max-w-lg w-full text-center space-y-4 animate-fade-in delay-500">
           {blessing && (
            <div className="p-6 bg-white/40 backdrop-blur-sm border border-primary/20 rounded-2xl italic text-[#1b190d] shadow-sm animate-fade-in mb-4">
              "{blessing}"
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-2">
            {['Poetic', 'Traditional'].map((theme) => (
              <button
                key={theme}
                disabled={isGenerating}
                onClick={() => handleGenerateBlessing(theme)}
                className="px-4 py-1.5 rounded-full border border-primary/30 text-gold-muted text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
              >
                {isGenerating ? 'Writing...' : `Gemini ${theme} Blessing`}
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-10">
            <button className="text-primary hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">favorite</span>
            </button>
            <button className="text-primary hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">share</span>
            </button>
            <button className="text-primary hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">calendar_today</span>
            </button>
          </div>
          <p className="text-[#9a8d4c] text-xs font-medium tracking-[0.3em] uppercase opacity-70">
            © 2024 Lakmini & Shalinda
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InvitationScreen;
