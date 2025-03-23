
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { locales } from '@/locales';

export type Language = 'en' | 'ar' | 'ur';

interface TranslationContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage || 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Set the dir attribute for RTL languages
    document.documentElement.dir = language === 'ar' || language === 'ur' ? 'rtl' : 'ltr';
    
    // Also add a class to help with RTL-specific styles
    if (language === 'ar' || language === 'ur') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }

    // Set language attribute for screen readers
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (key: string): string => {
    // Split the key by dots to navigate nested objects
    const keys = key.split('.');
    
    // Start with the current language's translations
    let translation: any = locales[language];
    
    // Navigate through the keys
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Fallback to English if translation not found
        let fallbackTranslation = locales.en;
        for (const fallbackKey of keys) {
          if (fallbackTranslation && fallbackTranslation[fallbackKey]) {
            fallbackTranslation = fallbackTranslation[fallbackKey];
          } else {
            console.warn(`Translation key "${key}" not found`);
            return key; // Return the key itself if no translation found
          }
        }
        return typeof fallbackTranslation === 'string' ? fallbackTranslation : key;
      }
    }
    
    return typeof translation === 'string' ? translation : key;
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
