import React from 'react';

interface DressCodeScreenProps {
  onNavigate: (view: any) => void;
}

const DressCodeScreen: React.FC<DressCodeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#FFF9F9] animate-fade-in overflow-x-hidden selection:bg-primary/20">
      <div className="fixed inset-0 pointer-events-none gold-dust opacity-10"></div>

      <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/20 bg-white/80 backdrop-blur-md px-6 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('invitation')}>
          <div className="text-primary transition-transform hover:scale-110">
            <span className="material-symbols-outlined text-3xl">local_florist</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight italic font-display text-[#1b190d]">L & S</h2>
        </div>
        <nav className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-9">
            {['Home', 'Schedule', 'Travel'].map(item => (
              <a 
                key={item} 
                href="#" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  const viewMap: any = { 'Home': 'invitation', 'Schedule': 'schedule', 'Travel': 'location' };
                  onNavigate(viewMap[item]);
                }}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${item === 'Home' ? 'text-primary' : 'text-[#1b190d] hover:text-primary'}`}
              >
                {item}
              </a>
            ))}
          </div>
          <button 
            onClick={() => onNavigate('rsvp')}
            className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-[#1b190d] text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-sm"
          >
            RSVP
          </button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-20 space-y-6 animate-slide-up">
          <h4 className="text-primary text-xs font-bold uppercase tracking-[0.4em]">Celebration Details</h4>
          <h1 className="text-[#1b190d] text-5xl md:text-7xl font-black leading-tight tracking-tight italic font-display">Dress Code & Guest Notes</h1>
          <p className="text-gold-muted text-lg max-w-2xl mx-auto font-display italic leading-relaxed">Thoughtful details to help you prepare for our celebration on the estate grounds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {/* Dress Code Card */}
          <div className="relative group h-full animate-slide-up">
            <div className="absolute -top-10 -right-10 w-48 h-48 opacity-10 pointer-events-none group-hover:opacity-20 transition-all duration-700">
              <img alt="Lily" className="w-full h-full object-contain rotate-12 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBR-FYm66y0kT3QGrUGicmOs_YEDF26Jy-4wtYIcwhTXti7ntyfdaApL7QT9ysjaf84cI6TmsU67inPT27btSzHFnnQ-WO4eWYzZLNMdpsU-KXfqo33fghrYnvRA6IyVSyFyNzgwqBfubCkDA-NpXFqibECJZ5ZLP576RauQciv5kMojhp2aA2HBkhaWFUJEtQ5eOhSaihqVu9HQfyjbiYMy-_Cz5FUrHHcgG9LOkaIjw-rhEOLEs84z4zE2zQWhIVxstFFFIzu4h7" />
            </div>
            <div className="h-full flex flex-col items-center bg-white p-10 md:p-16 border border-primary/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden text-center space-y-8">
              <div className="mb-4">
                <span className="material-symbols-outlined !text-6xl text-gold-accent" style={{ fontVariationSettings: "'FILL' 0" }}>checkroom</span>
              </div>
              <h3 className="text-4xl font-bold italic font-display text-[#1b190d]">Dress Code</h3>
              
              <div className="space-y-4">
                <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">The Vibe</p>
                <p className="text-2xl font-medium font-display">Black Tie Optional</p>
                <p className="text-gold-muted leading-relaxed font-display italic text-base px-4">
                  We invite you to celebrate in style. Men are encouraged to wear a tuxedo or formal dark suit, and women are encouraged to wear floor-length gowns or elegant cocktail dresses.
                </p>
              </div>

              <div className="pt-8 border-t border-primary/10 w-full max-w-xs mx-auto">
                <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Color Palette</p>
                <div className="flex justify-center gap-4">
                  {['#E5D3B3', '#B7C9E2', '#F5F5F5', '#2F4F4F'].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border border-gray-100 shadow-lg" style={{ backgroundColor: c }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Guest Notes Card */}
          <div className="relative group h-full animate-slide-up delay-200">
            <div className="absolute -bottom-10 -left-10 w-48 h-48 opacity-10 pointer-events-none rotate-180 group-hover:opacity-20 transition-all duration-700">
              <img alt="Lily" className="w-full h-full object-contain -rotate-12 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm7a9OyGbLlBzcOTIhalpcYkBUKIUtGtrb3x_nGmcjZz6WPZpKCUSn6v6V1cvsPihrlD6mbuut1RgtF5exz5q2sP2lBg92vvyIDDAHtjKhmogDrKLDqr68S902OgqEDe5cYC22hkT66bTsiq1YJBWGMmn0vtI2VNHRKWFm1mRk3kUqHsOyM4SnLNXFqLjmQTbZK8RyDaQaQoZ6N-uFZ2tjzddYqZIsZyvVz990i3Zo4QR-Mf6vHSnjXFpwwpBfOUSMRt9GlUwoj0dt" />
            </div>
            <div className="h-full flex flex-col items-center bg-white p-10 md:p-16 border border-primary/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden text-center space-y-12">
              <div className="mb-2">
                <span className="material-symbols-outlined !text-6xl text-gold-accent">info</span>
              </div>
              <h3 className="text-4xl font-bold italic font-display text-[#1b190d]">Guest Notes</h3>
              
              <div className="space-y-12 w-full text-center">
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-primary">
                    <span className="material-symbols-outlined !text-xl">no_photography</span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Unplugged Ceremony</p>
                  </div>
                  <p className="text-gold-muted leading-relaxed font-display italic text-base px-2">
                    We kindly ask you to keep your devices tucked away during the ceremony. We have professional photographers to capture every moment.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-primary">
                    <span className="material-symbols-outlined !text-xl">local_parking</span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Arrival & Parking</p>
                  </div>
                  <p className="text-gold-muted leading-relaxed font-display italic text-base px-2">
                    Complimentary valet parking is available at the main entrance of the estate. Shuttles depart from the hotel at 3:30 PM sharp.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-primary">
                    <span className="material-symbols-outlined !text-xl">card_giftcard</span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Registry</p>
                  </div>
                  <p className="text-gold-muted leading-relaxed font-display italic text-base px-2">
                    Your presence is our greatest gift. Should you wish to contribute to our future, our registry can be found online.
                  </p>
                </div>
              </div>

              <button onClick={() => onNavigate('location')} className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-primary text-[#1b190d] text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-primary/20 transition-all duration-500">
                Venue Map & Directions
                <span className="material-symbols-outlined !text-sm">map</span>
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-32 text-center flex flex-col items-center">
          <div className="w-px h-16 bg-primary/20 mb-6"></div>
          <h4 className="text-gold-muted text-sm font-bold tracking-[0.4em] font-display uppercase">L & S</h4>
          <p className="text-[10px] text-gold-muted/50 mt-3 font-display italic tracking-widest uppercase">Est. 2024</p>
        </footer>
      </main>
    </div>
  );
};

export default DressCodeScreen;
