import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface BilingualProps {
  zh: React.ReactNode;
  en: React.ReactNode;
  className?: string;
  vertical?: boolean;
  inline?: boolean;
}

const Bilingual: React.FC<BilingualProps> = ({ zh, en, className = '', vertical = true, inline = false }) => {
  const { language } = useLanguage();

  const renderContent = () => {
    if (language === 'zh') {
      return <span>{zh}</span>;
    }
    if (language === 'en') {
      return <span>{en}</span>;
    }

    // Both mode
    if (inline) {
      return (
        <span className="flex flex-wrap items-center">
          <span>{zh}</span>
          <span className="mx-2 text-stone-300 opacity-50 font-light">|</span>
          <span className="font-medium text-stone-500">{en}</span>
        </span>
      );
    }

    return (
      <span className={`${vertical ? 'flex flex-col gap-1.5' : 'flex flex-wrap items-baseline gap-x-3 gap-y-1'}`}>
        <span className="block text-stone-800 font-semibold">{zh}</span>
        <span className="block text-[0.88em] leading-relaxed text-stone-500 font-normal italic border-l-2 border-stone-200 pl-4 py-0.5">
          {en}
        </span>
      </span>
    );
  };

  return (
    <span key={language} className={`${className} inline-block animate-lang-change`}>
      {renderContent()}
    </span>
  );
};

export default Bilingual;