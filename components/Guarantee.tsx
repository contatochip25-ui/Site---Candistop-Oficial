
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-emerald-500 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
        <div className="fade-in-section flex flex-col items-center justify-center bg-white rounded-full w-48 h-48 md:w-64 md:h-64 border-4 md:border-8 border-amber-300 shrink-0 shadow-2xl">
          <span className="text-red-600 text-5xl md:text-6xl font-black mb-1">30</span>
          <span className="text-slate-900 font-black text-xs md:text-sm uppercase tracking-widest">Dias de</span>
          <span className="text-slate-900 font-black text-xs md:text-sm uppercase tracking-widest text-center">Satisfação</span>
        </div>

        <div className="fade-in-section text-center lg:text-left">
          <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">
            Nossa Garantia de Satisfação
          </h2>
          <p className="text-base md:text-xl text-emerald-50 font-medium leading-relaxed opacity-90 max-w-2xl px-2">
            Estamos tão confiantes que oferecemos uma garantia incondicional de 30 dias. Se você não ficar satisfeita com seu investimento, devolvemos 100% do valor. O risco é todo nosso!
          </p>
          <div className="mt-8 md:mt-12">
            <a href="#oferta" className="block w-full sm:inline-block bg-white text-emerald-600 font-black text-base md:text-xl px-10 py-5 rounded-full shadow-lg active:scale-95 transition-all text-center">
              Garantir Meu Pedido Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
