import { useEffect } from "react";


const ContenuAside = ({asideOuvert}) => {

  let contenuAside;

  useEffect(() => {
    switch(asideOuvert){
      case 0:
        contenuAside = <h1>test 0</h1>;
        break;
      case 1:
        contenuAside = <h1>test 1</h1>;
        break;
      default:
        console.log('kette')
    }
  }, [asideOuvert])


    return (
      <>
        <div className='contenuAside'>
          {contenuAside}
        </div>
      </>
    )
}

export default ContenuAside