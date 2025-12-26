
import React from 'react';

const Steps: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Como funciona a primeira consulta?</h2>
        <p className="text-gray-500 uppercase text-xs tracking-widest font-bold">Simples, prático e sem custos</p>
      </div>

      <div className="space-y-12">
        <div className="flex gap-6 items-start relative">
          <div className="absolute left-[20px] top-[40px] bottom-[-40px] w-[2px] bg-gray-100 -z-10"></div>
          <div className="w-10 h-10 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold shrink-0 shadow-lg">1</div>
          <div>
            <h4 className="text-xl font-bold mb-2">Chame no WhatsApp</h4>
            <p className="text-gray-500">Clique em qualquer botão desta página para falar diretamente com minha equipe.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start relative">
          <div className="absolute left-[20px] top-[40px] bottom-[-40px] w-[2px] bg-gray-100 -z-10"></div>
          <div className="w-10 h-10 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold shrink-0 shadow-lg">2</div>
          <div>
            <h4 className="text-xl font-bold mb-2">Escolha seu horário</h4>
            <p className="text-gray-500">Vamos encontrar o melhor dia para você vir ao meu consultório em Capão da Canoa.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="w-10 h-10 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold shrink-0 shadow-lg">3</div>
          <div>
            <h4 className="text-xl font-bold mb-2">Avaliação Premium</h4>
            <p className="text-gray-500">Faremos um diagnóstico completo. É aqui que você tira todas as suas dúvidas gratuitamente.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 p-6 bg-[#C5A059]/5 rounded-2xl border border-[#C5A059]/20 text-center">
        <p className="text-[#C5A059] font-bold text-sm italic">"Meu objetivo é que você se sinta ouvido(a) e seguro(a) antes de qualquer decisão."</p>
      </div>
    </section>
  );
};

export default Steps;
