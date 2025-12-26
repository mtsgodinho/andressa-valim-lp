
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col bg-white overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#C5A059]/5 to-transparent -z-10"></div>
      
      <div className="px-6 pt-16 pb-12 flex flex-col items-center text-center">
        <div className="mb-6 py-1 px-4 bg-zinc-100 rounded-full">
            <span className="uppercase tracking-[0.2em] text-[#C5A059] font-bold text-[10px]">Reabilitação Oral & Estética</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
          Eu sou a <br/>
          <span className="text-[#C5A059] italic">Dra. Andressa Valim</span>
        </h1>
        
        <p className="text-base md:text-xl text-gray-600 font-light mb-10 max-w-md leading-relaxed">
          Especialista em devolver a sua liberdade de sorrir através de uma odontologia real, segura e acolhedora.
        </p>
        
        {/* Container da imagem ajustado: max-w-sm e h-auto para não esticar */}
        <div className="w-full max-w-[320px] md:max-w-md mx-auto relative rounded-[2rem] overflow-hidden shadow-2xl mb-12 border-4 border-white group bg-zinc-50">
          <img 
            src="https://i.imgur.com/2Vb1GmZ.png" 
            alt="Dra. Andressa Valim" 
            className="w-full h-auto block transform transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>

        <div className="w-full space-y-6">
          <a 
            href="https://api.whatsapp.com/send?phone=5551994020836"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] text-white py-6 rounded-2xl font-bold text-lg shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:bg-[#1eb957] transition-all active:scale-95"
          >
            AGENDAR CONSULTA GRATUITA
          </a>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <span className="h-[1px] w-8 bg-gray-200"></span>
            <p className="text-[10px] uppercase tracking-widest font-semibold">Avaliação sem compromisso</p>
            <span className="h-[1px] w-8 bg-gray-200"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
