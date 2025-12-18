import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Bilingual from './Bilingual';

const Navigation: React.FC = () => {
  const { language, toggleLanguage, zh, en } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (!href || !href.startsWith('#')) return;

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const getLanguageLabel = () => {
    if (language === 'zh') return 'zh-Hant';
    if (language === 'en') return 'English';
    return 'Bilingual';
  };

  const navLinks = [
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'education', href: '#education' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#faf8f4]/95 backdrop-blur-md shadow-md py-3 border-b border-stone-100' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-bold text-xl text-stone-900 tracking-tight z-50 hover:text-amber-800 transition-colors"
        >
          Rita Zhong
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-amber-800 transition-colors whitespace-nowrap"
            >
              <Bilingual 
                zh={zh.nav[link.key as keyof typeof zh.nav]} 
                en={en.nav[link.key as keyof typeof en.nav]} 
                inline 
              />
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-3 px-6 py-2.5 rounded-full border-2 border-stone-200 text-[11px] font-bold uppercase tracking-widest text-stone-700 bg-white hover:border-amber-600 hover:text-amber-900 hover:bg-amber-50 transition-all shadow-sm active:scale-95 min-w-[150px] justify-center"
          >
            <Globe size={14} className="text-amber-500" />
            <span className="text-center">{getLanguageLabel()}</span>
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-3 md:hidden z-50">
          <button 
            onClick={toggleLanguage}
            className="p-3 text-stone-700 flex items-center gap-2 border-2 border-stone-100 rounded-2xl bg-white shadow-sm min-w-[120px] justify-center active:scale-95"
          >
             <Globe size={16} className="text-amber-600" />
             <span className="text-[11px] font-black uppercase tracking-tighter">{getLanguageLabel()}</span>
          </button>
          <button 
            className="p-2 text-stone-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#faf8f4] flex flex-col items-center justify-center gap-12 transition-transform duration-500 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-3xl font-bold text-stone-800 hover:text-amber-600 transition-colors"
            >
              <Bilingual 
                zh={zh.nav[link.key as keyof typeof zh.nav]} 
                en={en.nav[link.key as keyof typeof en.nav]} 
                inline 
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;