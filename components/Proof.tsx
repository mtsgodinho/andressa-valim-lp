
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
    <section className="py-24 px-6 bg-zinc-50">
      <div className="text-center mb-16">
        <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-2 block">Cuidado em cada detalhe</span>
        <h2 className="text-3xl font-bold mb-4 italic text-zinc-900">Odontopediatria de 💚</h2>
        <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed">Um ambiente acolhedor e seguro para os pequenos começarem a cuidar do sorriso desde cedo.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        {pediatricImages.map((img, idx) => (
          <div 
            key={idx} 
            className="rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all active:scale-95 aspect-square border border-white"
            onClick={() => onImageClick(img)}
          >
            <img 
                src={img} 
                alt={`Pediatria ${idx}`} 
                className="w-full h-full object-cover object-center" 
                loading="lazy" 
            />
          </div>
        ))}
      </div>
      
      <div className="mt-20 flex flex-col items-center gap-6">
        <div className="flex -space-x-4">
            {[1,2,3,4,5].map(i => (
                <img key={i} src={`https://i.pravatar.cc/150?u=${i + 20}`} className="w-12 h-12 rounded-full border-4 border-white shadow-lg" alt="Paciente" />
            ))}
            <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center text-white text-[10px] font-bold border-4 border-white shadow-lg">+2k</div>
        </div>
        <div className="text-center">
            <p className="text-lg font-bold text-zinc-900 leading-tight">Referência em Capão da Canoa</p>
            <p className="text-sm text-gray-500">Mais de 2.000 sorrisos transformados com carinho.</p>
        </div>
      </div>
    </section>
  );
};

export default Proof;
