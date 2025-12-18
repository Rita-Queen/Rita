import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Bilingual from './Bilingual';

const Hero: React.FC = () => {
  const { zh, en, language } = useLanguage();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Photo Column */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] animate-reveal">
            <div className="absolute inset-0 bg-amber-200/20 rounded-[4rem] rotate-3 blur-3xl transform"></div>
            <img 
              src="https://acade.must.edu.tw/files/generated-image_20251117164949_160.png" 
              alt="Rita Zhong" 
              className="relative w-full h-full object-cover rounded-[4rem] border-[12px] border-white shadow-2xl z-10"
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-10 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <h1 className="text-stone-900 font-bold tracking-tight">
              <span className="block text-2xl md:text-3xl text-stone-400 mb-2 font-medium">Hello, I'm</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl">鍾旻庭 Rita</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-amber-600 tracking-wide uppercase">
              <Bilingual zh={zh.hero.role} en={en.hero.role} />
            </h2>
          </div>

          <div className="space-y-6">
            <div className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0 font-medium italic">
              <Bilingual zh={zh.hero.tagline} en={en.hero.tagline} />
            </div>
            <div className="text-stone-400 text-xs font-bold tracking-widest uppercase border-l-2 border-stone-200 pl-4 py-1">
              <Bilingual zh={zh.hero.target} en={en.hero.target} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4">
            <a 
              href="#experience" 
              onClick={(e) => handleCtaClick(e, '#experience')}
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-stone-900 text-white rounded-full font-bold hover:bg-amber-800 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              {language === 'en' ? en.hero.btn_exp : zh.hero.btn_exp} 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleCtaClick(e, '#projects')}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-stone-800 border-2 border-stone-100 rounded-full font-bold hover:border-amber-600 hover:text-amber-800 transition-all duration-300"
            >
              {language === 'en' ? en.hero.btn_proj : zh.hero.btn_proj}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-stone-300 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.5em] font-black">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </header>
  );
};

export default Hero;