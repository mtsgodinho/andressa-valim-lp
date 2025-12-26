
import React from 'react';

interface GalleryProps {
  onImageClick: (url: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  const images = [
    { url: "https://i.imgur.com/LfCRjOA.jpeg", label: "Transformação Total" },
    { url: "https://i.imgur.com/DYjAkZa.png", label: "Reabilitação Oral" },
    { url: "https://i.imgur.com/jYSw2xE.png", label: "Estética Avançada" },
    { url: "https://i.imgur.com/EOXfr9y.jpeg", label: "Sorriso Renovado" },
    { url: "https://i.imgur.com/ci2Tcd2.jpeg", label: "Saúde & Estética" },
    { url: "https://i.imgur.com/V54dcsm.jpeg", label: "Prótese sobre Implante" },
  ];

  return (
    <section id="resultados" className="py-24 px-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Casos Clínicos</h2>
        <p className="text-gray-400 max-w-sm mx-auto font-light text-sm uppercase tracking-[0.1em]">Excelência técnica e resultados naturais.</p>
        <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mt-8"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
        {images.map((item, idx) => (
          <div 
            key={idx} 
            className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer shadow-sm border border-zinc-100 bg-zinc-50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98]"
            onClick={() => onImageClick(item.url)}
          >
            {/* Overlay de Brilho/Qualidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 z-10 group-hover:opacity-80 transition-opacity"></div>
            
            <img 
                src={item.url} 
                alt={item.label} 
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
            />
            
            {/* Etiqueta Minimalista */}
            <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-end">
                <span className="text-[9px] text-white/90 font-bold uppercase tracking-widest bg-black/20 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                    {item.label}
                </span>
                <div className="w-6 h-6 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#C5A059] transition-colors">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
                </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium max-w-[250px] mx-auto leading-relaxed">
          * Imagens autorizadas por pacientes. <br/> Resultados são individuais e variam.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
