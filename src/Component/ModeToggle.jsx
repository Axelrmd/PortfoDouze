import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ChangeMode.css';
import { useTranslation } from 'react-i18next';

const ChangeMode = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const currentMode = window.location.pathname.includes('/dev') ? 'dev' : 'chill';

  const toggleMode = () => {
    const newMode = currentMode === 'chill' ? 'dev' : 'chill';
    navigate(`/${newMode}`);
  };

  return (
    <div className="change-mode">
      <button
        className={`mode-toggle ${currentMode}`}
        onClick={toggleMode}
      >
        {currentMode === 'chill' ? '😌' + t('chill mode') : '🚀' + t('dev mode')}
      </button>
    </div>
  );
};

export default ChangeMode;
