import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id={id} ref={sectionRef} className={`py-24 px-6 scroll-mt-24 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3 relative inline-block">
            {title}
            <span className={`absolute -bottom-2 left-0 h-1 bg-amber-600 rounded-full transition-all duration-1000 ${isVisible ? 'w-16' : 'w-0'}`}></span>
          </h3>
          {subtitle && <p className="text-stone-400 font-medium tracking-widest mt-4 uppercase text-sm">{subtitle}</p>}
        </div>
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;