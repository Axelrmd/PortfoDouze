
import { useState } from "react";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import "./style/style.scss"
import { fichiers } from "./Data/Donnees";

const App = () => {

  const [infoGlobal, setInfoGlobal] = useState(fichiers);

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
  };
  

  return (
    <>
      <Header fichiers={infoGlobal} ajoutFichier={ajoutFichier}/>
      <Menu fichiers={infoGlobal} ajoutFichier={ajoutFichier} selectionFichier={changerDeSelectionner} supprFichier={supprFichierBar}/>
    </>
  );
}


export default App;