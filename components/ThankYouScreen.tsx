import React, { useEffect } from 'react';

interface ThankYouScreenProps {
  onNavigate: (view: any) => void;
}

const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ onNavigate }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm animate-fade-in">
      {/* Background Decorative Lilies (Subtle) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 opacity-20">
          <img 
            className="w-full h-full object-contain filter brightness-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpH2MmDj1_noHc42kjMFd_c0Q5cvSWNWDD5DDdL53kTM0e0CsT36APof3W0HebsFspxYMzLD2aQPhch7bbbuA8TdyZ__YoUcVjvjXRfAeCOkUk8enFkpfrl35oG0u9JlecOWaITKpHyd7r-d-sMAMPz3kl482AggifdfehRRqAHGiah2nV1Iiz9N3k7_SYOg6I1ZfrSSa677TGHs1cXSj8WgtqswlnRvMWTEgou0gaqsBsP8bvxXAQaFjCZ7aeX1diPFh_8zq-ykki" 
            alt="Lily decoration"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-20 rotate-180">
          <img 
            className="w-full h-full object-contain filter brightness-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMhzu9J8qR7btW7aI4ORtjmElDaTOfJpa7ucN5EEwZI_JLrQMsQKcbbWXekVUfEnOiFqgbrY7wDL-64VB29iNXkiFYB8CrI7HFTATmGfLzb6aTzU1NOgaj0XZV9VrvIS9EJ3j5uCsNcrU7SxfOA2KJYrNb1SxyqwRqJhTTrZUodjghEhR-kE5N71_wcQvq072VJOWp6B-GeXpZsmY0nPSNYsBJOArEabDbVY7ONm804zOf-lfcvXDas5wOH0e_b6zmHj_GvvIBdR0r" 
            alt="Lily decoration"
          />
        </div>
      </div>

      {/* The Modal Content Card */}
      <div className="bg-[#fffff9] dark:bg-[#2d2a1a] max-w-sm w-full arch-frame shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] animate-slide-up relative overflow-hidden">
        <div className="flex flex-col items-center text-center px-8 py-16 md:py-24 relative z-10">
          {/* Check Icon */}
          <div className="mb-6 text-primary">
            <span className="material-symbols-outlined text-6xl font-light">
              check_circle
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-display font-medium mb-4 tracking-tight text-[#1b190d] dark:text-primary">
            Thank you for your RSVP
          </h1>

          {/* Subtext */}
          <p className="text-gold-muted italic text-lg leading-relaxed max-w-[280px] font-display">
            We are so delighted to have you join us for our special celebration.
          </p>

          {/* Close Button */}
          <button 
            onClick={() => onNavigate(null)}
            className="mt-10 text-[10px] uppercase tracking-[0.3em] text-gold-muted/60 hover:text-primary transition-colors font-bold border-b border-transparent hover:border-primary pb-1"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouScreen;