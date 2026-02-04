
import React from 'react';

interface GalleryScreenProps {
  onNavigate: (view: any) => void;
}

const GalleryScreen: React.FC<GalleryScreenProps> = ({ onNavigate }) => {
  const images = [
    { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy880Q6ImVafXy_4afZb3_mFycARjF5v-gIVeWLQmbNZhtPglBkXJ1GcAkBPS-GaJVCO-PRHLX7u8zEp4zBQgzbKolyXan1TR0hH9jZjo0X9Cv-Cp13UmTlC_hwh4_JSkKzY2q3ip8K6fUTpy5-fa7W6q4wvcJ65svsooGlYpw-yGaKcm7guYFK7OSK7kMlRtSRCxBxspTmZ1xwdo0J4Zy0P2C0th3633jMZTnkVS_gl_pa4F_V3McKd0fJAL4S_su5IaTq98xo-gX", alt: "Picnic" },
    { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi-F08j1IvPysowqmdSD-5ySxA5yih6gW5ik1wCWT9ezo4t46JMfGF6Hk_R_FE3rOWjGHme5u8DB2NUb3--jrpnmItOrX5r8sNx1kPOay0GwOZgQeImahisi8FBdosh9ebdEKvx1C_kQLZiyNCTkzi7CJ7nLpLbkvVu9PDKShYS3Ad3dI0PSRrE7Y7J67ZnSxMQcAlF9hQQil9E2-12c4q0UmiDoZ3U-1bW5bi165vAK7B-GkWoUJIlElCQJPyrdhpHwK0SQWQosMc", alt: "Sunset Walk" },
    { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlEyMnP-ACR9s1xCkJrzcctL_EYwfFjiNoajdKr5o4PrV9bYpdUq0cusHjVHAz2YMbbohZCwPqXVzBHtC2ksjWME1ykxoOXn2fbnOJtBo-76UnuYAEcxYnxkIsTjYS61iqKjDNyDBB1q6_K5DR3Xlvymw1KVpkm3wdUhsRpYZmNCFKQNDmuN5xzFb3oJsmxh8a4SYXEU69LJ2wS9f3ktlNIOXR_TcFn_k_rDIMj97z2anDQE8psHDs8CgVPy6S9G0k4OVZSJJEMK0p", alt: "Ring Close Up" },
    { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwaF0Vzc9iOhQdPXMu9r1n8tB2ciFpRRkVQDwG9WPEWu60k2FQstnZ25zEhT5pVfaxB5jZZ5c3geBuRGUfmaF7t1ZPixjdDZsMFLqbuwd2sBQrKuwqqBTdQ6glYLmsmjrg4FlEuIJZkUIk5-gMyT2lMk1dL0PIVVNJ605EecGSriqgIqCNtyKrbs4dEXxCG5sdHG4hQbXkPBgnbQN1ANzrtSpARi1-pS1lnPZQEpEAX0JJIAef4HLdBslxYajpTjUJFPtpbULOq4wM", alt: "Autumn Bench" },
    { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy4d8BDzKKwuZ7ddSH9i3-6yJXe6U2Tr-TDumLmrFtvYAE3Ura7pzcXaqV1Vd9-zj2fRPMuroERbIzkoqThbTwrUsDyS2Saj1qoN23Dae0eAidnoCdBMTWipM5VunW8faKfiRqr_2pIgJ7eCnlrn618EFabRpaN78ykLRGYlYjgioiE0ex-Oxr1i-2Vro776fOsI8ApybvWqsFH8mTNWaUx1K3kY9Dth-owOspuMoqDZ_c7acP5DuD19CNvIOSgyI0vMtIZF2eXkfm", alt: "Dancing in Rain" },
    { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqB4Y4S7lNXhKfmoD537-fNO10_W76RC8Ak6IXnhMGKWAZ3PbMr7hl-iGJUy1dhHcinvDpEPeCPqDfPzYilCEXcEWRTW9LMJBYLMtt7A688y-Sop1Mjy4IvSF__sRICidNw4ApzqpLlCO3MCpXCgDSzl9Mef-xiGfI3WRIY1VN8VxVuqmfw2EZRaZznCGvKOydZenDaT2FGCL79cq2GWMGxVjXuPNo7Q213hg4HJu5D-9_aaw32_Ot8vdYh3zy-dHS5LmmW5rWTfzU", alt: "Mountain View" }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background-light animate-fade-in overflow-x-hidden selection:bg-primary/20">
      <div className="fixed inset-0 pointer-events-none gold-dust opacity-10"></div>
      
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/20 px-6 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('invitation')}>
            <span className="material-symbols-outlined text-primary text-3xl">local_florist</span>
            <h2 className="text-xl font-bold tracking-widest uppercase text-[#1b190d]">L & S</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {['Home', 'Our Story', 'Gallery', 'RSVP'].map(item => (
              <a 
                key={item} 
                href="#" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  const viewMap: any = { 'Home': 'invitation', 'Our Story': 'details', 'Gallery': 'gallery', 'RSVP': 'rsvp' };
                  onNavigate(viewMap[item]); 
                }} 
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${item === 'Gallery' ? 'text-primary' : 'text-[#1b190d] hover:text-primary'}`}
              >
                {item}
              </a>
            ))}
          </nav>
          <button 
            onClick={() => onNavigate('rsvp')}
            className="bg-primary text-[#1b190d] px-6 py-2 rounded-lg font-bold text-xs tracking-widest uppercase hover:bg-opacity-90 transition-all shadow-sm"
          >
            RSVP
          </button>
        </div>
      </header>

      <main className="relative flex-1 py-16 px-6 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-20 animate-slide-up">
          <div className="mb-4 opacity-40">
            <span className="material-symbols-outlined text-primary text-6xl">spa</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light italic mb-4 text-[#1b190d] font-display leading-tight">Our Moments</h1>
          <div className="w-24 h-[1px] bg-primary mb-8"></div>
          <p className="text-gold-muted text-lg max-w-lg leading-relaxed font-display italic">
            A photographic journey through our years together, from our first date to the proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 animate-slide-up delay-100">
          {images.map((img, idx) => (
            <div key={idx} className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-primary/20 bg-white p-2.5 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-full h-full bg-center bg-cover rounded-lg" style={{ backgroundImage: `url("${img.url}")` }}></div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-white text-4xl bg-primary/30 p-4 rounded-full">zoom_in</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-20 border-t border-primary/10 animate-slide-up">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-primary/40"></div>
            <span className="material-symbols-outlined text-primary">favorite</span>
            <div className="w-12 h-[1px] bg-primary/40"></div>
          </div>
          <h3 className="text-4xl font-light mb-12 font-display italic text-[#1b190d]">Can't wait to see you there</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => onNavigate('rsvp')}
              className="min-w-[200px] bg-primary text-[#1b190d] font-bold py-4 px-10 rounded-xl shadow-xl hover:shadow-2xl transition-all uppercase text-[10px] tracking-[0.3em]"
            >
              RSVP Now
            </button>
            <button className="min-w-[200px] border border-primary text-primary font-bold py-4 px-10 rounded-xl hover:bg-primary/5 transition-all uppercase text-[10px] tracking-[0.2em]">
              Wedding Registry
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-blush py-16 border-t border-primary/10 text-center space-y-8">
        <p className="text-primary text-3xl font-light italic font-display">Lakmini & Shalinda</p>
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold-muted font-bold">October 12th, 2024 • Colombo, Sri Lanka</p>
        <div className="flex justify-center gap-8">
          <span className="material-symbols-outlined text-primary/40 hover:text-primary transition-colors cursor-pointer">camera_enhance</span>
          <span className="material-symbols-outlined text-primary/40 hover:text-primary transition-colors cursor-pointer">mail</span>
          <span className="material-symbols-outlined text-primary/40 hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('location')}>map</span>
        </div>
      </footer>
    </div>
  );
};

export default GalleryScreen;
