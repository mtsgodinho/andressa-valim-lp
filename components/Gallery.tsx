
import React from 'react';

interface GalleryProps {
  onImageClick: (url: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  // URLs corrigidas (removendo o 'h' extra)
  const images = [
    "https://i.imgur.com/LfCRjOA.jpeg",
    "https://i.imgur.com/DYjAkZa.png",
    "https://i.imgur.com/jYSw2xE.png",
    "https://i.imgur.com/EOXfr9y.jpeg",
    "https://i.imgur.com/ci2Tcd2.jpeg",
    "https://i.imgur.com/V54dcsm.jpeg",
  ];

  return (
    <section id="resultados" className="py-24 px-6 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados que inspiram</h2>
        <p className="text-gray-500 max-w-md mx-auto italic font-light">Transformações reais que devolveram a autoestima e a função a nossos pacientes.</p>
        <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-6"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="aspect-square overflow-hidden rounded-xl cursor-pointer hover:opacity-90 transition-all shadow-sm active:scale-95"
            onClick={() => onImageClick(img)}
          >
            <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover" 
                loading="lazy"
            />
          </div>
        ))}
      </div>
      <p className="text-center text-[9px] text-gray-400 mt-8 uppercase tracking-[0.2em] font-medium">
        * Resultados podem variar de pessoa para pessoa.
      </p>
    </section>
  );
};

export default Gallery;
