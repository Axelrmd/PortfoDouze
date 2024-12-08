import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="change-language">
      <label htmlFor="language-select" className="language-label">
        🌐
      </label>
      <select
        id="language-select"
        className="language-select"
        onChange={handleChange}
        defaultValue={i18n.language}
      >
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
      </select>
    </div>
  );
};

export default ChangeLanguage;
