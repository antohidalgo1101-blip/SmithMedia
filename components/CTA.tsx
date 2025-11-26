import React from 'react';

const CTA: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 text-center px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          ¿Listo para Dominar la IA?
        </h2>
        <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
          Únete a miles que ya están emprendiendo con nosotros.
        </p>
        
        <button className="px-10 py-5 rounded-full bg-white text-purple-600 font-bold text-lg shadow-xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 transform">
          Suscribirse al Canal
        </button>
      </div>
    </div>
  );
};

export default CTA;