
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Como devo tomar o CandiStop?", a: "Recomendamos tomar 2 cápsulas por dia, uma pela manhã e outra à noite, 30 minutos antes das refeições com água. O tratamento ideal é de 90 dias." },
    { q: "Em quanto tempo vou ver resultados?", a: "A maioria das mulheres relata melhora significativa nos primeiros 7 a 14 dias de uso. Para eliminação definitiva, recomendamos o ciclo de 3 meses." },
    { q: "O CandiStop tem efeitos colaterais?", a: "Não! É 100% natural, sem químicos agressivos. Nossa fórmula é aprovada pela ANVISA e respeita seu organismo." },
    { q: "Funciona para candidíase recorrente?", a: "Sim! Ele foi especialmente desenvolvido para isso. Restaura o pH vaginal e fortalece a imunidade para impedir novas crises." },
    { q: "Posso usar durante a amamentação?", a: "Embora seja natural, recomendamos que gestantes e lactantes consultem seu médico antes de iniciar qualquer suplementação." },
    { q: "Como funciona a garantia?", a: "Você tem 30 dias para testar. Se não ficar 100% satisfeita, devolvemos seu dinheiro integralmente, sem perguntas." },
    { q: "O produto é aprovado pela ANVISA?", a: "Sim, o CandiStop é devidamente regularizado e aprovado, garantindo total segurança e eficácia." },
    { q: "Qual o prazo de entrega?", a: "De 7 a 12 dias úteis para todo o Brasil. O envio é discreto e você recebe código de rastreamento." },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-500 text-lg font-medium">Tire todas as suas dúvidas sobre o CandiStop</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="fade-in-section rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-slate-100"
              >
                <span className="font-bold text-slate-900 text-lg">{f.q}</span>
                <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}></i>
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-slate-600 font-medium leading-relaxed bg-slate-50">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
