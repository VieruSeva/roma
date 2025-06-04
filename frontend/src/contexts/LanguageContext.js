import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Default to Romanian as requested
  const [currentLanguage, setCurrentLanguage] = useState('ro');

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'ro' || savedLanguage === 'en')) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language preference whenever it changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'ro' ? 'en' : 'ro');
  };

  const setLanguage = (lang) => {
    if (lang === 'ro' || lang === 'en') {
      setCurrentLanguage(lang);
    }
  };

  const value = {
    currentLanguage,
    toggleLanguage,
    setLanguage,
    isRomanian: currentLanguage === 'ro',
    isEnglish: currentLanguage === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
