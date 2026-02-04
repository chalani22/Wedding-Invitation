import React from 'react';

interface ThankYouScreenProps {
  onNavigate: (view: any) => void;
}

const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ onNavigate }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-md animate-fade-in">
      {/* Background Decorative Lilies (Subtle behind modal) */}
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

      {/* The Modal Content */}
      <div className="bg-ivory dark:bg-[#2d2a1a] max-w-sm w-full p-2 rounded-t-[200px] border border-primary/40 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] animate-slide-up relative">
        {/* Inner Border Arch Effect */}
        <div className="absolute inset-1.5 border border-primary/20 rounded-t-[194px] pointer-events-none"></div>

        <div className="flex flex-col items-center text-center px-6 py-16 md:py-20 relative z-10">
          {/* Check Icon */}
          <div className="mb-6 text-primary">
            <span className="material-symbols-outlined text-5xl font-light" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-3xl font-display font-medium mb-4 tracking-tight text-[#1b190d] dark:text-primary">
            Thank you for your RSVP
          </h1>

          {/* Subtext */}
          <p className="text-gold-muted italic text-lg leading-relaxed max-w-[280px] font-display">
            We are so delighted to have you join us for our special celebration.
          </p>

          {/* Close Button */}
          <button 
            onClick={() => onNavigate(null)}
            className="mt-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gold-muted/60 hover:text-primary transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouScreen;