
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-[#FDFBF7]">
      <div className="flex flex-col md:flex-row md:items-center gap-12">
        <div className="w-full md:w-1/2">
            <div className="relative">
                <img 
                    src="https://i.imgur.com/q1oIVhK.png" 
                    alt="Andressa Valim em atendimento" 
                    className="rounded-3xl shadow-xl w-full grayscale-[20%]"
                />
                <div className="absolute -bottom-6 -right-4 bg-white p-6 rounded-2xl shadow-lg">
                    <p className="text-3xl font-bold text-[#C5A059]">100%</p>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter leading-none">Foco no seu <br/> bem-estar</p>
                </div>
            </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Uma Odontologia Real feita para você.</h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Muitas pessoas evitam o dentista por medo ou experiências passadas ruins. <strong>Eu estou aqui para mudar isso.</strong>
            </p>
            <p>
              Como Protesista e Implantodontista, meu trabalho vai além de "consertar dentes". Eu devolvo dignidade, prazer em comer e a alegria de se olhar no espelho.
            </p>
            
            <ul className="space-y-4 pt-4">
              <li className="flex gap-4 items-start">
                <span className="bg-[#C5A059] text-white p-1 rounded-full shrink-0 mt-1">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <span className="text-base font-medium">Sedação com Óxido Nitroso (adeus à ansiedade)</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-[#C5A059] text-white p-1 rounded-full shrink-0 mt-1">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <span className="text-base font-medium">Atendimento humanizado e sem pressa</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-[#C5A059] text-white p-1 rounded-full shrink-0 mt-1">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <span className="text-base font-medium">Equipamentos de alta tecnologia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
