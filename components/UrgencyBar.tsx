
import React, { useState, useEffect } from 'react';

const UrgencyBar: React.FC = () => {
  // Ajustado para 30 minutos (1800 segundos) para urgência máxima
  const [timeLeft, setTimeLeft] = useState(1800); 

  useEffect(() => {
    if (timeLeft <= 0) {
      // Reinicia o loop de urgência caso chegue a zero
      setTimeLeft(1800);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <a 
      href="#oferta" 
      className="block bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white py-2 md:py-3 px-3 text-center sticky top-0 z-[100] shadow-xl font-bold no-underline hover:brightness-110 transition-all"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 md:gap-4">
        <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-tighter sm:tracking-widest animate-pulse flex items-center gap-1">
          <span className="hidden xs:inline">🚨</span> 
          OFERTA RELÂMPAGO: Seu desconto exclusivo expira em
        </span>
        
        <div className="bg-black/20 backdrop-blur-sm px-2.5 py-0.5 md:px-4 md:py-1 rounded-lg border border-white/20 shadow-inner">
          <span className="font-mono text-sm md:text-xl tabular-nums tracking-tighter md:tracking-normal flex items-center">
            <i className="fa-regular fa-clock text-[10px] md:text-sm mr-1.5 opacity-80"></i>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
    </a>
  );
};

export default UrgencyBar;
