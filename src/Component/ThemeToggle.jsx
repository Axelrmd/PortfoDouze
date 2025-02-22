import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isLightTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightTheme(true);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    if (isLightTheme) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isLightTheme]);

  return (
    <button onClick={() => setIsLightTheme(!isLightTheme)} className='themeBtn'>
      {isLightTheme ? '🌙 ' + t('dark mode') : '☀️ ' + t('light mode')}
    </button>
  );
};

export default ThemeToggle;
