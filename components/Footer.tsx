import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-white tracking-tighter">SmithMedia</span>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-green-500 transition-colors">YouTube</a>
          <a href="#" className="hover:text-green-500 transition-colors">Twitter</a>
          <a href="#" className="hover:text-green-500 transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;