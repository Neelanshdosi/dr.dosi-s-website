import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'dr_dosi_clinic_lang';

export function LanguageProvider({ children }) {
  // Read saved preference from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'hi' || saved === 'en') {
        return saved;
      }
    } catch {
      // localStorage may fail in private browsing
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
    } catch {
      // Ignore storage errors
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key) => {
    const active = TRANSLATIONS[language] || TRANSLATIONS.en;
    if (active[key] !== undefined) {
      return active[key];
    }
    // Fallback to English
    return TRANSLATIONS.en[key] || key;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isHindi: language === 'hi',
    translations: TRANSLATIONS[language] || TRANSLATIONS.en
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

