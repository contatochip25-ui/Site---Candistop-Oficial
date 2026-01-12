import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: 1, title: "Combate a Cândida", desc: "Os ativos naturais eliminam o fungo Candida albicans diretamente na origem, neutralizando sua proliferação." },
    { num: 2, title: "Equilibra a Flora", desc: "Restaura o pH vaginal ideal e fortalece as bactérias benéficas, criando um ambiente saudável e protegido." },
    { num: 3, title: "Protege e Previne", desc: "Fortalece sua imunidade íntima para evitar novas crises e manter você livre da candidíase para sempre." },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Como o CandiStop Funciona em 3 Passos Simples
          </h2>
          <p className="text-slate-500 text-lg font-medium">O tratamento completo que transforma sua saúde íntima de dentro para fora</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (visible on md+) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-red-200 via-rose-300 to-red-200 -z-10"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="text-center fade-in-section">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-rose-500 text-white rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-8 shadow-xl shadow-red-200">
                {s.num}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#oferta" className="bg-red-600 text-white font-black text-xl px-12 py-6 rounded-full shadow-lg hover:scale-105 transition-transform inline-block uppercase">
            Começar Meu Tratamento Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;