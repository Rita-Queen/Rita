import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { content } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 一旦顯示後就不再重複觸發，維持效能
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="grid md:grid-cols-2 gap-4">
      {content.skills.map((skill, index) => (
        <div 
          key={index} 
          className={`bg-white p-5 rounded-xl border border-stone-100 shadow-sm flex items-start gap-3 hover:border-amber-200 transition-colors ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0-initial'
          }`}
          style={{ 
            animationDelay: isVisible ? `${index * 0.1}s` : '0s'
          }}
        >
          <CheckCircle2 className="text-amber-600 shrink-0 mt-0.5" size={20} />
          <span className="text-stone-700 font-medium">{skill}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;