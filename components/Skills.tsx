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
          // Once visible, stop observing to save resources
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it fully enters
      }
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
          className={`bg-white p-5 rounded-xl border border-stone-100 shadow-sm flex items-start gap-3 hover:border-amber-200 transition-all duration-300 hover:shadow-md ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0-initial'
          }`}
          style={{ 
            // 0.15s stagger provides a smooth "wave" effect
            animationDelay: isVisible ? `${index * 0.15}s` : '0s'
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