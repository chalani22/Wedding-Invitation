import React, { useEffect, useState, useRef } from 'react';
import WatercolorLily from './WatercolorLily';
import RsvpScreen from './RsvpScreen';
import LocationScreen from './LocationScreen';
import ThankYouScreen from './ThankYouScreen';
import { generateBlessing } from '../services/geminiService';
import { submitRsvpToSheet, RsvpData } from '../services/spreadsheetService';

const MainScrollableContent: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [guestWish, setGuestWish] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isGeneratingWish, setIsGeneratingWish] = useState(false);
  const [rsvpKey, setRsvpKey] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-scale');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = new Date('2026-03-05T09:30:00');
    const update = () => {
      const diff = target.getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60)
      });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendWish = async () => {
    setIsGeneratingWish(true);
    try {
      const result = await generateBlessing("heartfelt guest wish");
      setGuestWish(result);
    } finally {
      setIsGeneratingWish(false);
    }
  };

  const handleRsvpSubmit = async (data: RsvpData) => {
    try {
      await submitRsvpToSheet(data);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Submission failed:", error);
      throw error;
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setRsvpKey(prev => prev + 1);
    const nameSection = document.getElementById('invitation-names');
    if (nameSection) {
      nameSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-background-light scroll-smooth animate-fade-in pb-20 overflow-hidden">
      {showSuccessModal && (
        <ThankYouScreen onNavigate={handleCloseSuccessModal} />
      )}

      {/* Host Section */}
      <section className="pt-20 px-4 flex flex-col items-center text-center space-y-8 reveal">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-gold-muted text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">TOGETHER WITH HEARTFELT BLESSINGS</h4>
          <div className="w-16 h-[0.5px] bg-primary/40"></div>
        </div>

        <div className="space-y-3">
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">Host / Invitation By</p>
          <div className="space-y-1">
            <h2 className="text-[#1b190d] text-3xl md:text-4xl font-display font-semibold italic">Mrs. Vasantha Perera</h2>
            <p className="text-gold-muted text-sm md:text-base font-display italic">Wife of Late Mr. Jayathilaka Rasnayaka</p>
          </div>
        </div>
      </section>

      {/* Main Invitation Card Section */}
      <section id="invitation-names" className="min-h-screen flex flex-col items-center justify-start py-12 px-4 md:px-12 relative">
        {/* Decorative parallax lilies */}
        <div style={{ transform: `translateY(${scrollY * 0.15}px)` }} className="absolute top-0 left-0 pointer-events-none transition-transform duration-100 ease-out">
            <WatercolorLily position="top-left" className="opacity-[0.08] scale-150" />
        </div>
        <div style={{ transform: `translateY(${-scrollY * 0.1}px)` }} className="absolute bottom-40 right-0 pointer-events-none transition-transform duration-100 ease-out">
            <WatercolorLily position="bottom-right" className="opacity-[0.08] scale-150" />
        </div>

        <div className="max-w-[850px] w-full bg-white shadow-2xl rounded-2xl p-8 md:p-20 text-center space-y-10 relative border border-primary/10 overflow-hidden reveal-scale">
          {/* Invitation Text */}
          <div className="space-y-6">
            <h3 className="text-[#1b190d] text-xl md:text-2xl font-medium font-display tracking-tight">Together with their families</h3>
            <div className="w-16 h-[0.5px] bg-primary/20 mx-auto"></div>
            <p className="text-gold-muted italic text-base md:text-lg font-display">request the honor of your presence at the marriage of</p>
          </div>

          {/* Names */}
          <h1 className="text-6xl md:text-8xl font-bold text-[#1b190d] tracking-tighter leading-tight font-display">
            Lakmini <span className="text-primary italic font-serif">&amp;</span> <br/> Shalinda
          </h1>

          <div className="flex items-center justify-center gap-4 py-4 text-primary/40">
             <div className="h-[0.5px] w-12 bg-primary/20"></div>
             <span className="material-symbols-outlined text-xl animate-pulse-slow">spa</span>
             <div className="h-[0.5px] w-12 bg-primary/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-4 p-8 border border-primary/10 rounded-xl bg-blush/10 hover:bg-blush/20 transition-colors duration-500 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm bg-white p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaUXBjTJ4ZQMr2TDnZPAj-fiWKXKu42QVrQUW9_ih1lla3Wf-xfkSEM5aUU6wZkxF_UJW1v2BsDNJqpUSGg9XNw7fiAIJfUSIlNhoggovUvUT9DGNRmEhu3_j_hqb_hcWozIzo8HE0ZDAshj6urUwsKfK2nN8soNjWqOWE2Ei5Nkm05GwYnTKtmmpZoC2eZjVJbzSDO4t1J4c2_7qto1nU5AdPVMZTiVOqAsEivT0N7TXSSOzH4AXbzDduGltzFxVDNqL5hAG1J_Je" alt="Daughter Icon" className="w-full h-full object-contain grayscale opacity-60" />
              </div>
              <div className="space-y-1">
                <p className="text-[#1b190d] text-[10px] font-bold uppercase tracking-[0.4em]">Daughter of</p>
                <p className="text-primary text-xl italic font-medium font-display">Mr. & Mrs. Rasnayaka</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border border-primary/10 rounded-xl bg-blush/10 hover:bg-blush/20 transition-colors duration-500 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm bg-white p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCurX3ti77N2RFRAwlgz0-hmasp3hyLku_MWTMvF-oz7UbWn2HjPD3mXx6BpGw4_LhGSBZseb7uM0WxoHSLkHDi121hf1S9Ad7oaqyYdfvfLt8KZpb-fQsgkr_QD9_mPsdQOs9npp5t7wpoYgjipXCeIepPaf_c2BgoWweFRueO6BC857RgWOLh6GzC8YZhN5mJ7JldI2z2RPpDn5N-mFyhKyDlYD6gZzdxg3OJqNUrRASj9AsmGCmc0d4urf0AX1GX8_gbVRYlUQ8s" alt="Son Icon" className="w-full h-full object-contain grayscale opacity-60" />
              </div>
              <div className="space-y-1">
                <p className="text-[#1b190d] text-[10px] font-bold uppercase tracking-[0.4em]">Son of</p>
                <p className="text-primary text-xl italic font-medium font-display">Mr. & Mrs. Ambagahawattage</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-primary/10 my-8"></div>

          <div className="space-y-3">
            <h4 className="text-primary text-sm font-bold uppercase tracking-[0.4em] mb-2">Save the Date</h4>
            <p className="text-4xl md:text-5xl font-display font-semibold text-[#1b190d]">05 March 2026</p>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="mt-12 w-full max-w-[850px] relative reveal">
          <div className="absolute inset-0 border border-primary/40 rounded-2xl -m-1.5 opacity-40 pointer-events-none"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-white/40 backdrop-blur-md rounded-2xl relative z-10 border border-white/50">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.mins },
              { label: 'Seconds', value: timeLeft.secs },
            ].map((unit, idx) => (
              <div key={unit.label} 
                   style={{ transitionDelay: `${idx * 150}ms` }}
                   className="bg-white/90 p-5 rounded-xl shadow-sm text-center flex flex-col gap-1 border border-primary/5 hover:border-primary/20 transition-all duration-300">
                <span className="text-4xl font-display font-bold text-primary">{unit.value.toString().padStart(2, '0')}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-muted">{unit.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 reveal">
          <p className="text-gold-muted italic text-lg font-display">We look forward to celebrating with you.</p>
        </div>
      </section>

      {/* Section: Timeline */}
      <section className="py-32 px-4 md:px-40 bg-white relative overflow-hidden">
        <div className="max-w-[960px] mx-auto text-center mb-24 reveal">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-[#1b190d] text-5xl md:text-6xl font-black leading-tight tracking-tight font-display">The Celebration Schedule</h2>
            <div className="w-24 h-1 bg-primary rounded-full"></div>
            <p className="text-[#9a8d4c] text-lg font-medium italic font-display">A beautiful journey begins here</p>
          </div>
        </div>

        <div className="relative max-w-[960px] mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary hidden md:block opacity-50 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {/* Event 1 */}
            <div className="flex flex-col md:flex-row items-center justify-start relative md:pb-32 group reveal">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-primary md:hidden"></div>
              <div className="w-full md:w-1/2 pr-0 md:pr-16 md:text-right pl-12 md:pl-0">
                <div className="relative bg-white border border-primary/30 p-10 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] overflow-hidden">
                  <div className="absolute -top-6 -left-6 w-32 h-32 opacity-[0.05] pointer-events-none group-hover:opacity-20 transition-all duration-1000">
                    <div className="w-full h-full bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCurX3ti77N2RFRAwlgz0-hmasp3hyLku_MWTMvF-oz7UbWn2HjPD3mXx6BpGw4_LhGSBZseb7uM0WxoHSLkHDi121hf1S9Ad7oaqyYdfvfLt8KZpb-fQsgkr_QD9_mPsdQOs9npp5t7wpoYgjipXCeIepPaf_c2BgoWweFRueO6BC857RgWOLh6GzC8YZhN5mJ7JldI2z2RPpDn5N-mFyhKyDlYD6gZzdxg3OJqNUrRASj9AsmGCmc0d4urf0AX1GX8_gbVRYlUQ8s")' }}></div>
                  </div>
                  <div className="relative z-10 space-y-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-2 block">The Ceremony</span>
                    <h3 className="text-3xl font-bold font-display text-[#1b190d]">Poruwa Ceremony</h3>
                    <div className="flex items-center gap-2 justify-start md:justify-end text-[#9a8d4c]">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <p className="text-base font-bold uppercase tracking-tight">9:30 A.M.</p>
                    </div>
                    <p className="text-[#9a8d4c] font-display text-sm italic leading-relaxed">
                      Please be seated by 9:15 a.m. to witness the traditional ceremony.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-20 top-1/2 -translate-y-1/2">
                <div className="size-12 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:rotate-[360deg] transition-all duration-1000">
                  <span className="material-symbols-outlined text-primary text-2xl">temple_hindu</span>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex flex-col md:flex-row items-center justify-end relative md:pb-32 group reveal">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-primary md:hidden"></div>
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-20 top-1/2 -translate-y-1/2">
                <div className="size-12 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:rotate-[-360deg] transition-all duration-1000">
                  <span className="material-symbols-outlined text-primary text-2xl">celebration</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 pl-12 md:pl-16">
                <div className="relative bg-white border border-primary/30 p-10 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] overflow-hidden">
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 opacity-[0.05] pointer-events-none group-hover:opacity-20 transition-all duration-1000 rotate-180">
                    <div className="w-full h-full bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBG3MYvqw7TOm-qbt_IxKFFf4QyjwjFDnWadauPsTGyASBFUNfN5li_FIxE7bOAH691je5k4Zx23d196WudGSgfxWmBNDFRsFBmRQsjXq6Yx6QaRcQKnwHla7_9wDUkEJGK2KEo2uMGJOqMTFziVtHaNt3jXUkMWMn-CnWPwpwQfPyfPOMRZApmoVriSuZxFfWlc2VC0vxdtTA15YvOr6rQWy1Phsl2VWp2ojt-eKwFbQpQ-HWVJP3mnB5Va4epH3DaT4ZrRoJ1hZX6")' }}></div>
                  </div>
                  <div className="relative z-10 space-y-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-2 block">The Party</span>
                    <h3 className="text-3xl font-bold font-display text-[#1b190d]">Reception</h3>
                    <div className="flex items-center gap-2 text-[#9a8d4c]">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <p className="text-base font-bold uppercase tracking-tight">9:00 A.M. – 3:30 P.M.</p>
                    </div>
                    <p className="text-[#9a8d4c] font-display text-sm italic leading-relaxed">
                      Join us for a celebratory luncheon and dancing following the ceremony.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12 md:mt-0 reveal">
              <div className="relative z-20 size-4 bg-primary rounded-full shadow-[0_0_15px_rgba(236,200,19,0.5)] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="reveal">
        <LocationScreen onNavigate={() => {}} />
      </div>
      
      <div className="reveal">
        <RsvpScreen key={rsvpKey} onSubmit={handleRsvpSubmit} onNavigate={() => {}} />
      </div>

      {/* Closing & AI Wish */}
      <section className="py-24 px-8 bg-blush/20 flex flex-col items-center text-center">
        <div className="relative flex flex-col items-center justify-center p-20 mb-20 reveal-scale">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 350 500" fill="none">
            <path d="M1 499V175C1 78.8984 78.8984 1 175 1C271.102 1 349 78.8984 349 175V499" stroke="#ecc813" strokeWidth="0.5" strokeOpacity="0.4" className="animate-draw" />
          </svg>
          <div className="space-y-6">
            <p className="text-gold-muted text-sm uppercase tracking-[0.3em]">With love,</p>
            <h2 className="text-5xl font-display font-bold text-[#1b190d]">Lakmini & Shalinda</h2>
          </div>
        </div>

        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-3xl border border-primary/10 shadow-2xl relative reveal">
          <span className="material-symbols-outlined text-primary text-4xl mb-4 animate-bounce">auto_awesome</span>
          <h3 className="text-xl font-display italic">Send your special wishes</h3>
          <p className="text-sm text-gold-muted font-display italic">Tap below to let Gemini help you craft a beautiful wedding wish for us.</p>
          
          {guestWish && (
            <div className="p-6 bg-blush/20 italic text-gold-muted border-l-2 border-primary rounded-r-lg animate-fade-in font-display shadow-inner">
              "{guestWish}"
            </div>
          )}
          
          <button 
            onClick={handleSendWish}
            disabled={isGeneratingWish}
            className="w-full flex items-center justify-center gap-3 py-4 px-8 border border-primary text-primary text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm hover:shadow-primary/20"
          >
            {isGeneratingWish ? (
              <>
                <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
                <span>Crafting Your Wish...</span>
              </>
            ) : (
              <span>Generate AI Wish</span>
            )}
          </button>
        </div>

        <footer className="mt-32 w-full flex flex-col items-center gap-8 border-t border-primary/5 pt-16 reveal">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold-muted mb-4">RSVP / Contact</p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center justify-center">
              <p className="text-sm font-bold tracking-[0.1em] hover:text-primary transition-colors cursor-pointer">077 524 3444</p>
              <div className="hidden sm:block w-px h-4 bg-primary/30"></div>
              <p className="text-sm font-bold tracking-[0.1em] hover:text-primary transition-colors cursor-pointer">077 137 2830</p>
            </div>
          </div>
          <p className="text-[8px] uppercase tracking-[0.5em] opacity-40">Handcrafted for Lakmini & Shalinda • 2026</p>
        </footer>
      </section>
    </div>
  );
};

export default MainScrollableContent;