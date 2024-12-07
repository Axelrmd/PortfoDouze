import { useState } from 'react'
import './style/style.scss';
import Header from "./Component/anciens/Header";
import Menu from "./Component/anciens/Menu";
import { fichiers } from "./Data/Donnees";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dev from './pages/Dev';
import Chill from './pages/Chill';




function App() {
  /* const [infoGlobal, setInfoGlobal] = useState(fichiers);

  const ajoutFichier = (nvFichier) => {
    const fichierExist = infoGlobal.some(fichier => fichier.nom === nvFichier.nom);
    if (!fichierExist) {
      const nvListe = [...infoGlobal, nvFichier]; 
      const nouvelleListe = nvListe.map((fichier) => {
        if (fichier.nom === nvFichier.nom) {
          return { ...fichier, selected: true };
        } else {
          return { ...fichier, selected: false };
        }
      });
      setInfoGlobal(nouvelleListe);
    } else {
      changerDeSelectionner(nvFichier.nom);
    }
  }  

  const changerDeSelectionner = (clicFichier) => {
    const nouvelleListe = infoGlobal.map((fichier) => {
      if (fichier.nom === clicFichier) {
        return { ...fichier, selected: true };
      } else {
        return { ...fichier, selected: false };
      }
    });
    setInfoGlobal(nouvelleListe);
  }

  const supprFichierBar = (asuppr, selecte, e) => {
    e.stopPropagation();
    const indexToRemove = infoGlobal.findIndex(fichier => fichier.nom === asuppr);
    if (indexToRemove !== -1 && selecte) { 
      const nouvelleListe = [...infoGlobal];
      if (indexToRemove > 0) { 
        nouvelleListe[indexToRemove - 1].selected = true;
      } else if (indexToRemove < nouvelleListe.length - 1) { 
        nouvelleListe[indexToRemove + 1].selected = true;
      }
      nouvelleListe.splice(indexToRemove, 1);
      setInfoGlobal(nouvelleListe);
    } else {
      const nouvelleListe = infoGlobal.filter((fichier) => fichier.nom !== asuppr);
      setInfoGlobal(nouvelleListe);
    }
  }; */


  return (
    <>
      {/* <Header fichiers={infoGlobal} ajoutFichier={ajoutFichier}/>
      <Menu fichiers={infoGlobal} ajoutFichier={ajoutFichier} selectionFichier={changerDeSelectionner} supprFichier={supprFichierBar}/>
       */}

      <BrowserRouter>
        <Routes>
          <Route path="/chill" element={<Chill />} />
          <Route path="/dev" element={<Dev/>}/>
          <Route path="*" element={<div></div>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App
