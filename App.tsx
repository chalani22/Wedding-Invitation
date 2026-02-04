import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CoverScreen from './components/CoverScreen';
import MainScrollableContent from './components/MainScrollableContent';

const App: React.FC = () => {
  const [view, setView] = useState<'loading' | 'cover' | 'main'>('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2800; // 2.8 seconds total for the loading experience
    const interval = 30; // Update every 30ms for 33fps smoothness
    const step = 100 / (duration / interval);
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += step;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => setView('cover'), 800);
      } else {
        // Add a tiny bit of easing randomness for a natural feel
        setProgress(currentProgress + (Math.random() * 0.5 - 0.25));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative bg-background-light selection:bg-primary/20 overflow-x-hidden">
      {view === 'loading' && <LoadingScreen progress={Math.min(Math.floor(progress), 100)} />}
      
      {view === 'cover' && (
        <CoverScreen onOpen={() => setView('main')} />
      )}

      {view === 'main' && (
        <MainScrollableContent />
      )}
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none gold-dust opacity-[0.05] z-0"></div>
    </div>
  );
};

export default App;