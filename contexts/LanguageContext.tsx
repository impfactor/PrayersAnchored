import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, Language } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.zh;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const STORAGE_KEY = 'chironmotion-language';

const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'zh';
  }

  const candidates = [...window.navigator.languages, window.navigator.language]
    .filter(Boolean)
    .map((lang) => lang.toLowerCase());

  if (candidates.some((lang) => lang.startsWith('en'))) {
    return 'en';
  }

  if (
    candidates.some((lang) =>
      lang.startsWith('zh') ||
      lang.startsWith('ja') ||
      lang.startsWith('ko')
    )
  ) {
    return 'zh';
  }

  return 'zh';
};

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'zh';
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (storedLanguage === 'zh' || storedLanguage === 'en') {
    return storedLanguage;
  }

  return detectBrowserLanguage();
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
