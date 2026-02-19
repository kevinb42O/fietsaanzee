
import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Tent, ShoppingBag, Star, Caravan, ArrowRight, Waves } from 'lucide-react';

const IMAGES = ['/camperhero.png', '/camperfooter.png'];

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <MapPin size={28} strokeWidth={2.5} />,
      title: 'Camper Hotspots',
      description: 'De mooiste plekken aan de Belgische kust om je camper te parkeren, met adembenemend uitzicht op zee.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      icon: <Tent size={28} strokeWidth={2.5} />,
      title: 'Beste Campings',
      description: 'Handgeselecteerde campings aan zee met alle voorzieningen die je nodig hebt voor een onvergetelijk verblijf.',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      icon: <Caravan size={28} strokeWidth={2.5} />,
      title: 'Camperplaatsen',
      description: 'Officiële en verborgen camperplaatsen langs de hele Belgische kustlijn, van De Panne tot Knokke.',
      color: 'from-sky-500 to-blue-600',
      bgColor: 'bg-sky-50',
      iconColor: 'text-sky-600',
    },
    {
      icon: <ShoppingBag size={28} strokeWidth={2.5} />,
      title: 'Kampeergerief',
      description: 'De beste winkels voor kampeeruitrusting en accessoires in de buurt van de kust.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
  ];

  return (
    <div className="overflow-x-clip overflow-y-visible">
      {/* Hero Section with Image Carousel */}
      <div className="relative -mt-[72px] sm:-mt-[80px] md:-mt-[96px] pt-[72px] sm:pt-[80px] md:pt-[96px] min-h-[75vh] sm:min-h-[85vh] md:min-h-[95vh] flex items-center justify-center px-4 pb-32 sm:pb-40 md:pb-48 overflow-hidden">
        
        {/* Background Images with Crossfade */}
        {IMAGES.map((img, index) => (
          <div
            key={img}
            className="absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out"
            style={{
              opacity: currentImage === index ? 1 : 0,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
        
        {/* Multi-layer Overlay */}
        <div className="absolute inset-0 bg-slate-900/55 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-slate-900/40 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-emerald-900/20 z-[1]"></div>

        <div className="max-w-7xl mx-auto relative z-20 text-center safe-area-left safe-area-right">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-900 px-5 sm:px-6 py-2.5 sm:py-3 text-[9px] sm:text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8 mt-4 sm:mt-6 md:mt-8 animate-in fade-in slide-in-from-bottom-4 shadow-2xl rotate-[-1deg] hover:rotate-0 transition-transform duration-300" style={{ boxShadow: '0 10px 30px -5px rgba(0,0,0,0.4), 0 4px 10px -2px rgba(0,0,0,0.3)' }}>
            <Sparkles size={12} className="text-emerald-500 sm:w-[14px] sm:h-[14px]" strokeWidth={3} /> 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Binnenkort — De Kustgids voor Camperaars</span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[6.5rem] font-bold text-white mb-6 sm:mb-8 leading-[1.15] max-w-5xl mx-auto px-2 drop-shadow-2xl font-heading" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)', letterSpacing: '-0.5px', fontWeight: 700 }}>
            Met je camper <br className="hidden sm:block" />naar zee?{' '}
            <span className="text-emerald-300 relative inline-block">
              Wij helpen je
              <svg className="absolute -bottom-1 sm:-bottom-2 md:-bottom-4 left-0 w-full h-3 sm:h-4 text-emerald-300/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8"/>
              </svg>
            </span> op weg.
          </h1>
          
          {/* Subtitle */}
          <p className="text-slate-100 max-w-3xl mx-auto leading-relaxed px-4 mb-10 sm:mb-14 text-sm sm:text-base md:text-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)', fontWeight: 400 }}>
            Binnenkort vind je hier alles over 
            <span className="text-white font-semibold"> camperplaatsen, campings, kampeergerief </span> 
            en de mooiste hotspots langs de Belgische kust. Jouw ultieme gids voor een onvergetelijke campervakantie aan zee.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <a 
              href="mailto:info@camperaanzee.be"
              className="btn-lift bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-heading shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex items-center gap-3 group"
            >
              Hou me op de hoogte
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Image Indicator Dots */}
          <div className="flex items-center justify-center gap-3 mt-10 sm:mt-14">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`rounded-full transition-all duration-500 ${
                  currentImage === index 
                    ? 'w-8 h-2.5 bg-emerald-400 shadow-lg shadow-emerald-400/50' 
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Afbeelding ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-x-clip overflow-y-visible leading-[0] z-10">
          <div className="wave-animation" style={{ display: 'flex', width: '200%' }}>
            <svg 
              className="block h-[60px] sm:h-[80px] md:h-[120px]" 
              style={{ minWidth: '100vw', flex: '0 0 100vw' }}
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0,60 C150,30 300,90 450,60 C600,30 750,90 900,60 C1050,30 1150,60 1200,60 L1200,120 L0,120 Z" 
                className="fill-current text-stone-50"
              />
            </svg>
            <svg 
              className="block h-[60px] sm:h-[80px] md:h-[120px]" 
              style={{ minWidth: '100vw', flex: '0 0 100vw' }}
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0,60 C150,30 300,90 450,60 C600,30 750,90 900,60 C1050,30 1150,60 1200,60 L1200,120 L0,120 Z" 
                className="fill-current text-stone-50"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-stone-50 py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] mb-6">
              <Waves size={14} strokeWidth={3} />
              Wat mag je verwachten
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 font-heading">
              Alles voor jouw <span className="text-emerald-600">campervakantie</span> aan zee
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              CamperAanZee wordt dé referentie voor iedereen die met een camper, caravan of tent de Belgische kust wil verkennen.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-emerald-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`${feature.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative gradient on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon / About Section */}
      <div className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
        {/* Background with second image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${IMAGES[1]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-emerald-900/30 z-[1]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] mb-8">
            <Star size={14} strokeWidth={3} className="animate-pulse" />
            Binnenkort online
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8 font-heading leading-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
            De complete gids voor camperaars aan de{' '}
            <span className="text-emerald-400">Belgische kust</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Van gezellige camperplaatsen met zeezicht tot de beste campings met alle faciliteiten. 
            Van winkels met kampeergerief tot verborgen pareltjes langs de kustlijn. 
            <span className="text-white font-semibold"> CamperAanZee.be</span> wordt jouw onmisbare metgezel voor het perfecte kampeeravontuur aan de Belgische kust.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14">
            {[
              { number: '65km', label: 'Kustlijn' },
              { number: '15+', label: 'Badsteden' },
              { number: '50+', label: 'Camper\u00ADplaatsen' },
              { number: '100%', label: 'Gratis' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-400 mb-1 font-heading">{stat.number}</div>
                <div className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <a 
            href="mailto:info@camperaanzee.be"
            className="btn-lift inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-10 py-5 rounded-full text-base sm:text-lg shadow-2xl shadow-emerald-900/30 group transition-all"
          >
            Stuur ons een bericht
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
