
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col bg-white overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#C5A059]/5 to-transparent -z-10"></div>
      
      <div className="px-6 pt-16 pb-12 flex flex-col items-center text-center">
        <div className="mb-6 py-1.5 px-4 bg-zinc-100 rounded-full border border-zinc-200">
            <span className="uppercase tracking-[0.2em] text-[#C5A059] font-bold text-[10px]">Reabilitação Oral & Estética</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
          Eu sou a <br/>
          <span className="text-[#C5A059] italic">Dra. Andressa Valim</span>
        </h1>
        
        <p className="text-base md:text-xl text-gray-600 font-light mb-10 max-w-md leading-relaxed">
          Especialista em devolver a sua liberdade de sorrir através de uma odontologia real, segura e acolhedora.
        </p>
        
        <div className="relative w-full max-w-[300px] md:max-w-md mx-auto mb-10">
          <div className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-zinc-50 aspect-[4/5] relative">
            <img 
              src="https://i.imgur.com/2Vb1GmZ.png" 
              alt="Dra. Andressa Valim" 
              className="w-full h-full object-cover object-center transform transition-transform duration-1000"
            />
            
            {/* Badge Instagram Profissional - Posicionado na parte inferior */}
            <a 
              href="https://instagram.com/draandressavalim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute right-4 bottom-6 z-10 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-zinc-100 flex items-center gap-2 animate-bounce-slow transform hover:scale-105 transition-transform"
            >
              <div className="w-8 h-8 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-lg flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div className="flex flex-col items-start pr-2">
                <span className="text-[9px] font-bold text-gray-400 uppercase leading-none">Acompanhe</span>
                <span className="text-xs font-bold text-black tracking-tight">@draandressavalim</span>
              </div>
            </a>
          </div>
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
