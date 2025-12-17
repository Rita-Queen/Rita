import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="space-y-4">
      {content.experience.map((job, index) => (
        <div key={index} className="group">
          <details 
            className="group bg-white rounded-2xl border border-stone-100 shadow-sm open:shadow-md transition-all duration-300 overflow-hidden"
            open={index === 0}
          >
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-stone-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-left">
                <h4 className="font-bold text-lg text-stone-800">{job.company}</h4>
                <span className="hidden md:block text-stone-300">|</span>
                <span className="text-amber-700 font-medium">{job.role}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-stone-500 font-mono whitespace-nowrap hidden sm:block">{job.period}</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-amber-600">▼</span>
              </div>
            </summary>
            
            <div className="px-6 pb-6 pt-0 border-t border-stone-100 mt-2">
              <div className="sm:hidden text-sm text-stone-500 font-mono mb-4 mt-2">{job.period}</div>
              <ul className="space-y-3 mt-4">
                {job.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Experience;