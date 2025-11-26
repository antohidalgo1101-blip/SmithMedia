import React from 'react';
import { Calendar, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "Crea tu Primer Agente de IA en 27 Minutos",
      excerpt: "Tutorial completo para construir un agente que organice tus finanzas automáticamente.",
      date: "Hace 6 días",
      tag: "Tutorial",
      image: "https://picsum.photos/800/600?random=1"
    },
    {
      id: 2,
      title: "ChatGPT vs Gemini: ¿Cuál Elegir en 2025?",
      excerpt: "Comparativa completa de las dos IAs más populares y cuál se adapta mejor a ti.",
      date: "Hace 2 semanas",
      tag: "Comparativa",
      image: "https://picsum.photos/800/600?random=2"
    },
    {
      id: 3,
      title: "Make.com: Automatiza Sin Código",
      excerpt: "Crea automatizaciones profesionales sin escribir una línea de código.",
      date: "Hace 3 semanas",
      tag: "Herramientas",
      image: "https://picsum.photos/800/600?random=3"
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Últimas Novedades
            </h2>
            <p className="text-gray-600">Explora nuestro blog para estar al día.</p>
          </div>
          <button className="hidden md:inline-flex items-center text-purple-600 font-bold hover:text-purple-700 transition-colors">
            Ver todo el blog
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                 <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-bold text-purple-600 rounded-full flex items-center gap-1 shadow-sm uppercase tracking-wide">
                    <Tag size={12} />
                    {article.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-gray-400 text-xs mb-3 font-medium">
                  <Calendar size={14} className="mr-1" />
                  {article.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-purple-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {article.excerpt}
                </p>
                
                <a href="#" className="inline-block text-green-500 font-bold text-sm hover:underline mt-auto">
                  Leer artículo completo &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;