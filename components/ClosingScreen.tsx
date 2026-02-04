import React, { useState } from 'react';
import { generateWishFromGuest } from '../services/geminiService';

interface ClosingScreenProps {
  onNavigate: (view: any) => void;
}

const ClosingScreen: React.FC<ClosingScreenProps> = ({ onNavigate }) => {
  const [wish, setWish] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSendWishes = async () => {
    setIsGenerating(true);
    const result = await generateWishFromGuest();
    setWish(result);
    setIsGenerating(false);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden relative animate-fade-in">
      {/* Decorative Floating Elements */}
      <div className="lily-float top-10 left-[10%] w-32 h-32 rotate-12 animate-float">
        <img alt="Soft watercolor white lily flower" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXrhwDSDkUi7w0UEKrZ9MpVq6VEjSJpjqtnvaJdVxUNyYJ8p3q8i_sa-RlzP4wTCgpCSAIqIeSyJgc3RLBeutmhv_PAX_keG9LqjDVvnT_KMabtHKih40PBZnio692cqP-hNxD7EJmSn8TXk7ISdxJmMOze9t1b4dhenHKpvUvWkDv1fxW9RA0W19GCMY-7yFPyudePOa2DIgaekvBE2b83Isez5OvGYiMwSkTBgj5uZhJwHraYoB-4-JNXMlAutVF6QLYIN_ztDOA"/>
      </div>
      <div className="lily-float bottom-20 right-[5%] w-48 h-48 -rotate-45 animate-float" style={{ animationDelay: '1s' }}>
        <img alt="Pale pink watercolor lily flower" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_KT299aNY9wusVN1LcCfPq89SSpjPkfU8x2lEPwYZ-y1PY2JI-Kp6FwGwodiFuL7Pnej-n40o_a58BFFyeFSDD6Ih2n8XWjFYngVBfvTZpzDq8eChFf3K-3N0EPq2DPPGNzv026E6MIRxGHk_3EkdfsG4pYfSmMiWHZfq3R4MohAN0UWykCrNV_HlP2L8O6NLd0Gh4CdN0xTiy85DzfRMa1Ca3P_r_D-4iLHxrB8S1R4eM_j-3PNzYy_iwUyDCFBsD0V7qOiGUs2u"/>
      </div>
      <div className="lily-float top-1/2 left-[5%] w-24 h-24 rotate-90 animate-float" style={{ animationDelay: '2s' }}>
        <img alt="Small lily watercolor accent" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL930MjZHlOAJ2F3MUFbVnz57kQMn5PwienLA9u4s9YdNueU8EEooyCNfbS3dkMbclG2sNSHfSwc16YmgooQwS2hE5net3b79wGwoSXgOKrVUAnGu8lXyOKCY61uwz2dpc-tVeJWKvkx0yTqIRXSpsEEbON9quct7Sq69kwYvrhed18SbN4_cRGm0cdqz76Kb-b3fOCEk7E9H0A3y48gr7D1JF7ys37WvH8CVDNfOfXuhEG1ilMTKCqZuDBcs-7zKHihfTziP5t7Jf"/>
      </div>

      {/* Random Sparkles */}
      <div className="sparkle top-[15%] left-[20%]"></div>
      <div className="sparkle top-[40%] right-[15%]"></div>
      <div className="sparkle bottom-[30%] left-[25%]"></div>
      <div className="sparkle top-[10%] right-[30%]"></div>

      <div className="layout-container flex h-full grow flex-col z-10">
        <div className="px-4 flex flex-1 justify-center py-10 md:py-20">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center">
            {/* Gold Arch Section */}
            <div className="arch-frame w-full max-w-[500px] aspect-[4/5] flex flex-col items-center justify-center p-8 bg-white/30 dark:bg-white/5 backdrop-blur-sm shadow-sm animate-slide-up">
              <h4 className="text-[#9a8d4c] dark:text-primary text-sm font-bold leading-normal tracking-[0.2em] uppercase mb-4">With love,</h4>
              <h1 className="text-[#1b190d] dark:text-white tracking-light text-[42px] md:text-[56px] font-display font-medium leading-tight text-center pb-8 italic">
                Lakmini <br/> & <br/> Shalinda
              </h1>
              
              {wish && (
                <div className="mb-8 p-4 bg-white/50 border-l-2 border-primary italic text-sm text-gold-muted animate-fade-in max-w-[320px] text-center">
                  "{wish}"
                </div>
              )}

              <div className="w-full flex flex-col gap-6 mt-4">
                {/* Action Button Group */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4">
                  <button 
                    onClick={() => onNavigate('rsvp')}
                    className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border border-primary text-[#1b190d] dark:text-primary text-sm font-bold leading-normal tracking-[0.05em] transition-all hover:bg-primary/10"
                  >
                    <span className="truncate">RSVP Now</span>
                  </button>
                  <button 
                    onClick={() => onNavigate('location')}
                    className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border border-primary text-[#1b190d] dark:text-primary text-sm font-bold leading-normal tracking-[0.05em] transition-all hover:bg-primary/10"
                  >
                    <span className="truncate">View Location</span>
                  </button>
                </div>
                {/* Secondary Wish Button */}
                <div className="flex px-4 justify-center">
                  <button 
                    onClick={handleSendWishes}
                    disabled={isGenerating}
                    className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-[#1b190d] gap-3 text-base font-bold leading-normal tracking-[0.015em] shadow-md hover:brightness-105 transition-all disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-[20px]">{isGenerating ? 'hourglass_top' : 'favorite'}</span>
                    <span className="truncate">{isGenerating ? 'Crafting wish...' : 'Send Wishes'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer / Contact Links */}
            <footer className="mt-16 w-full max-w-[600px] border-t border-[#f3f1e7] dark:border-[#3b382d] pt-8 flex flex-col items-center gap-4">
              <p className="text-[#9a8d4c] text-xs uppercase tracking-widest font-bold">Contact for inquiries</p>
              <div className="flex gap-8 items-center">
                <a className="flex items-center gap-2 text-[#1b190d] dark:text-gray-300 hover:text-primary transition-colors" href="https://wa.me/#">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
                <a className="flex items-center gap-2 text-[#1b190d] dark:text-gray-300 hover:text-primary transition-colors" href="tel:+94000000000">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span className="text-sm font-medium">Phone</span>
                </a>
              </div>
              <div className="mt-4 opacity-40 grayscale">
                <div className="size-6 text-[#1b190d] dark:text-white" onClick={() => onNavigate('invitation')}>
                  <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingScreen;