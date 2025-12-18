import React, { useEffect, useState, useRef } from 'react';
import { FolderKanban, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Bilingual from './Bilingual';

const Projects: React.FC = () => {
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
    <div ref={containerRef} className="grid md:grid-cols-2 gap-8">
      {zh.projects.map((project, index) => (
        <div 
          key={project.id}
          className={`group bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm card-hover flex flex-col transition-all duration-700 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <div className="flex justify-between items-start mb-10">
            <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center group-hover:bg-amber-50 transition-colors">
              <FolderKanban className="text-stone-400 group-hover:text-amber-600 transition-colors" size={32} />
            </div>
            <ArrowUpRight className="text-amber-600 opacity-0 group-hover:opacity-100 transition-all" size={24} />
          </div>
          <h4 className="text-2xl font-bold text-stone-900 mb-6 group-hover:text-amber-800 transition-colors leading-tight">
            <Bilingual zh={project.title} en={en.projects[index].title} />
          </h4>
          <div className="text-stone-500 leading-relaxed text-sm md:text-base mb-auto">
            <Bilingual zh={project.description} en={en.projects[index].description} />
          </div>
          <div className="mt-10 pt-6 border-t border-stone-50 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-300">
               <Bilingual zh="專案亮點" en="Project Highlight" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;