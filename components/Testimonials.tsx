import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { 
      name: "Mariana Silva", 
      loc: "São Paulo, SP", 
      image: "https://lh3.googleusercontent.com/d/1-2lU-BXFLPi0Lr9Lwt6P1F_eHfNf_ZvB",
      text: "Sofri com candidíase recorrente por 8 anos! Já tinha perdido as esperanças. Com o CandiStop, em 2 semanas os sintomas desapareceram completamente. Mudou minha vida!" 
    },
    { 
      name: "Juliana Costa", 
      loc: "Rio de Janeiro, RJ", 
      image: "https://lh3.googleusercontent.com/d/11yz8jdU-wpl2ZSwQu4iPhdC6yR6X4RDO",
      text: "Estava desesperada, a candidíase voltava todo mês. Após 30 dias usando CandiStop regularmente, estou há 6 meses sem nenhuma crise. Vale cada centavo!" 
    },
    { 
      name: "Ana Paula R.", 
      loc: "Belo Horizonte, MG", 
      image: "https://lh3.googleusercontent.com/d/1ExEWaKuHWJ5MNvJj9GR3TiU_aAQlQuXk",
      text: "Meu relacionamento estava sofrendo muito. O CandiStop literalmente salvou meu casamento! Finalmente posso viver minha intimidade sem medo ou dor." 
    },
    { 
      name: "Carolina Mendes", 
      loc: "Curitiba, PR", 
      image: "https://lh3.googleusercontent.com/d/1RiOtuwmVvUPHEj627R4k8H4Gfh9AYIfz",
      text: "Já tinha gasto mais de R$ 2.000 com médicos e remédios que não resolviam. O CandiStop foi a única coisa que funcionou de verdade!" 
    },
    { 
      name: "Fernanda Oliveira", 
      loc: "Porto Alegre, RS", 
      image: "https://lh3.googleusercontent.com/d/1ZLzt9caw7OJLoHq4iYBcP9kwqdCtGkfX",
      text: "Tinha vergonha até de ir à academia por causa do odor. Depois do CandiStop, minha autoestima voltou! Sinto que renasci. Recomendo muito!" 
    },
    { 
      name: "Patrícia Santos", 
      loc: "Recife, PE", 
      image: "https://lh3.googleusercontent.com/d/1owwCtGwJz5GWxLiwyegjPXhcnD0aArSR",
      text: "Estava quase entrando em depressão por causa da candidíase crônica. O CandiStop me devolveu a alegria de viver! Resultado incrível em poucas semanas." 
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Mais de 250 Mil Mulheres Já Eliminaram a Candidíase
          </h2>
          <p className="text-slate-500 text-lg font-medium">Veja o que nossas clientes estão dizendo sobre o CandiStop</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="fade-in-section bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-4 gap-1">
                  {[...Array(5)].map((_, idx) => <i key={idx} className="fa-solid fa-star text-sm"></i>)}
                </div>
                <p className="text-slate-700 font-medium italic mb-8 leading-relaxed">"{r.text}"</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden border border-slate-100 shrink-0 shadow-sm">
                    <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 leading-none mb-1">{r.name}</div>
                    <div className="text-[10px] text-slate-500 font-medium">{r.loc}</div>
                  </div>
                </div>
                <div className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-1 rounded-full whitespace-nowrap">
                   ✓ VERIFICADO
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;