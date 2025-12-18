import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Bilingual from './Bilingual';

const Experience: React.FC = () => {
  const { zh, en } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-stone-200/50">
      {zh.experience.map((job, index) => (
        <div 
          key={index} 
          className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all duration-700 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {/* Timeline Dot */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#faf8f4] bg-white text-amber-600 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-current"></div>
          </div>

          {/* Experience Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-8 md:p-12 rounded-[2.5rem] border border-stone-100 shadow-sm card-hover">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8">
              <h4 className="font-extrabold text-stone-900 text-xl md:text-2xl leading-tight">
                <Bilingual zh={job.company} en={en.experience[index].company} inline />
              </h4>
              <time className="font-mono text-[10px] font-black text-amber-700 uppercase tracking-[0.2em] bg-amber-50 px-3 py-1 rounded-full whitespace-nowrap">
                {job.period}
              </time>
            </div>
            
            <div className="mb-8 space-y-4">
              <div className="text-amber-800/90 font-bold text-base md:text-lg tracking-tight border-b border-amber-100 pb-2">
                <Bilingual zh={job.role} en={en.experience[index].role} inline />
              </div>
              <div className="text-stone-800 font-bold text-sm md:text-base leading-relaxed border-l-4 border-amber-600/30 pl-5 py-2 italic bg-stone-50/50 rounded-r-2xl">
                 <Bilingual zh={job.summary} en={en.experience[index].summary} />
              </div>
            </div>

            <ul className="space-y-6">
              {job.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></div>
                  <div className="text-stone-600 text-sm md:text-base leading-relaxed">
                    <Bilingual zh={detail} en={en.experience[index].details[i]} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;