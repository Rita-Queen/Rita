
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
    if (language === 'zh') return 'zh-TW';
    if (language === 'en') return 'EN';
    return 'EN & zh-TW';
  };

  const navLinks = [
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'education', href: '#education' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#faf8f4]/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-100' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-bold text-lg text-stone-900 tracking-tight z-50"
        >
          Rita Zhong
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 hover:text-amber-700 transition-colors whitespace-nowrap"
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
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-stone-200 text-[10px] font-bold uppercase tracking-widest text-stone-600 bg-white hover:border-amber-600 hover:text-amber-800 transition-all shadow-sm active:scale-95 min-w-[140px] justify-center"
          >
            <Globe size={14} className="text-amber-500" />
            <span className="w-full text-center">{getLanguageLabel()}</span>
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-3 md:hidden z-50">
          <button 
            onClick={toggleLanguage}
            className="p-2.5 text-stone-600 flex items-center gap-2 border border-stone-200 rounded-xl bg-white shadow-sm min-w-[100px] justify-center"
          >
             <Globe size={16} className="text-amber-600" />
             <span className="text-[10px] font-black">{getLanguageLabel()}</span>
          </button>
          <button 
            className="p-2 text-stone-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#faf8f4] flex flex-col items-center justify-center gap-10 transition-transform duration-500 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-2xl font-bold text-stone-800"
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
