// Header.js

import {header} from '../Data/Donnees';

const Header = ({fichiers, ajoutFichier}) => {

  console.log(header);

  const ajouterFichier = (nvFichier) => {
    console.log(nvFichier);
    ajoutFichier(nvFichier);
  }

  return (
    <>
      <header >
        <img src="./images/LogoPortfolio.png" alt='Logo' />
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
