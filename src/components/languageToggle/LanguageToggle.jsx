import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  const handleChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className="language-toggle">
      <select
        value={language}
        onChange={handleChange}
        className="language-selector"
        aria-label="Select language"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default LanguageToggle;
