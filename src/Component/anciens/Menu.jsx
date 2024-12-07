import React, { useState } from 'react';
import Aside from "./Aside";
import ContenuAside from "./ContenuAside";
import ContenuPrincipal from './ContenuPrincipal';

const Menu = ({ fichiers, ajoutFichier, selectionFichier, supprFichier}) => {
  const [aside, setAside] = useState("none");

  const changerAside = (newAside) => {
    if(newAside === aside){
      setAside("none");
    }else{
      setAside(newAside);
    }
  }

  return (
    <>
      <div className='menu'>
        <Aside changerAside={changerAside}/>
        <ContenuAside asideOuvert={aside} />
        <ContenuPrincipal fichiers={fichiers} ajoutFichier={ajoutFichier} selectionFichier={selectionFichier} supprFichier={supprFichier}/>
      </div>
    </>
  );
}

export default Menu;
