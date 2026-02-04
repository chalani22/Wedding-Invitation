import React from 'react';

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#fcfbf8] to-[#fff5f5] dark:from-[#221f10] dark:to-[#1a180d] animate-fade-in overflow-hidden">
      
      {/* Corner Watercolor Lilies */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-60">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy-i2Q-jOxjO0qnfRZNer1wfBMcpQN5lWYMUZVcxCnnFq8qIQXe_ZLY9KHmFQA6B4ZIw9ri-8ZhC8kwzZ0KGE4Gwcx-a4imDEqLfbqu2nqO3TgZpxHnxGAT9K_j0pThZCLLV1jcy0IrxQgf-7TW6BnVB2TyKAhVT2J0-NVmwyJV6f_MqV8u-_2trdTfo4ttASRrg84RIdH89-6ANp_EzLMa45xkS7MguNRiM97zGCk3GV-1JQ1MqCjCLAC94k989O4Rs38SW2ELvZv" 
          alt="Bottom Left Lily" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-60 scale-x-[-1]">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHkLVNrfcyCgVjKMqjhs-zJOI8E8CgJewSvCiZjxumlyA-kauwFh4YVsyqTuv_rYToak1Zhyyb7Ds8jThAZ-2brDSC-5IN-JVRZ3IhbP7xv4PCH0f0nbLTUpWMQBH5gWF1p1Vt0ipe_KMCzwt1es6CIqqmhAg-DFsppiTRrZT5gFUdfrukLYb6JVR9TGZ4RjR8GpVZ4Cybj4qH3USSv9EN5EXCMbSZJ5aNtgIoaLbwmwVbFUEZAlnhzrYkGOEcX2LoJmKfWW73C8SP" 
          alt="Bottom Right Lily" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Subtle Top Nav Overlay */}
      <header className="absolute top-0 w-full flex items-center justify-between px-10 py-8 opacity-40">
        <div className="flex items-center gap-2 text-[#1b190d] dark:text-white">
          <div className="size-5 text-[#1b190d] dark:text-white">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xs font-bold uppercase tracking-[0.3em]">L & S Wedding</h2>
        </div>
        <div className="flex gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">Est. 2024</span>
        </div>
      </header>

      {/* Central Content */}
      <div className="z-10 flex flex-col items-center">
        {/* Monogram Arch */}
        <div className="arch-frame flex flex-col items-center justify-center mb-12 border-opacity-40 w-[320px] h-[420px] border border-[#ecc813] rounded-t-[1000px]">
          <div className="px-4 text-center">
            <p className="text-[#9a8d4c] dark:text-primary/70 text-[10px] tracking-[0.5em] uppercase mb-6 font-display">Welcome to</p>
            <h1 className="text-primary text-[64px] font-extralight tracking-tight leading-none italic font-display">
              L <span className="text-3xl align-middle mx-1 font-serif">&amp;</span> S
            </h1>
          </div>
        </div>

        {/* Text and Progress */}
        <div className="flex flex-col max-w-[480px] w-full items-center">
          <p className="text-[#9a8d4c] dark:text-primary/80 text-lg italic font-normal leading-normal pb-8 text-center font-display">
            Together with heartfelt blessings
          </p>

          <div className="flex flex-col items-center gap-6 w-full px-4">
            <div className="relative w-60 h-8 flex items-center justify-center">
              {/* The Path */}
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ecc813] to-transparent w-full opacity-30"></div>
              {/* The Sparkle (Moving Indicator) */}
              <div 
                className="absolute -translate-x-1/2 flex items-center justify-center transition-all duration-75 ease-linear"
                style={{ left: `${progress}%` }}
              >
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  auto_awesome
                </span>
              </div>
            </div>

            {/* Progress Text */}
            <div className="flex flex-col gap-1 items-center">
              <div className="flex gap-3 items-center">
                <p className="text-[#1b190d] dark:text-white/80 text-[10px] font-medium uppercase tracking-[0.2em]">
                  Creating your invitation experience
                </p>
                <p className="text-primary text-[10px] font-bold min-w-[30px]">{progress}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-20 right-[15%] w-2 h-2 rounded-full bg-primary/20 animate-pulse"></div>
      <div className="absolute bottom-40 left-[10%] w-3 h-3 rounded-full bg-primary/10 animate-pulse delay-75"></div>
      <div className="absolute top-1/2 right-[5%] w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse delay-150"></div>
    </div>
  );
};

export default LoadingScreen;