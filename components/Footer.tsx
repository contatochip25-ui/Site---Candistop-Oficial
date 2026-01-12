
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-black mb-4 leading-tight">
          Sua Confiança de Volta!
        </h2>
        <p className="text-slate-400 text-base md:text-xl font-medium mb-10">
          Junte-se às milhares de mulheres que escolheram o CandiStop.
        </p>

        <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] max-w-3xl mx-auto mb-10 md:mb-16">
          <p className="text-lg md:text-2xl font-medium mb-4 leading-relaxed italic text-indigo-100 px-2">
            "Imagine se sentir segura e confiante todos os dias... retomar sua intimidade sem medos."
          </p>
          <p className="text-lg font-black text-emerald-400">ISSO É POSSÍVEL!</p>
        </div>

        <a href="#oferta" className="w-full max-w-xs md:max-w-2xl bg-gradient-to-r from-red-600 to-rose-500 text-white text-xl md:text-4xl font-black px-6 py-5 md:py-8 rounded-full shadow-[0_20px_50px_rgba(225,29,72,0.3)] active:scale-95 transition-all uppercase tracking-tight mb-12 md:mb-16 inline-block">
          QUERO ME SENTIR MELHOR
        </a>

        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-10 mb-12 md:mb-20 opacity-50">
          {[
            { icon: 'fa-lock', text: 'Compra Segura' },
            { icon: 'fa-truck', text: 'Frete Grátis' },
            { icon: 'fa-shield', text: 'Satisfação 30D' },
            { icon: 'fa-bolt', text: 'Entrega Rápida' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-1.5 font-bold text-[9px] md:text-xs uppercase">
              <i className={`fa-solid ${item.icon} text-emerald-400`}></i> {item.text}
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/5 text-slate-500 text-[10px] md:text-xs leading-relaxed max-w-5xl mx-auto">
          <p className="mb-4">© 2024 CandiStop. Todos os direitos reservados.</p>
          <p className="mb-6 px-4">
            <strong>AVISO:</strong> Resultados variam de pessoa para pessoa. Este produto não substitui orientação médica. Consulte seu profissional de saúde regularmente.
          </p>
          <div className="flex justify-center gap-4 md:gap-6 font-bold uppercase tracking-widest text-[9px]">
            <a href="#oferta" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#oferta" className="hover:text-white transition-colors">Termos</a>
            <a href="#oferta" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
