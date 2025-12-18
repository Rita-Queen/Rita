
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

  // 使用 key 觸發 CSS 動畫，確保切換時有平滑感
  const renderContent = () => {
    if (language === 'zh') {
      return <span>{zh}</span>;
    }
    if (language === 'en') {
      return <span>{en}</span>;
    }

    // Both 模式
    if (inline) {
      return (
        <span className="flex items-center">
          <span>{zh}</span>
          <span className="mx-2 text-stone-300 opacity-50">|</span>
          <span className="opacity-60 font-normal">{en}</span>
        </span>
      );
    }

    return (
      <span className={`${vertical ? 'flex flex-col gap-1' : 'flex flex-wrap items-baseline gap-x-3 gap-y-1'}`}>
        <span className="block text-stone-800">{zh}</span>
        <span className="block text-[0.82em] leading-relaxed text-stone-500 font-normal italic border-l-2 border-stone-100 pl-3">
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
