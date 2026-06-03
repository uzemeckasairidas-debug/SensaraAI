import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { en, type Translation } from './en';
import { lt } from './lt';

export type Language = 'lt' | 'en';

const STORAGE_KEY = 'sensara-language';

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const translations: Record<Language, Translation> = { lt, en };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('lt');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === 'lt' || stored === 'en') {
      setLanguageState(stored);
      document.documentElement.lang = stored;
    } else {
      document.documentElement.lang = 'lt';
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === 'lt' ? 'en' : 'lt';
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
