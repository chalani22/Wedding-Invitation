
import React, { useState } from 'react';

interface RsvpScreenProps {
  onSubmit: () => void;
  onNavigate: (view: 'invitation' | 'details' | 'rsvp' | 'thank-you' | 'schedule' | 'location') => void;
}

const RsvpScreen: React.FC<RsvpScreenProps> = ({ onSubmit, onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    attendance: 'yes',
    guests: 1,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const incrementGuests = () => {
    if (formData.guests < 10) {
      setFormData(prev => ({ ...prev, guests: prev.guests + 1 }));
    }
  };

  const decrementGuests = () => {
    if (formData.guests > 1) {
      setFormData(prev => ({ ...prev, guests: prev.guests - 1 }));
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-blush animate-fade-in overflow-x-hidden selection:bg-primary/20 items-center justify-center py-12 px-4">
      <div className="fixed inset-0 pointer-events-none gold-dust opacity-10"></div>
      
      {/* Background Illustrations */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-30 pointer-events-none">
        <img alt="Lily" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpH2MmDj1_noHc42kjMFd_c0Q5cvSWNWDD5DDdL53kTM0e0CsT36APof3W0HebsFspxYMzLD2aQPhch7bbbuA8TdyZ__YoUcVjvjXRfAeCOkUk8enFkpfrl35oG0u9JlecOWaITKpHyd7r-d-sMAMPz3kl482AggifdfehRRqAHGiah2nV1Iiz9N3k7_SYOg6I1ZfrSSa677TGHs1cXSj8WgtqswlnRvMWTEgou0gaqsBsP8bvxXAQaFjCZ7aeX1diPFh_8zq-ykki" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-30 pointer-events-none rotate-180">
        <img alt="Lily" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMhzu9J8qR7btW7aI4ORtjmElDaTOfJpa7ucN5EEwZI_JLrQMsQKcbbWXekVUfEnOiFqgbrY7wDL-64VB29iNXkiFYB8CrI7HFTATmGfLzb6aTzU1NOgaj0XZV9VrvIS9EJ3j5uCsNcrU7SxfOA2KJYrNb1SxyqwRqJhTTrZUodjghEhR-kE5N71_wcQvq072VJOWp6B-GeXpZsmY0nPSNYsBJOArEabDbVY7ONm804zOf-lfcvXDas5wOH0e_b6zmHj_GvvIBdR0r" />
      </div>

      <div className="relative w-full max-w-xl bg-white shadow-2xl rounded-2xl border border-primary/20 overflow-hidden z-10 animate-slide-up">
        <div className="absolute inset-2 border border-primary/10 pointer-events-none rounded-xl"></div>
        
        <div className="p-8 md:p-14">
          <div className="text-center mb-10">
            <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] block mb-4">Requesting the pleasure of your company</span>
            <h1 className="text-6xl font-display italic text-[#1b190d]">RSVP</h1>
            <div className="flex justify-center items-center gap-3 mt-4 text-gold-muted">
              <div className="h-px w-12 bg-primary/30"></div>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <div className="h-px w-12 bg-primary/30"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="block text-[10px] font-bold text-gold-muted uppercase tracking-[0.3em]">Full Name</label>
              <input 
                className="w-full bg-transparent border-b border-primary/20 border-t-0 border-l-0 border-r-0 px-0 py-2 text-lg focus:ring-0 focus:border-primary transition-all placeholder:text-gray-300 font-display italic" 
                placeholder="John & Jane Doe" 
                required 
                type="text" 
                value={formData.fullName} 
                onChange={e => setFormData({...formData, fullName: e.target.value})} 
              />
            </div>

            <div className="space-y-3">
              <label className="block text-[10px] font-bold text-gold-muted uppercase tracking-[0.3em]">Phone Number</label>
              <input 
                className="w-full bg-transparent border-b border-primary/20 border-t-0 border-l-0 border-r-0 px-0 py-2 text-lg focus:ring-0 focus:border-primary transition-all placeholder:text-gray-300 font-display italic" 
                placeholder="+94-XX-XXXXXXX" 
                required 
                type="tel" 
                value={formData.phone} 
                onChange={e => setFormData({...formData, phone: e.target.value})} 
              />
            </div>

            <div className="space-y-4 pt-2">
              <label className="block text-[10px] font-bold text-gold-muted uppercase tracking-[0.3em]">Will you attend?</label>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      className="peer appearance-none size-5 border-2 border-primary/30 rounded-full checked:border-primary checked:bg-primary transition-all" 
                      name="attendance" 
                      type="radio" 
                      value="yes" 
                      checked={formData.attendance === 'yes'} 
                      onChange={e => setFormData({...formData, attendance: e.target.value})} 
                    />
                    <div className="absolute size-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-lg group-hover:text-primary transition-colors font-display italic">Yes, I'll be there</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      className="peer appearance-none size-5 border-2 border-primary/30 rounded-full checked:border-primary checked:bg-primary transition-all" 
                      name="attendance" 
                      type="radio" 
                      value="no" 
                      checked={formData.attendance === 'no'} 
                      onChange={e => setFormData({...formData, attendance: e.target.value})} 
                    />
                    <div className="absolute size-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-lg group-hover:text-primary transition-colors font-display italic">Regretfully decline</span>
                </label>
              </div>
            </div>

            {formData.attendance === 'yes' && (
              <div className="space-y-4 pt-4 animate-fade-in flex flex-col items-center">
                <label className="block text-[10px] font-bold text-gold-muted uppercase tracking-[0.3em]">Number of Guests</label>
                <div className="flex items-center gap-8 py-2">
                  <button 
                    type="button" 
                    onClick={decrementGuests}
                    className="flex items-center justify-center size-10 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">remove</span>
                  </button>
                  <span className="text-2xl font-medium font-display min-w-[20px] text-center">{formData.guests}</span>
                  <button 
                    type="button" 
                    onClick={incrementGuests}
                    className="flex items-center justify-center size-10 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">add</span>
                  </button>
                </div>
                <div className="h-px w-24 bg-primary/10"></div>
                <span className="text-gold-muted/60 italic text-xs font-display">Up to 10 guests</span>
              </div>
            )}

            <div className="space-y-3 pt-2">
              <label className="block text-[10px] font-bold text-gold-muted uppercase tracking-[0.3em]">Message (Optional)</label>
              <textarea 
                className="w-full bg-transparent border-b border-primary/20 border-t-0 border-l-0 border-r-0 px-0 py-2 text-lg focus:ring-0 focus:border-primary transition-all placeholder:text-gray-300 resize-none font-display italic" 
                placeholder="Your wishes or dietary notes..." 
                rows={2} 
                value={formData.message} 
                onChange={e => setFormData({...formData, message: e.target.value})} 
              />
            </div>

            <div className="pt-8">
              <button 
                type="submit" 
                className="w-full bg-primary text-[#1b190d] font-bold py-5 rounded-full text-[10px] uppercase tracking-[0.3em] shadow-lg shadow-primary/20 hover:bg-[#e0be10] hover:scale-[1.01] active:scale-[0.98] transition-all"
              >
                Confirm Attendance
              </button>
            </div>
          </form>
          <p className="mt-8 text-center text-[10px] text-gold-muted italic tracking-[0.2em] uppercase font-bold">Please respond by March 01st, 2026</p>
        </div>
      </div>
    </div>
  );
};

export default RsvpScreen;
