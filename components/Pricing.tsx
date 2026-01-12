
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "TRATAMENTO DE ALÍVIO",
      pots: "1 pote - 30 dias",
      image: "https://lh3.googleusercontent.com/d/1rOnoBsEeiDWIVM3rfsJ00mS4PEtJoKpR",
      oldPrice: "297,00",
      newPrice: "147,00",
      installments: "14,76",
      featured: false,
      tag: "INÍCIO RÁPIDO",
      link: "https://checkout.payt.com.br/89b6930999d93d0ddddcbc51b5ff1061?split=12",
      benefits: ["Alívio inicial", "Frete GRÁTIS Brasil", "Garantia de 30 dias", "Embalagem discreta"]
    },
    {
      name: "TRATAMENTO COMPLETO",
      pots: "Protocolo 120 Dias (Leve 4, Pague 3)",
      image: "https://lh3.googleusercontent.com/d/1XDm0Wet34PfUPiDhacZEC3suisLxdIyg",
      oldPrice: "587,00",
      newPrice: "347,00",
      installments: "34,84",
      featured: true,
      popular: "⭐ RECOMENDAÇÃO CLÍNICA",
      promo: "🎁 ÚLTIMAS UNIDADES (3+1)",
      link: "https://checkout.payt.com.br/d490a5a586b87a4f7c54bff1fcd39317?split=12",
      benefits: [
        "Eliminação definitiva (120 dias)", 
        "REPROGRAMAÇÃO DO pH ÍNTIMO", 
        "Bloqueio de novas colônias", 
        "Frete VIP com Seguro Total",
        "Acesso ao Guia Pós-Cura"
      ]
    },
    {
      name: "CONTROLE ATIVO",
      pots: "Kit 2 potes - 60 dias",
      image: "https://lh3.googleusercontent.com/d/1bGTFwqA_neb_GfPEuCAqmjm9KQW5r3Ev",
      oldPrice: "437,00",
      newPrice: "247,00",
      installments: "24,80",
      featured: false,
      tag: "ESTABILIZAÇÃO",
      link: "https://checkout.payt.com.br/21036a2695d09deb1b9907ce00e14d3c?split=12",
      benefits: ["Restauração do pH", "Proteção prolongada", "Frete GRÁTIS Brasil", "Garantia Total"]
    }
  ];

  return (
    <section id="oferta" className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <span className="text-purple-600 font-black tracking-widest text-[10px] md:text-xs uppercase mb-3 block bg-purple-100 inline-block px-4 py-1 rounded-full">ESTOQUE LIMITADO</span>
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 leading-tight px-2">Invista na sua Liberdade</h2>
          <p className="text-slate-600 text-sm md:text-xl font-medium max-w-2xl mx-auto px-4 italic">
            "A saúde íntima não é um gasto, é o retorno da sua paz e confiança."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch mb-16 md:mb-24">
          {plans.map((p, i) => (
            <div key={i} className={`fade-in-section relative p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col transition-all duration-500 shadow-2xl ${
              p.featured 
              ? 'bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-500 border-none md:scale-110 z-10 my-8 md:my-0' 
              : 'bg-white border border-slate-100 hover:shadow-2xl'
            }`}>
              
              {p.featured && (
                <>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 font-black text-[10px] md:text-xs px-6 py-2 rounded-full shadow-lg uppercase tracking-tight whitespace-nowrap z-30">
                    {p.popular}
                  </div>
                  <div className="absolute -top-6 -right-2 md:-right-6 bg-red-600 text-white font-black text-[9px] md:text-[11px] px-3 md:px-5 py-2 rounded-xl shadow-xl transform rotate-12 animate-pulse border-2 border-white/20 z-30">
                    {p.promo}
                  </div>
                </>
              )}

              {!p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 text-white font-bold text-[9px] px-4 py-1.5 rounded-full uppercase z-30">
                  {p.tag}
                </div>
              )}
              
              <div className="text-center mt-4 mb-4">
                <h3 className={`text-xl md:text-2xl font-black mb-1 ${p.featured ? 'text-white' : 'text-slate-900'}`}>{p.name}</h3>
                <p className={`font-bold text-[10px] uppercase tracking-wider ${p.featured ? 'text-white/80' : 'text-slate-400'}`}>{p.pots}</p>
              </div>

              <div className="mb-4 md:mb-6 flex justify-center h-48 md:h-72 relative">
                {p.featured && (
                  <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-90 animate-pulse"></div>
                )}
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className={`h-full object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.3)] transition-transform duration-700 relative z-10 ${p.featured ? 'scale-110 rotate-1' : 'hover:scale-105'}`}
                />
              </div>

              <div className="text-center mb-6">
                <div className={`line-through text-[10px] md:text-sm font-medium mb-1 ${p.featured ? 'text-white/60' : 'text-slate-400'}`}>
                  {p.featured ? `Valor Real: R$ ${p.oldPrice}` : `De R$ ${p.oldPrice}`}
                </div>
                
                <div className="flex items-center justify-center gap-0.5">
                  <span className={`text-xl md:text-3xl font-black self-start mt-2 ${p.featured ? 'text-white' : 'text-red-600'}`}>
                    12x <span className="text-lg md:text-xl">R$</span>
                  </span>
                  <span className={`text-5xl md:text-8xl font-black tracking-tighter ${p.featured ? 'text-white' : 'text-red-600'}`}>
                    {p.installments.split(',')[0]}
                  </span>
                  <span className={`text-xl md:text-3xl font-black self-start mt-2 ${p.featured ? 'text-white' : 'text-red-600'}`}>
                    ,{p.installments.split(',')[1]}
                  </span>
                </div>
                
                <div className={`font-black text-[11px] md:text-base mt-2 flex items-center justify-center gap-2 ${p.featured ? 'text-white' : 'text-slate-700'}`}>
                  {p.featured ? `OU R$ ${p.newPrice} À VISTA` : `OU R$ ${p.newPrice} À VISTA`}
                  {p.featured && <span className="bg-emerald-400 text-emerald-950 text-[9px] px-2 py-0.5 rounded-md">ECONOMIA MÁXIMA</span>}
                </div>

                <div className={`mt-3 flex items-center justify-center gap-1.5 font-black text-[10px] md:text-xs ${p.featured ? 'text-emerald-300 animate-pulse' : 'text-emerald-600'}`}>
                   <i className="fa-solid fa-truck-fast"></i> FRETE GRÁTIS PARA TODO O BRASIL
                </div>
              </div>

              <div className="flex-1 space-y-2.5 md:space-y-3 mb-6 md:mb-8">
                {p.benefits.map((b, bi) => (
                  <div key={bi} className={`flex items-start gap-2.5 p-2.5 rounded-2xl ${p.featured ? 'bg-white/10 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${p.featured ? 'bg-white text-purple-600' : 'bg-emerald-100 text-emerald-600'}`}>
                      <i className="fa-solid fa-check text-[9px] font-black"></i>
                    </div>
                    <span className={`text-[11px] md:text-[14px] font-bold leading-tight ${p.featured ? 'text-white' : 'text-slate-700'}`}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>

              <a 
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-full py-5 md:py-8 rounded-full text-center font-black text-sm md:text-2xl shadow-[0_15px_35px_rgba(0,0,0,0.25)] active:scale-95 transition-all overflow-hidden flex items-center justify-center gap-3 no-underline animate-shine-loop ${
                  p.featured 
                  ? 'bg-white text-purple-700 hover:shadow-white/20' 
                  : 'bg-gradient-to-r from-red-600 to-rose-600 text-white'
                }`}
              >
                <i className={`fa-solid fa-cart-shopping text-xs md:text-xl opacity-80 group-hover:scale-110 transition-transform ${p.featured ? 'text-purple-600' : 'text-white'}`}></i>
                <span className="tracking-tight uppercase">Conheça o tratamento</span>
              </a>
              
              <div className="mt-6 flex flex-col items-center gap-3">
                <div className={`flex justify-center gap-4 scale-100 ${p.featured ? 'opacity-100' : 'opacity-40'}`}>
                  <img src="https://img.icons8.com/color/48/000000/visa.png" className="w-8 h-8 object-contain" alt="Visa" />
                  <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="w-8 h-8 object-contain" alt="Mastercard" />
                  <img src="https://img.icons8.com/color/48/000000/pix.png" className="w-8 h-8 object-contain" alt="Pix" />
                </div>
                <p className={`text-[10px] font-black uppercase tracking-[0.1em] flex items-center gap-2 ${p.featured ? 'text-white' : 'text-slate-500'}`}>
                  <i className={`fa-solid fa-shield-check ${p.featured ? 'text-emerald-300' : 'text-emerald-500'}`}></i>
                  Ambiente 100% Criptografado
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RECOMENDAÇÃO CLÍNICA - DESIGN ATUALIZADO */}
        <div className="fade-in-section bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4.5rem] border-2 border-purple-100 flex flex-col items-center text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500"></div>
           
           <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-purple-600 to-pink-500 rounded-[2rem] flex items-center justify-center shrink-0 shadow-[0_20px_40px_rgba(147,51,234,0.3)] mb-8 transform group-hover:rotate-12 transition-transform duration-500">
             <i className="fa-solid fa-certificate text-3xl md:text-6xl text-white"></i>
           </div>
           
           <h4 className="text-purple-900 text-lg md:text-3xl font-black mb-6 uppercase tracking-tight">
             RECOMENDAÇÃO CLÍNICA ESPECIALIZADA:
           </h4>
           
           <div className="space-y-6 max-w-3xl">
             <p className="text-slate-700 font-bold leading-relaxed text-base md:text-2xl">
               "Protocolos de 30 dias funcionam apenas como alívio de sintomas. Para a <span className="text-purple-600 border-b-2 border-purple-200">eliminação real da colônia fúngica</span> e reequilíbrio do pH, o organismo exige no mínimo 90 dias de aporte nutricional específico."
             </p>
             <p className="text-slate-500 font-semibold leading-relaxed text-sm md:text-xl">
               O <span className="text-slate-800 font-black">Tratamento Completo (3+1)</span> é o padrão ouro das clínicas de saúde integrativa: ele garante que o fungo não encontre mais ambiente para crescer, evitando o efeito sanfona da candidíase recorrente. Aproveite o frasco cortesia enquanto durar o estoque reserva.
             </p>
           </div>

           <div className="mt-10 flex items-center justify-center gap-2 text-purple-600 font-black text-xs md:text-base">
             <i className="fa-solid fa-user-md"></i>
             <span>Protocolo Validado por Especialistas em Saúde da Mulher</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
