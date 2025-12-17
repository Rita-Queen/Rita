import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation: React.FC = () => {
  const { language, toggleLanguage, content } = useLanguage();
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
      
      // Update the URL hash without jumping the page
      try {
        window.history.pushState(null, '', href);
      } catch (err) {
        console.warn('Navigation pushState failed:', err);
      }
    }
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.pushState(null, '', window.location.pathname);
    } catch (err) {
      console.warn('Logo pushState failed:', err);
    }
  };

  const navLinks = [
    { name: content.nav.about, href: '#about' },
    { name: content.nav.skills, href: '#skills' },
    { name: content.nav.experience, href: '#experience' },
    { name: content.nav.projects, href: '#projects' },
    { name: content.nav.education, href: '#education' },
    { name: content.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#faf8f4]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={handleLogoClick}
          className="font-bold text-lg text-amber-900 tracking-tight z-50 hover:opacity-80 transition-opacity"
        >
          鍾旻庭 Rita
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-300 text-xs font-medium text-stone-600 hover:bg-white hover:border-amber-600 transition-colors"
          >
            <Globe size={14} />
            {language === 'zh' ? 'EN / 中文' : 'English / 中文'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button 
            onClick={toggleLanguage}
            className="p-2 text-stone-600 hover:text-amber-700 transition-colors"
            aria-label="Toggle language"
          >
             <Globe size={20} />
          </button>
          <button 
            className="p-2 text-stone-800 hover:text-amber-700 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#faf8f4] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-2xl font-semibold text-stone-800 hover:text-amber-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="mt-8 pt-8 border-t border-stone-200 w-32 flex justify-center">
             <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-amber-600 text-sm font-medium text-amber-900"
            >
              <Globe size={16} />
              {language === 'zh' ? 'Switch to English' : '切換至中文'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;