
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Avaliação Honesta",
      desc: "Tratamentos indicados apenas quando realmente necessários para sua saúde.",
      icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    {
      title: "Atendimento Comigo",
      desc: "Você é atendido por mim do início ao fim, garantindo proximidade e atenção.",
      icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    },
    {
        title: "Total Clareza",
        desc: "Explico cada passo do seu tratamento com linguagem simples e transparente.",
        icon: <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
        title: "Zero Estresse",
        desc: "Uso da sedação com óxido nitroso para que você relaxe completamente.",
        icon: <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    }
  ];

  return (
    <section className="py-20 px-8 bg-zinc-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Por que confiar em mim?</h2>
        <div className="w-16 h-1 bg-[#C5A059] mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((b, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {b.icon}
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{b.title}</h3>
            <p className="text-gray-500 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
