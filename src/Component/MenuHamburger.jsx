import { useState, useEffect } from 'react';

const MenuHamburger = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <button
        className={`menuHamburger ${menuOpen ? 'actif' : 'steve'}`}
        onClick={toggleMenu}
      >
        <div className="barre1"></div>
        <div className="barre2"></div>
        <div className="barre3"></div>
      </button>
      {menuOpen && (
        <div className="dropdown-menu">
          {children}
        </div>
      )}
    </>
  );
};

export default MenuHamburger;
