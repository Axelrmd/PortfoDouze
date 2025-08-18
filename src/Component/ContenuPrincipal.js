import OngletsFichiers from './OngletsFichiers'
import Page from './Page';

const ContenuPrincipal = ({fichiers, ajoutFichier, selectionFichier, supprFichier}) => {
  return (
    <>
      <div className='contenuPrincipal'>
          <OngletsFichiers fichiers={fichiers} ajoutFichier={ajoutFichier}  selectionFichier={selectionFichier} supprFichier={supprFichier}/>
          <Page fichiers={fichiers} />
      </div>
    </>
  )
  
}

export default ContenuPrincipal