
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 bg-zinc-50 border-t border-gray-100 text-center">
      <div className="mb-10">
        <p className="signature text-5xl md:text-6xl text-[#C5A059] mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>Andressa Valim</p>
        <div className="space-y-1">
            <p className="uppercase text-[11px] tracking-[0.4em] font-extrabold text-black">Odontologia Real</p>
            <p className="uppercase text-[9px] tracking-[0.2em] font-medium text-black/60">Protesista e Implantodontista</p>
        </div>
      </div>

      <div className="space-y-6 mb-12">
        <div className="p-4 bg-white rounded-2xl shadow-sm inline-block max-w-xs border border-zinc-200">
            <p className="text-black text-sm leading-relaxed flex items-start gap-3 text-left font-medium">
                <svg className="w-5 h-5 text-[#C5A059] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Rua Maneca Quadros 252, <br/>Arroio Teixeira - Capão da Canoa/RS
            </p>
        </div>
        
        <div className="flex items-center justify-center gap-8">
            <a href="https://instagram.com/draandressavalim/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-sm text-black hover:text-[#C5A059] transition-all border border-zinc-200">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5551994020836" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-sm text-black hover:text-[#C5A059] transition-all border border-zinc-200">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82l.362.216c1.3.773 2.794 1.181 4.323 1.182h.003c5.447 0 9.879-4.432 9.882-9.88.002-2.64-1.03-5.123-2.898-6.992-1.868-1.868-4.351-2.898-6.992-2.898-5.447 0-9.879 4.432-9.882 9.881-.001 1.83.504 3.616 1.46 5.148l.236.375-1.003 3.661 3.743-.982zM17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                 </svg>
            </a>
        </div>
      </div>
      
      <p className="text-[10px] text-black font-bold uppercase tracking-widest leading-loose">
        © 2024 Dra. Andressa Valim. <br/> Desenvolvido para alta conversão.
      </p>
    </footer>
  );
};

export default Footer;
