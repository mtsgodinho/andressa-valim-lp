
import React from 'react';

interface GalleryProps {
  onImageClick: (url: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
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
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados reais</h2>
        <p className="text-gray-500 max-w-sm mx-auto italic font-light text-sm">Transformações que devolvem a alegria de sorrir.</p>
        <div className="w-12 h-[2px] bg-[#C5A059] mx-auto mt-6"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer hover:shadow-xl transition-all shadow-md active:scale-95 border border-zinc-100 group"
            onClick={() => onImageClick(img)}
          >
            <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                loading="lazy"
            />
          </div>
        ))}
      </div>
      <p className="text-center text-[9px] text-gray-400 mt-10 uppercase tracking-[0.2em] font-medium">
        * Resultados podem variar de pessoa para pessoa.
      </p>
    </section>
  );
};

export default Gallery;
