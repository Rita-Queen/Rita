import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Bilingual from './Bilingual';

interface SectionProps {
  id: string;
  titleKey: 'about' | 'skills' | 'experience' | 'projects' | 'education' | 'traits';
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, titleKey, children, className = '' }) => {
  const { zh, en } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to prevent replay
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`py-24 md:py-32 px-6 scroll-mt-24 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 md:mb-24">
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-5 mb-4">
              <div className={`h-12 w-1.5 bg-amber-600 rounded-full transition-all duration-1000 origin-top ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight">
                <Bilingual 
                  zh={zh.section_titles[titleKey]} 
                  en={en.section_titles[titleKey]} 
                  inline 
                />
              </h3>
            </div>
            
            {/* Restricted width for description focus */}
            <div className="max-w-[800px] ml-6">
              <p className="text-stone-300 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8">
                {en.section_titles[`${titleKey}_sub` as any] || en.section_titles[titleKey]}
              </p>
              
              <div className="p-6 md:p-8 bg-stone-100/40 rounded-3xl border-l-4 border-amber-600/20 text-stone-500 italic text-lg md:text-xl leading-relaxed">
                <Bilingual zh={zh.section_summaries[titleKey]} en={en.section_summaries[titleKey]} />
              </div>
            </div>
          </div>
        </header>

        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;