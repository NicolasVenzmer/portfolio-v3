import { createContext, useContext, useState } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolioLanguage');
      if (saved) return saved;
      // Auto-detect browser language
      return navigator.language.startsWith('es') ? 'es' : 'en';
    } catch (error) {
      // Fallback if localStorage is unavailable (privacy mode)
      return 'en';
    }
  });

  const translations = { en, es };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    try {
      localStorage.setItem('portfolioLanguage', lang);
    } catch (error) {
      console.warn('localStorage unavailable, language preference will not persist');
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    // Fallback to key if translation missing
    if (value === undefined) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
