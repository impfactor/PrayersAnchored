import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, Language } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.zh;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const STORAGE_KEY = 'chironmotion-language';

const SUPPORTED_LANGUAGES: Language[] = ['zh', 'en', 'ko', 'ja'];

const isSupportedLanguage = (value: unknown): value is Language =>
  typeof value === 'string' && (SUPPORTED_LANGUAGES as string[]).includes(value);

const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'zh';
  }

  const candidates = [...window.navigator.languages, window.navigator.language]
    .filter(Boolean)
    .map((lang) => lang.toLowerCase());

  // Match in priority order — first hit wins.
  for (const candidate of candidates) {
    if (candidate.startsWith('zh')) return 'zh';
    if (candidate.startsWith('en')) return 'en';
    if (candidate.startsWith('ko')) return 'ko';
    if (candidate.startsWith('ja')) return 'ja';
  }

  return 'zh';
};

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'zh';
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (isSupportedLanguage(storedLanguage)) {
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
