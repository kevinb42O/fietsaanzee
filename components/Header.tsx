
import React, { useState, useEffect } from 'react';
import { Bike, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-[100] transition-all duration-300 safe-area-top ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 py-2 md:py-3' : 'bg-white/70 backdrop-blur-lg py-3 sm:py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between safe-area-left safe-area-right">
        
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2 sm:gap-2.5 group transition-transform active:scale-95 touch-target">
          <div className="bg-amber-500 p-1.5 rounded-lg text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-200">
            <Bike size={20} className="sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter leading-none">
              <span className="text-slate-900">Fiets</span><span className="text-amber-500">Aan</span><span className="text-slate-900">Zee</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5 sm:mt-1 hidden sm:block">
              Binnenkort beschikbaar
            </span>
          </div>
        </a>
        
        {/* Contact */}
        <a
          href="mailto:info@fietsaanzee.be"
          className="btn-lift flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-black text-xs sm:text-sm hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 group"
        >
          <Mail size={16} className="group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Contact</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
