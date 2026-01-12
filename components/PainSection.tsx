
import React from 'react';

const PainSection: React.FC = () => {
  const pains = [
    { icon: "😣", title: "Coceira Insuportável", desc: "Aquela coceira constante que não te deixa em paz e te impede de ter uma vida normal." },
    { icon: "💔", title: "Relacionamento Afetado", desc: "O desconforto e a insegurança que prejudicam seus momentos a dois e sua intimidade." },
    { icon: "😰", title: "Constrangimento Diário", desc: "O corrimento e o mau cheiro que causam desconforto mesmo após vários banhos ao dia." },
    { icon: "🔄", title: "Crises Recorrentes", desc: "Você trata, melhora por um tempo, mas logo a candidíase volta num ciclo vicioso sem fim." },
    { icon: "💊", title: "Remédios Ineficazes", desc: "Gastos com pomadas que só dão alívio temporário e causam efeitos colaterais." },
    { icon: "😢", title: "Baixa Autoestima", desc: "Sentimento de frustração e vergonha que compromete toda sua qualidade de vida." },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[1.75rem] md:text-5xl font-black text-center text-slate-900 mb-4 leading-tight">
          Você Está Cansada de Sofrer?
        </h2>
        <p className="text-center text-slate-500 text-base md:text-lg mb-10 md:mb-16 font-medium">
          Sabemos exatamente pelo que você está passando...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {pains.map((p, i) => (
            <div key={i} className="fade-in-section p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 border-l-4 md:border-l-8 border-rose-500 shadow-sm transition-all">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">{p.icon}</div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 md:mb-4">{p.title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 p-8 md:p-10 bg-rose-50 rounded-2xl md:rounded-3xl border-2 border-rose-200 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-xl md:text-3xl font-black text-rose-600 mb-3">
            Mas Isso Está Prestes a Mudar...
          </h3>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed font-semibold">
            Você está a poucos minutos de descobrir a nova abordagem natural que vai transformar sua vida!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
