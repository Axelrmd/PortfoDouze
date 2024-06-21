// Header.js

import {header} from '../Data/Donnees';

const Header = ({fichiers, ajoutFichier}) => {

  const ajouterFichier = (nvFichier) => {
    ajoutFichier(nvFichier);
  }

  return (
    <>
      <header >
        <img src='images/Logoportfolio.png' alt='Logo' />
        <div >
        {header.map((item, index) => (
          <button key={index} onClick={() => ajouterFichier(item.onglet)}>
            {item.bouton}
          </button>
        ))}
        </div>
      </header>
    </>  
  );
}


export default Header;
