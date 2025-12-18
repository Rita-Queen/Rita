import React, { useEffect, useRef, useState } from 'react';
import { ClipboardCheck, Layers, Sparkles, Database, Users, Layout, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Bilingual from './Bilingual';

const skillIcons = [
  <Layout size={20} />,
  <Users size={20} />,
  <Sparkles size={20} />,
  <FileText size={20} />,
  <Database size={20} />,
  <Layers size={20} />,
  <ClipboardCheck size={20} />
];

const Skills: React.FC = () => {
  const { zh, en } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div ref={sectionRef} className="grid sm:grid-cols-2 gap-6">
      {zh.skills.map((skill: any, index: number) => (
        <div 
          key={index} 
          className={`bg-white p-6 md:p-8 rounded-[2rem] border border-stone-100 shadow-sm flex items-start gap-6 card-hover transition-all duration-500 ${
            isVisible ? 'animate-reveal' : 'opacity-0'
          }`}
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="text-amber-600 shrink-0 p-4 bg-stone-50 rounded-2xl">
            {skillIcons[index] || <ClipboardCheck size={20} />}
          </div>
          <div className="flex flex-col gap-2 self-center">
            <h4 className="text-stone-900 font-bold text-base md:text-lg tracking-tight">
              <Bilingual zh={skill.title} en={en.skills[index].title} inline />
            </h4>
            <p className="text-stone-500 text-sm leading-relaxed">
              <Bilingual zh={skill.description} en={en.skills[index].description} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;