
import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    pandascripttag: any[];
    PandaPlayer: any;
  }
}

interface TestimonialItem {
  type: 'video' | 'image';
  id?: string;
  src?: string;
  user?: string;
  color?: string;
  glow: string;
  caption: string;
}

const VideoTestimonials: React.FC = () => {
  const initializedPlayers = useRef<Set<string>>(new Set());
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const items: TestimonialItem[] = [
    { 
      type: 'video', 
      id: 'panda-d1721860-ca55-4e2f-927e-919491e6dc25', 
      user: '@carol_viverbem',
      color: 'bg-[#062c2c]',
      glow: 'neon-glow',
      caption: 'Carol eliminou a coceira em 3 dias'
    },
    { 
      type: 'image', 
      src: 'https://lh3.googleusercontent.com/d/1f_mPWsCFGwx2Wj1DBx6dkOd8-UMReU68', 
      caption: 'Recuperação da flora íntima em 2 semanas',
      glow: 'neon-glow-cyan'
    },
    { 
      type: 'video', 
      id: 'panda-0ebf257e-7ec5-4d78-8b80-fcfaf71f46e1', 
      user: '@ana_saude_feminina',
      color: 'bg-[#120a2a]',
      glow: 'neon-glow',
      caption: 'Ana Paula recuperou a autoestima'
    },
    { 
      type: 'image', 
      src: 'https://lh3.googleusercontent.com/d/1kPbizkJTFGHLcgturF0Zk61A1gPA-78e', 
      caption: 'Mais de 6 meses sem crises recorrentes',
      glow: 'neon-glow-cyan'
    },
    { 
      type: 'video', 
      id: 'panda-f498b7e8-5800-46cf-a9b7-c6d1d3e39387', 
      user: '@dicas_da_ju',
      color: 'bg-[#2d0f1a]',
      glow: 'neon-glow',
      caption: 'Juliana salvou seu relacionamento'
    },
    { 
      type: 'image', 
      src: 'https://lh3.googleusercontent.com/d/1zxqY0C1WE_z_QrsTpP42Jq9wOnPCBBzi', 
      caption: 'O fim definitivo do corrimento e odor',
      glow: 'neon-glow-cyan'
    }
  ];

  useEffect(() => {
    const initVideos = () => {
      if (!window.PandaPlayer) return;
      
      const videoIds = items
        .filter(item => item.type === 'video')
        .map(item => item.id!);

      videoIds.forEach(id => {
        if (!initializedPlayers.current.has(id)) {
          const element = document.getElementById(id);
          if (element) {
            try {
              new window.PandaPlayer(id);
              initializedPlayers.current.add(id);
            } catch (e) {
              console.warn(`Erro ao inicializar player ${id}:`, e);
            }
          }
        }
      });
    };

    const interval = setInterval(() => {
      if (window.PandaPlayer) {
        initVideos();
        const videoCount = items.filter(i => i.type === 'video').length;
        if (initializedPlayers.current.size >= videoCount) clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [items]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  };

  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Duplicar itens apenas para o carrossel infinito visual
  const infiniteItems = [...items, ...items, ...items];

  return (
    <section className="py-24 bg-[#0a0f1d] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          <span className="text-white text-xs font-black uppercase tracking-widest">Feed de Resultados ao Vivo</span>
        </div>
        
        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
          Dominando o <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">TikTok</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
          Clique para ver os resultados reais das nossas clientes em tela cheia!
        </p>
      </div>

      {/* Carrossel Infinito */}
      <div className="flex relative select-none">
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#0a0f1d] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#0a0f1d] to-transparent z-20 pointer-events-none"></div>

        <div className="flex gap-6 md:gap-10 animate-scroll py-10">
          {infiniteItems.map((item, index) => (
            <div 
              key={`${item.type}-${index}`} 
              className="w-[250px] md:w-[350px] flex-shrink-0 group perspective-1000 cursor-pointer"
              onClick={() => setSelectedIndex(index % items.length)}
            >
              <div className={`relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden transition-all duration-700 transform group-hover:scale-105 group-hover:-rotate-1 ${item.glow}`}>
                {item.type === 'video' ? (
                  <div className={`${item.color} aspect-[9/16] relative border-4 border-white/5`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-80 group-hover:opacity-100 transition-opacity">
                      <i className="fa-solid fa-play text-white text-4xl md:text-6xl drop-shadow-2xl"></i>
                    </div>
                    <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                      <iframe 
                        id={item.id + '-' + index} 
                        src={`https://player-vz-e907bd19-b8d.tv.pandavideo.com.br/embed/?v=${item.id!.replace('panda-', '')}&iosFakeFullscreen=true&autoplay=false&controls=false`} 
                        style={{ border: 'none', width: '100%', height: '100%' }} 
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="absolute bottom-8 left-8 flex items-center gap-3 z-30 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                      <span className="text-xs font-bold text-white tracking-tight">{item.user}</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white aspect-[9/16] relative border-4 border-white/5">
                    <img src={item.src} alt={item.caption} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 w-full px-6">
                      <div className="bg-cyan-500 text-white font-black px-6 py-2.5 rounded-full text-[10px] shadow-2xl uppercase tracking-[0.2em] mb-3">Ver Depoimento</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Botão Fechar */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white text-4xl z-[1100] transition-colors p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Navegação Esquerda */}
          <button 
            className="absolute left-4 md:left-10 text-white/30 hover:text-white text-4xl md:text-6xl z-[1100] transition-all hover:scale-110 hidden sm:block p-4"
            onClick={handlePrev}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Navegação Direita */}
          <button 
            className="absolute right-4 md:right-10 text-white/30 hover:text-white text-4xl md:text-6xl z-[1100] transition-all hover:scale-110 hidden sm:block p-4"
            onClick={handleNext}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Conteúdo Central */}
          <div 
            className="w-full max-w-[90vw] md:max-w-[450px] aspect-[9/16] relative animate-in zoom-in-95 duration-300 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            {items[selectedIndex].type === 'video' ? (
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black border-4 border-white/10">
                <iframe 
                  key={`modal-video-${selectedIndex}`}
                  src={`https://player-vz-e907bd19-b8d.tv.pandavideo.com.br/embed/?v=${items[selectedIndex].id!.replace('panda-', '')}&autoplay=true`} 
                  style={{ border: 'none', width: '100%', height: '100%' }} 
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                  allowFullScreen={true}
                ></iframe>
              </div>
            ) : (
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white border-4 border-white/10">
                <img 
                  src={items[selectedIndex].src} 
                  alt={items[selectedIndex].caption} 
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Legenda do Modal */}
            <div className="absolute -bottom-20 left-0 w-full text-center px-6">
              <p className="text-white text-lg font-bold drop-shadow-lg mb-2">
                {items[selectedIndex].caption}
              </p>
              <div className="flex justify-center gap-1 text-amber-400">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            
            {/* Navegação Mobile Overlay */}
            <div className="absolute inset-y-0 left-0 w-1/4 z-[1050] sm:hidden" onClick={handlePrev}></div>
            <div className="absolute inset-y-0 right-0 w-1/4 z-[1050] sm:hidden" onClick={handleNext}></div>
          </div>
        </div>
      )}

      <div className="mt-20 text-center relative z-20">
        <a 
          href="#oferta" 
          onClick={handleScrollToOffer}
          className="group relative bg-white text-slate-950 font-black text-xl md:text-3xl px-16 py-8 rounded-full shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 transition-all inline-block uppercase tracking-tighter overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-4">
            Quero Me Livrar da Candidíase 
            <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
      </div>
    </section>
  );
};

export default VideoTestimonials;
