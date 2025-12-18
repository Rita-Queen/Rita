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
    <div ref={containerRef} className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-stone-200/50">
      {zh.experience.map((job, index) => (
        <div 
          key={index} 
          className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all duration-700 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Dot */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#faf8f4] bg-white text-amber-600 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <div className="w-2 h-2 rounded-full bg-current"></div>
          </div>

          {/* Content Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 md:p-10 rounded-3xl border border-stone-100 shadow-sm card-hover">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <time className="font-mono text-[10px] font-black text-amber-700 uppercase tracking-[0.2em]">{job.period}</time>
              <h4 className="font-bold text-stone-900">
                <Bilingual zh={job.company} en={en.experience[index].company} />
              </h4>
            </div>
            <div className="text-amber-800/80 font-bold text-sm mb-6 pb-2 border-b border-stone-50">
              <Bilingual zh={job.role} en={en.experience[index].role} />
            </div>
            <ul className="space-y-4">
              {job.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-stone-500 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-200 shrink-0"></span>
                  <Bilingual zh={detail} en={en.experience[index].details[i]} />
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