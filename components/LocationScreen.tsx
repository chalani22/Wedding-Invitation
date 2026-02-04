import React from 'react';

interface LocationScreenProps {
  onNavigate: (view: any) => void;
}

const LocationScreen: React.FC<LocationScreenProps> = ({ onNavigate }) => {
  const handleOpenMaps = () => {
    window.open("https://www.google.com/maps/place/SAFFIRA+BALLROOM+AMARI+COLOMBO+HOTEL/data=!4m2!3m1!1s0x3ae25943001daa1b:0xb3651ae58f4149c8?sa=X&ved=1t:242&ictx=111", "_blank");
  };

  const handleGetDirections = () => {
    window.open("https://www.google.com/maps/dir//SAFFIRA+BALLROOM+AMARI+COLOMBO+HOTEL/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3ae25943001daa1b:0xb3651ae58f4149c8?sa=X&ved=1t:155782&ictx=111", "_blank");
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-background-light overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 opacity-10 pointer-events-none grayscale brightness-125">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpH2MmDj1_noHc42kjMFd_c0Q5cvSWNWDD5DDdL53kTM0e0CsT36APof3W0HebsFspxYMzLD2aQPhch7bbbuA8TdyZ__YoUcVjvjXRfAeCOkUk8enFkpfrl35oG0u9JlecOWaITKpHyd7r-d-sMAMPz3kl482AggifdfehRRqAHGiah2nV1Iiz9N3k7_SYOg6I1ZfrSSa677TGHs1cXSj8WgtqswlnRvMWTEgou0gaqsBsP8bvxXAQaFjCZ7aeX1diPFh_8zq-ykki" 
          alt="Watercolor Lily" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none rotate-180 grayscale brightness-125">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMhzu9J8qR7btW7aI4ORtjmElDaTOfJpa7ucN5EEwZI_JLrQMsQKcbbWXekVUfEnOiFqgbrY7wDL-64VB29iNXkiFYB8CrI7HFTATmGfLzb6aTzU1NOgaj0XZV9VrvIS9EJ3j5uCsNcrU7SxfOA2KJYrNb1SxyqwRqJhTTrZUodjghEhR-kE5N71_wcQvq072VJOWp6B-GeXpZsmY0nPSNYsBJOArEabDbVY7ONm804zOf-lfcvXDas5wOH0e_b6zmHj_GvvIBdR0r" 
          alt="Watercolor Lily" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-[0.4em] mb-2 font-display">The Venue</span>
          <h1 className="text-6xl md:text-8xl font-bold italic text-[#1b190d] font-display">Location</h1>
          <div className="w-28 h-px bg-primary/40 mt-8"></div>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden border border-primary/10 transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Info Section */}
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-2xl">hotel</span>
                  <p className="text-xs font-bold uppercase tracking-[0.3em]">Reception & Ceremony</p>
                </div>
                
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-bold italic font-display text-[#1b190d]">Sapphira Ballroom</h2>
                  <p className="text-xl text-gold-muted font-display">Amari Colombo Hotel</p>
                </div>

                <div className="h-px w-12 bg-primary/20"></div>

                <p className="text-base text-gold-muted leading-relaxed font-display">
                  601 Galle Road, <br/>
                  Colombo 00300, Sri Lanka
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleOpenMaps}
                  className="flex-1 flex items-center justify-center gap-2 h-14 rounded-lg border-2 border-primary text-[#1b190d] font-bold text-sm tracking-wide hover:bg-primary/5 transition-all group"
                >
                  <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">map</span>
                  <span>Open in Google Maps</span>
                </button>
                <button 
                  onClick={handleGetDirections}
                  className="flex-1 flex items-center justify-center gap-2 h-14 rounded-lg bg-primary text-[#1b190d] font-bold text-sm tracking-wide hover:brightness-105 transition-all shadow-lg shadow-primary/20 group"
                >
                  <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">directions</span>
                  <span>Get Directions</span>
                </button>
              </div>
            </div>

            {/* Map Section */}
            <div className="relative min-h-[450px] md:min-h-full bg-primary/5 overflow-hidden">
              <div className="absolute inset-0 grayscale contrast-[0.8] sepia-[0.2] opacity-80 transition-all duration-700 group-hover:scale-105">
                <div 
                  className="w-full h-full bg-center bg-cover" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZi7ZhQv6onr_xlh_eSWL2Am7F3VCK21-5M5962hZfvaPe7_mqooXfAwnzqhp3aYzozA1ROATfgBOdI99iRo7JmCLOUh-aIEHb4i70FyVW5yzmft6SwbRP8b-BSUOEvtqC07d9wodNor5NdIdHh3w6mIgaDI8PyqrHtFc_epg5yvZVyuGEVMGm02tf1qy2LYrnYH_oaLctAECjWh6ULe2RH0Gl2dFqzVzm3yLJN8hk5WMfaXQbzzeLTPm-4jpm1p94m3dB5z5TVCP8")' }}
                ></div>
              </div>
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none"></div>

              {/* Styled Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                {/* Information Bubble */}
                <div className="bg-primary text-[#1b190d] px-5 py-2 rounded-full text-[10px] font-bold shadow-2xl mb-1 flex items-center gap-2 whitespace-nowrap animate-fade-in">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <span>L & S Wedding</span>
                </div>
                
                {/* Pin Point */}
                <div className="relative flex flex-col items-center">
                  <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1b190d] text-base font-bold">location_on</span>
                  </div>
                  {/* Pin Tail */}
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-primary -mt-1 shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gold-muted text-sm italic font-display">
            Valet parking is available at the main hotel entrance for all guests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationScreen;