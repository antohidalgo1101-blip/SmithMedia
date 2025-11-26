import React from 'react';
import { Bot, Zap, Code, PenTool, Layout } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Bot size={32} />,
      title: "Tutoriales de IA",
      description: "Aprende a usar ChatGPT, Claude, Midjourney y más herramientas de IA con tutoriales paso a paso para principiantes."
    },
    {
      icon: <Zap size={32} />,
      title: "Automatización con IA",
      description: "Descubre cómo automatizar tareas repetitivas usando agentes de IA, desde organizar finanzas hasta crear contenido."
    },
    {
      icon: <Code size={32} />,
      title: "Programación para Todos",
      description: "Crea tus primeras aplicaciones web sin ser programador. De la idea al deploy en producción."
    },
    {
      icon: <PenTool size={32} />,
      title: "Diseño con IA",
      description: "Aprende a crear imágenes, logos y contenido visual profesional usando herramientas de IA generativa."
    },
    {
      icon: <Layout size={32} />,
      title: "Productividad Digital",
      description: "Optimiza tu trabajo con herramientas de IA para gestión de proyectos, notas inteligentes y organización."
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600">
            Soluciones diseñadas para acelerar tu transformación digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-600 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300"></div>
              
              <div className="mb-6 p-4 bg-gray-50 rounded-xl inline-block text-green-500 group-hover:text-purple-600 group-hover:bg-purple-50 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;