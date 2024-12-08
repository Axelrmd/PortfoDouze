import React from 'react';
import ThemeToggle from '../ThemeToggle'; // Composant pour gérer les thèmes
//import logo from '/assets/images/LogoPortfolio.png';
import ChangeLanguage from '../ChangeLanguage';
import ModeToggle from '../ModeToggle';
import MenuHamburger from '../MenuHamburger';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-logo">
        <img src="/chill/assets/images/LogoPortfolio.png" alt="Logo" />
      </div>

      <nav className="header-nav">
        <a href="/">{t('home')}</a>
        <a href="/projects">{t("projects")}</a>
        <a href="/about">{t('about')}</a>
      </nav>

      <div className="header-options dropdown">
        <a
          href="https://github.com/Axelrmd"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img src="chill/assets/images/GithubLogo.svg" alt="GitHub" className="github-icon" />
        </a>
        <MenuHamburger>
          <div className="header-options-menu">
            <ThemeToggle />
            <ChangeLanguage />
            <ModeToggle />
          </div>
        </MenuHamburger>
      </div>
    </header>
  );
};

export default Header;
