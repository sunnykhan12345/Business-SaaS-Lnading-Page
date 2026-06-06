'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getDictionary, getDirection, languages } from '@/lib/translations';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [locale, setLocale] = useState('en');
  const [theme, setTheme] = useState('dark');
  const dictionary = useMemo(() => getDictionary(locale), [locale]);
  const direction = getDirection(locale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem('site-locale');
    const browserLanguage = navigator.language?.toLowerCase().startsWith('fr')
      ? 'fr'
      : navigator.language?.toLowerCase().startsWith('ar')
        ? 'ar'
        : 'en';
    const nextLocale = languages.some((language) => language.code === storedLocale)
      ? storedLocale
      : browserLanguage;
    setLocale(nextLocale);

    const storedTheme = window.localStorage.getItem('site-theme');
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    window.localStorage.setItem('site-locale', locale);
  }, [locale, direction]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('site-theme', theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      theme,
      setTheme,
      t: dictionary,
      direction,
      isRtl: direction === 'rtl'
    }),
    [locale, theme, dictionary, direction]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return context;
}
