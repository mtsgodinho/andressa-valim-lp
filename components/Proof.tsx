
import React from 'react';

interface ProofProps {
  onImageClick: (url: string) => void;
}

const Proof: React.FC<ProofProps> = ({ onImageClick }) => {
  const pediatricImages = [
    "https://i.imgur.com/xcrvgAz.png",
    "https://i.imgur.com/tFH1s2m.png",
    "https://i.imgur.com/xCZCtpC.png",
    "https://i.imgur.com/JIbIuaA.png",
    "https://i.imgur.com/MxWzYU7.png",
    "https://i.imgur.com/esRZy6T.png",
  ];

  return (
    <section className="py-24 px-6 bg-zinc-50 border-y border-zinc-100">
      <div className="text-center mb-16">
        <span className="text-[#C5A059] font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">Cuidado Especializado</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic text-zinc-900">Odontopediatria de 💚</h2>
        <div className="w-12 h-[1px] bg-zinc-300 mx-auto mb-6"></div>
        <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed font-light">Um ambiente lúdico e seguro para que a primeira experiência seja inesquecível.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
        {pediatricImages.map((img, idx) => (
          <div 
            key={idx} 
            className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer shadow-sm border border-white bg-white transition-all duration-500 hover:shadow-xl active:scale-95"
            onClick={() => onImageClick(img)}
          >
            <img 
                src={img} 
                alt={`Pediatria ${idx}`} 
                className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                loading="lazy" 
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 flex flex-col items-center gap-8">
        <div className="relative">
            <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=${i + 30}`} className="w-12 h-12 rounded-full border-[3px] border-white shadow-xl" alt="Paciente" />
                ))}
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col">
                <span className="text-xs font-bold text-[#C5A059] leading-none">+2.000</span>
                <span className="text-[8px] uppercase tracking-tighter text-gray-400 font-bold">Sorrisos</span>
            </div>
        </div>
        
        <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-zinc-900 leading-tight tracking-tight">Referência em Capão da Canoa</h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Atendimento humanizado e acolhedor</p>
        </div>
      </div>
    </section>
  );
};

export default Proof;
