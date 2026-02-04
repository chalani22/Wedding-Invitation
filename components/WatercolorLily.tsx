import React from 'react';

interface WatercolorLilyProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  style?: React.CSSProperties;
}

const LILY_URLS = {
  left: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy-i2Q-jOxjO0qnfRZNer1wfBMcpQN5lWYMUZVcxCnnFq8qIQXe_ZLY9KHmFQA6B4ZIw9ri-8ZhC8kwzZ0KGE4Gwcx-a4imDEqLfbqu2nqO3TgZpxHnxGAT9K_j0pThZCLLV1jcy0IrxQgf-7TW6BnVB2TyKAhVT2J0-NVmwyJV6f_MqV8u-_2trdTfo4ttASRrg84RIdH89-6ANp_EzLMa45xkS7MguNRiM97zGCk3GV-1JQ1MqCjCLAC94k989O4Rs38SW2ELvZv",
  right: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHkLVNrfcyCgVjKMqjhs-zJOI8E8CgJewSvCiZjxumlyA-kauwFh4YVsyqTuv_rYToak1Zhyyb7Ds8jThAZ-2brDSC-5IN-JVRZ3IhbP7xv4PCH0f0nbLTUpWMQBH5gWF1p1Vt0ipe_KMCzwt1es6CIqqmhAg-DFsppiTRrZT5gFUdfrukLYb6JVR9TGZ4RjR8GpVZ4Cybj4qH3USSv9EN5EXCMbSZJ5aNtgIoaLbwmwVbFUEZAlnhzrYkGOEcX2LoJmKfWW73C8SP"
};

const WatercolorLily: React.FC<WatercolorLilyProps> = ({ position, className = "", style }) => {
  const isLeft = position.includes('left');
  const baseClasses = "absolute w-48 h-48 md:w-96 md:h-96 opacity-40 pointer-events-none transition-all duration-1000 z-0";
  const positionClasses = {
    'top-left': "-top-12 -left-12 rotate-12",
    'top-right': "-top-12 -right-12 -rotate-12 scale-x-[-1]",
    'bottom-left': "-bottom-12 -left-12 -rotate-12",
    'bottom-right': "-bottom-12 -right-12 rotate-12 scale-x-[-1]"
  }[position];

  return (
    <div className={`${baseClasses} ${positionClasses} ${className}`} style={style}>
      <img 
        src={isLeft ? LILY_URLS.left : LILY_URLS.right} 
        alt="Watercolor Lily" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default WatercolorLily;