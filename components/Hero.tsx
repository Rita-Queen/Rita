import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { content } = useLanguage();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      try {
        window.history.pushState(null, '', href);
      } catch (err) {
        console.warn('Hero pushState failed:', err);
      }
    }
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Photo Column */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-amber-200/30 rounded-full blur-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://acade.must.edu.tw/files/generated-image_20251117164949_160.png" 
              alt="Rita portrait" 
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl z-10"
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-2">
              鍾旻庭 Rita
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-amber-700">
              {content.hero.role}
            </h2>
          </div>

          <p className="text-stone-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            {content.hero.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#experience" 
              onClick={(e) => handleCtaClick(e, '#experience')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {content.hero.btn_exp} <ArrowRight size={18} />
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleCtaClick(e, '#projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-stone-800 border border-stone-200 rounded-full font-medium hover:border-amber-600 hover:text-amber-700 transition-colors duration-300"
            >
              {content.hero.btn_proj}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 animate-bounce">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </header>
  );
};

export default Hero;