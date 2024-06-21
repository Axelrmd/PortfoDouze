
const OngletsFichiers = ({fichiers,ajoutFichier, selectionFichier, supprFichier}) => {

  
  

  return (
    <>
      <div className='ongletsFichiers'>
        {fichiers.map((item, index) => (
          <button className={`${item.selected ? 'selected' : ''}`} key={index} onClick={() => selectionFichier(item.nom)}>
            <img src={item.image} alt='Logo' />
            <p>{item.nom}</p>
            <button onClick={(e) => supprFichier(item.nom, item.selected, e)}>
              <svg className='svg-container' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </button>
        ))}
      </div>
    </>
  );
};

export default OngletsFichiers;
