
import React from 'react';

interface LightboxProps {
  url: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ url, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white text-3xl font-light hover:text-[#C5A059] transition-colors"
        onClick={onClose}
      >
        &times;
      </button>
      <img 
        src={url} 
        alt="Visualização ampliada" 
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
