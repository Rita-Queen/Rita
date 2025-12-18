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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`py-32 px-6 scroll-mt-24 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <header className="mb-20">
          <div className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="flex items-center gap-4 mb-2">
              <div className={`h-10 w-1 bg-amber-600 rounded-full transition-all duration-1000 origin-top ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>
              <h3 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
                <Bilingual 
                  zh={zh.section_titles[titleKey]} 
                  en={en.section_titles[titleKey]} 
                  inline 
                />
              </h3>
            </div>
            <p className="text-stone-300 font-bold tracking-[0.3em] ml-5 uppercase text-xs mb-8">
              {en.section_titles[`${titleKey}_sub` as any] || en.section_titles[titleKey]}
            </p>
            
            <div className={`mt-8 p-6 bg-stone-100/50 rounded-2xl border-l-4 border-amber-600/20 text-stone-500 italic text-lg leading-relaxed`}>
              <Bilingual zh={zh.section_summaries[titleKey]} en={en.section_summaries[titleKey]} />
            </div>
          </div>
        </header>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;