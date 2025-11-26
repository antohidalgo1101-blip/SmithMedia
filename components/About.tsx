import React from 'react';
import { Users, Video, Gift } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      value: "7.9K+",
      label: "Suscriptores",
    },
    {
      icon: <Video className="w-8 h-8 text-green-500" />,
      value: "33+",
      label: "Videos Educativos",
    },
    {
      icon: <Gift className="w-8 h-8 text-green-500" />,
      value: "100%",
      label: "Contenido Gratuito",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-3 uppercase">
              Sobre Nosotros
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quiénes Somos
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              En SmithMedia creemos que la tecnología debe ser para todos. Creamos contenido para ayudar a tu empresa a comunicar mejor apoyándonos con la <span className="font-semibold text-green-500">Inteligencia Artificial</span>, automatización y herramientas digitales.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
                >
                  <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-extrabold text-gray-800 mb-1">{stat.value}</h4>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;