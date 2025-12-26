
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 bg-white border-t border-zinc-100 text-center">
      <div className="mb-12">
        <p className="signature text-5xl text-[#C5A059] mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>Andressa Valim</p>
        <div className="space-y-1">
            <p className="uppercase text-[11px] tracking-[0.4em] font-extrabold text-zinc-900">Odontologia Real</p>
            <p className="uppercase text-[9px] tracking-[0.2em] font-medium text-zinc-400">Protesista e Implantodontista</p>
        </div>
      </div>

      <div className="mb-12">
        <div className="p-5 bg-zinc-50 rounded-2xl inline-block w-full max-w-xs border border-zinc-100">
            <p className="text-zinc-600 text-xs leading-relaxed flex items-start gap-4 text-left font-medium">
                <svg className="w-6 h-6 text-[#C5A059] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Rua Maneca Quadros 252, <br/>Arroio Teixeira - Capão da Canoa/RS</span>
            </p>
        </div>
      </div>
      
      <p className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest leading-loose">
        © 2024 Dra. Andressa Valim. <br/> Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
