import React, { createContext, useContext, useState } from 'react';
import { CONTENT } from '../constants';

export type Language = 'zh' | 'en' | 'both';

// Helper type to extract the structure of the content
type ContentType = typeof CONTENT.zh;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  content: ContentType;
  zh: ContentType;
  en: ContentType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const toggleLanguage = () => {
    setLanguage(prev => {
      let next: Language;
      if (prev === 'zh') next = 'en';
      else if (prev === 'en') next = 'both';
      else next = 'zh';

      // Update HTML lang attribute for accessibility
      document.documentElement.lang = next === 'en' ? 'en' : 'zh-Hant';
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage,
      toggleLanguage, 
      content: language === 'en' ? CONTENT.en : CONTENT.zh,
      zh: CONTENT.zh,
      en: CONTENT.en
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};