import React, { useState, useEffect } from 'react';

interface DetailsScreenProps {
  onNavigate: (view: 'invitation' | 'details' | 'rsvp' | 'thank-you' | 'schedule' | 'location') => void;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ onNavigate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 365,
    hours: 12,
    minutes: 48,
    seconds: 22
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-blush animate-fade-in overflow-x-hidden selection:bg-primary/20">
      <div className="fixed inset-0 pointer-events-none gold-dust opacity-10"></div>
      
      <header className="relative z-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-40 py-6 border-b border-primary/10">
        <div className="flex items-center gap-3 mb-4 md:mb-0 cursor-pointer" onClick={() => onNavigate('invitation')}>
          <span className="material-symbols-outlined text-primary text-3xl">local_florist</span>
          <h2 className="text-[#1b190d] text-lg font-bold tracking-tight font-display">L & S Wedding</h2>
        </div>
        <nav className="flex items-center gap-6 md:gap-10">
          {[
            { label: 'Events', view: 'schedule' as const },
            { label: 'Location', view: 'location' as const },
            { label: 'RSVP', view: 'rsvp' as const },
          ].map(item => (
            <a 
              key={item.label} 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate(item.view); }} 
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${item.label === 'RSVP' ? 'text-primary' : 'text-[#1b190d] hover:text-primary'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center py-12 px-4 md:py-20">
        <div className="w-full max-w-[850px] bg-white shadow-2xl rounded-2xl p-10 md:p-24 text-center space-y-12 relative overflow-hidden animate-slide-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="space-y-4">
            <h3 className="text-[#1b190d] text-2xl font-medium font-display tracking-tight">Together with their families</h3>
            <div className="flex justify-center items-center gap-4">
              <div className="h-[1px] w-20 bg-primary/20"></div>
              <p className="text-gold-muted italic text-lg">request the honor of your presence at the marriage of</p>
              <div className="h-[1px] w-20 bg-primary/20"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-[#1b190d] tracking-tighter leading-tight font-display">
            Lakmini <span className="text-primary italic font-serif">&amp;</span> <br/> Shalinda
          </h1>

          <div className="flex items-center justify-center gap-4 text-primary/40">
            <div className="h-[1px] w-12 bg-primary/20"></div>
            <span className="material-symbols-outlined text-2xl">spa</span>
            <div className="h-[1px] w-12 bg-primary/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto">
            <div className="flex flex-col items-center gap-4 p-6 border border-primary/10 rounded-xl bg-blush/10">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaUXBjTJ4ZQMr2TDnZPAj-fiWKXKu42QVrQUW9_ih1lla3Wf-xfkSEM5aUU6wZkxF_UJW1v2BsDNJqpUSGg9XNw7fiAIJfUSIlNhoggovUvUT9DGNRmEhu3_j_hqb_hcWozIzo8HE0ZDAshj6urUwsKfK2nN8soNjWqOWE2Ei5Nkm05GwYnTKtmmpZoC2eZjVJbzSDO4t1J4c2_7qto1nU5AdPVMZTiVOqAsEivT0N7TXSSOzH4AXbzDduGltzFxVDNqL5hAG1J_Je" alt="Lily" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <p className="text-[#1b190d] text-[10px] font-bold uppercase tracking-[0.3em]">Daughter of</p>
                <p className="text-primary text-xl italic font-medium">Mr. & Mrs. Perera</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 border border-primary/10 rounded-xl bg-blush/10">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo3FLpzM9OI-Jz1V6GAgdLMA-AujD_AfL-tS_J10rxzGDEWT_lzV8i6h3ILPca3QuacyDi4popv3RUHaOT4gBwW7wS9fSe82RLSQ_uWEqvyvM9T0YPdwb3mY-ONSqC3jUY2ehjXbUVoBId2hxnddhbbNFl_W4m2w3VOZE6uqZuu74BnDjMHETCs6m2F1YDiaTqx1V5_Vkm9xlq6TKPsDGHQS5xaVn15HvUMoHwFpKD6nZMvW1CUlEct6H1wPgoxEfzOny8tqpheJ55" alt="Lily" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <p className="text-[#1b190d] text-[10px] font-bold uppercase tracking-[0.3em]">Son of</p>
                <p className="text-primary text-xl italic font-medium">Mr. & Mrs. Silva</p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-primary/10">
            <h4 className="text-primary text-lg font-bold uppercase tracking-[0.4em] mb-3">Save the Date</h4>
            <p className="text-4xl md:text-5xl font-display font-semibold text-[#1b190d]">05 March 2026</p>
          </div>
        </div>

        <div className="mt-16 w-full max-w-[850px] relative">
          <div className="absolute inset-0 border border-primary/30 rounded-2xl -m-2 opacity-50"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl relative z-10 border border-white/50">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map(unit => (
              <div key={unit.label} className="bg-white/90 p-6 rounded-xl shadow-sm text-center flex flex-col gap-1 border border-primary/5">
                <span className="text-4xl md:text-5xl font-display font-bold text-primary">{unit.value.toString().padStart(2, '0')}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-muted">{unit.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-8">
          <button 
            onClick={() => onNavigate('rsvp')}
            className="px-16 py-5 bg-primary text-[#1b190d] font-bold text-xl uppercase tracking-[0.3em] rounded-full shadow-2xl hover:bg-[#e0be10] transition-all hover:scale-105 active:scale-95 shadow-primary/20"
          >
            RSVP Online
          </button>
          <p className="text-gold-muted italic text-lg font-display">We look forward to celebrating with you.</p>
        </div>
      </main>

      <footer className="py-16 text-center space-y-6">
        <span className="material-symbols-outlined text-primary/40 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
        <p className="text-gold-muted text-xs uppercase tracking-[0.5em] font-bold">Colombo, Sri Lanka</p>
      </footer>
    </div>
  );
};

export default DetailsScreen;
