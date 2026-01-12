
import React from 'react';

const Solution: React.FC = () => {
  const benefits = [
    { title: "Ação Rápida", desc: "Sinta os primeiros resultados em apenas 7 dias" },
    { title: "100% Natural", desc: "Ingredientes orgânicos que respeitam seu corpo" },
    { title: "Equilibra a Flora", desc: "Trata o problema reforçando as defesas naturais" },
    { title: "Sem Hormônios", desc: "Fórmula segura, testada e aprovada" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[1.75rem] md:text-5xl font-black mb-4 leading-tight">
            Apresentamos o CandiStop
          </h2>
          <p className="text-indigo-200 text-base md:text-xl font-medium px-4">
            A nova abordagem natural que apoia o equilíbrio da sua flora íntima
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-5 md:space-y-6 w-full">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4 fade-in-section bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-check text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-0.5">{b.title}</h4>
                  <p className="text-indigo-200/70 text-sm md:text-base font-medium">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center w-full">
            <div className="relative w-full max-w-[280px] md:max-w-sm">
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-amber-200 to-amber-500 p-1 shadow-[0_0_50px_rgba(251,191,36,0.2)] animate-float overflow-hidden">
                <div className="w-full h-full bg-white rounded-[1.4rem] overflow-hidden border-4 md:border-8 border-white relative">
                  <div style={{ position: 'relative', paddingTop: '126.66666666666666%', width: '100%' }}>
                    {/* Selo de Exclusividade sobre o vídeo */}
                    <div className="absolute top-4 left-4 z-20 bg-amber-500 text-white text-[9px] md:text-[11px] font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 uppercase tracking-widest border border-white/20 animate-pulse">
                      <i className="fa-solid fa-crown text-[8px] md:text-[10px]"></i>
                      Fórmula Exclusiva
                    </div>
                    
                    <iframe 
                      id="panda-1ff1f643-e2fd-4d79-95e4-e0e2f309f040" 
                      src="https://player-vz-e907bd19-b8d.tv.pandavideo.com.br/embed/?v=1ff1f643-e2fd-4d79-95e4-e0e2f309f040&iosFakeFullscreen=true&autoplay=true&loop=true&muted=true&controls=false" 
                      style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                      allowFullScreen={true}
                      fetchPriority="high"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 text-center font-bold text-xs md:text-sm">
              ⭐ 4.9/5.0 (12.847 avaliações)
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <a href="#oferta" className="block w-full max-w-xs mx-auto bg-emerald-500 text-white font-black text-lg md:text-xl px-8 py-5 rounded-full shadow-xl active:scale-95 transition-all uppercase tracking-tight">
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;
