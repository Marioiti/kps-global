import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations, Language } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'kps-language';
const SUPPORTED: Language[] = ['en', 'ru', 'zh'];

const detectInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && SUPPORTED.includes(stored)) return stored;
  const nav = window.navigator.language?.slice(0, 2).toLowerCase();
  if (nav === 'ru' || nav === 'zh') return nav;
  return 'en';
};

// The Chinese webfont is large, so only fetch it the first time the ZH locale is used.
let notoSCLoaded = false;
const loadChineseFont = () => {
  if (notoSCLoaded || typeof document === 'undefined') return;
  notoSCLoaded = true;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap';
  document.head.appendChild(link);
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'zh') loadChineseFont();
  }, [language]);

  const t = useCallback(
    (key: string): string => translations[language][key] || key,
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div lang={language}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
