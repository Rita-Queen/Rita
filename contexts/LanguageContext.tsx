import React, { createContext, useContext, useState } from 'react';
import { CONTENT } from '../constants';

type Language = 'zh' | 'en';

// Helper type to extract the structure of the content
type ContentType = typeof CONTENT.zh;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  content: ContentType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'zh' ? 'en' : 'zh';
      // Optional: Update HTML lang attribute
      document.documentElement.lang = newLang === 'zh' ? 'zh-Hant' : 'en';
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content: CONTENT[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};