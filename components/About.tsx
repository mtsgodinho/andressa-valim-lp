
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
                    className="rounded-3xl shadow-xl w-full grayscale-[10%] object-cover h-[450px]"
                />
                <div className="absolute -bottom-6 -right-4 bg-white p-6 rounded-2xl shadow-lg border border-zinc-100">
                    <p className="text-3xl font-bold text-[#C5A059]">100%</p>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter leading-none">Foco no seu <br/> bem-estar</p>
                </div>
            </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 leading-tight">Uma Odontologia Real feita para você.</h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
            <p>
              Muitas pessoas evitam o dentista por medo ou experiências passadas ruins. <strong>Eu estou aqui para mudar isso.</strong>
            </p>
            <p>
              Como Protesista e Implantodontista, meu trabalho vai além de "consertar dentes". Eu devolvo dignidade, prazer em comer e a alegria de se olhar no espelho.
            </p>
            
            <ul className="grid grid-cols-1 gap-4 pt-4">
              <li className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-zinc-100">
                <span className="bg-[#C5A059] text-white p-1 rounded-full shrink-0">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <span className="text-sm font-semibold text-zinc-800">Sedação com Óxido Nitroso</span>
              </li>
              <li className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-zinc-100">
                <span className="bg-[#C5A059] text-white p-1 rounded-full shrink-0">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <span className="text-sm font-semibold text-zinc-800">Atendimento humanizado</span>
              </li>
            </ul>
          </div>

          <a 
            href="https://instagram.com/draandressavalim/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full border-2 border-zinc-200 py-4 rounded-2xl text-zinc-600 font-bold text-sm hover:bg-zinc-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Acompanhe os bastidores
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
