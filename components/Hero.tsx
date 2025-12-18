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
    <header className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-50/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Profile Image with subtle reveal */}
        <div className="mb-12 animate-reveal">
           <div className="relative w-48 h-48 md:w-60 md:h-60">
              <div className="absolute inset-0 bg-amber-600/10 rounded-[3rem] rotate-6"></div>
              <img 
                src="https://acade.must.edu.tw/files/generated-image_20251117164949_160.png" 
                alt="Rita Zhong" 
                className="relative w-full h-full object-cover rounded-[3rem] border-8 border-white shadow-xl z-10"
              />
           </div>
        </div>

        {/* Hero Text with restricted width for focus */}
        <div className="max-w-[640px] space-y-8 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight">
              <Bilingual zh={zh.hero.role} en={en.hero.role} inline />
            </h1>
          </div>

          <div className="text-xl md:text-2xl text-stone-600 leading-relaxed font-medium italic">
            <Bilingual zh={zh.hero.tagline} en={en.hero.tagline} />
          </div>

          <div className="text-stone-400 text-xs font-black tracking-[0.3em] uppercase bg-stone-100 px-6 py-2 rounded-full inline-block">
             <Bilingual zh={zh.hero.target} en={en.hero.target} />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-14 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#about" 
            onClick={(e) => handleCtaClick(e, '#about')}
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-stone-900 text-white rounded-full font-bold hover:bg-amber-800 transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            <Bilingual zh={zh.hero.btn_exp} en={en.hero.btn_exp} />
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#experience" 
            onClick={(e) => handleCtaClick(e, '#experience')}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-stone-800 border-2 border-stone-100 rounded-full font-bold hover:border-amber-600 hover:text-amber-800 transition-all duration-300 hover:-translate-y-1 shadow-sm"
          >
            <Bilingual zh={zh.hero.btn_proj} en={en.hero.btn_proj} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-stone-300 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.5em] font-black">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </header>
  );
};

export default Hero;