
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-orange-50 pt-12 pb-16 md:pt-20 md:pb-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span className="text-emerald-700 font-extrabold text-[9px] md:text-xs tracking-[0.15em] uppercase mb-5 block bg-emerald-100/60 inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-emerald-200">
          ✨ PRODUZIDO EM AMBIENTE REGULARIZADO PELA ANVISA
        </span>
        
        <h1 className="text-[1.85rem] sm:text-4xl md:text-6xl font-black text-slate-900 leading-[1.15] mb-6 md:mb-8 tracking-tight">
          Por que a candidíase insiste em voltar mesmo depois de <span className="text-red-600">pomadas e remédios?</span>
        </h1>
        
        <p className="text-base md:text-xl text-slate-700 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium px-2">
          Milhares de mulheres aliviam os sintomas por um tempo… mas continuam presas ao ciclo de coceira, corrimento, mau cheiro e desconforto íntimo.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-14">
          {[
            { text: '100% Natural', icon: 'fa-leaf' },
            { text: 'Equilíbrio íntimo', icon: 'fa-droplet' },
            { text: 'Sem hormônios', icon: 'fa-shield-heart' }
          ].map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-sm border border-emerald-100 transition-transform">
              <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[9px]">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <span className="font-bold text-slate-700 text-xs md:text-sm">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <a href="#oferta" className="w-full max-w-xs md:max-w-md bg-gradient-to-r from-red-600 to-rose-500 text-white text-lg md:text-2xl font-black px-6 py-5 md:py-6 rounded-full shadow-[0_15px_40px_rgba(225,29,72,0.4)] active:scale-95 transition-all uppercase tracking-tight">
            Quero Me Sentir Melhor
          </a>
          
          <p className="mt-5 text-slate-500 text-[9px] md:text-xs font-bold uppercase tracking-widest opacity-80">
            📦 FRETE GRÁTIS ATIVO | 🔒 COMPRA 100% SEGURA
          </p>
        </div>

        <div className="mt-10 md:mt-14 inline-flex flex-col md:flex-row items-center gap-2 md:gap-4 bg-white/60 backdrop-blur-sm px-6 py-4 md:px-8 md:py-5 rounded-3xl border border-emerald-200 shadow-sm">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-check-shield text-emerald-600 text-lg"></i>
            <span className="font-black text-slate-900 text-xs md:text-base">Garantia de Satisfação</span>
          </div>
          <span className="hidden md:block text-slate-300">|</span>
          <span className="text-slate-600 text-[10px] md:text-sm font-semibold italic">30 Dias ou Seu Dinheiro de Volta</span>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
         <div className="absolute top-[-5%] left-[-5%] w-64 h-64 md:w-96 md:h-96 bg-emerald-200 rounded-full blur-[80px] md:blur-[120px]"></div>
         <div className="absolute bottom-[-5%] right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-orange-200 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>
    </section>
  );
};

export default Hero;
