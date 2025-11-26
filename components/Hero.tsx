import React from 'react';
import { Youtube, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500">
      <div className="container mx-auto px-6 text-center relative z-10">
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-5xl mx-auto">
          Tu socio estratégico en el <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
            crecimiento de tu empresa
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-purple-100 font-medium mb-8 max-w-3xl mx-auto">
          Somos el complemento para tu crecimiento exponencial de tu Pyme
        </h2>

        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Hacemos que la IA potencie y agilice tu crecimiento y rentabilidad. 
          Tutoriales, consejos y herramientas para principiantes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://youtube.com/@tegedigital" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-purple-700 font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Youtube size={20} className="text-red-500" />
            Ver Canal de YouTube
          </a>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
            Explorar Servicios
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Abstract Shapes for Texture */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Hero;