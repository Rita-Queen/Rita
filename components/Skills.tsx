import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {content.skills.map((skill, index) => (
        <div 
          key={index} 
          className="bg-white p-5 rounded-xl border border-stone-100 shadow-sm flex items-start gap-3 hover:border-amber-200 transition-colors"
        >
          <CheckCircle2 className="text-amber-600 shrink-0 mt-0.5" size={20} />
          <span className="text-stone-700 font-medium">{skill}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;