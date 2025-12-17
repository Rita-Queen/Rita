import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 px-6 scroll-mt-24 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2 relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-600 rounded-full"></span>
          </h3>
          {subtitle && <p className="text-stone-500 mt-4">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;