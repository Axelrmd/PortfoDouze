import React, { useEffect, useState } from 'react';

const Accueil = ({fichiers}) => {
  const text = "Axel RAIMONDO";

  const createLetterArray = string => {
    return string.split('');
  };

  const createLetterLayers = array => {
    return array.map(letter => {
      let layer = '';
      for (let i = 1; i <= 2; i++) {
        if (letter === ' ') {
          layer += '<span class="space"></span>';
        }else if(letter === 'x'){
          layer += `<span class="letter-${i}"><img src='./images/LogoPortfolio.png'/></span>`;
        } else {
          layer += `<span class="letter-${i}">${letter}</span>`;
        }
      }
      return layer;
    });
  };

  const createLetterContainers = array => {
    return array.map(item => {
      let container = '';
      container += `<div class="wrapper">${item}</div>`;
      return container;
    });
  };

  useEffect(() => {
    const outputLayers = new Promise(function (resolve, reject) {
      const textContainer = document.getElementById('text');
      if (textContainer) {
        textContainer.innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text))).join('');
        resolve();
      }
    });

    const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
    
    outputLayers.then(() => {
      return spans.map(span => {
        setTimeout(() => {
          if (span.parentElement) {
            span.parentElement.style.width = span.offsetWidth + 'px';
            span.parentElement.style.height = span.offsetHeight + 'px';
          }
        }, 250);
        return null;
      });
    }).then(() => {
      let time = 250;
      return spans.map(span => {
        time += 48;
        setTimeout(() => {
          if (span.parentElement) {
            span.parentElement.style.top = '0px';
          }
        }, time);
        return null;
      });
    });
  }, []); 

  const [classe, setClasse] = useState("pactif");
  const changerClasse = () => {
    if(classe === "pactif"){
      setClasse('actiff');
    }else{
      setClasse("pactif");
    }
  }

  return (
    <>
      <div className='accueil'>
        <div id='text'></div>
        <button onClick={changerClasse} className={classe}>Ouvrir le projet
          <svg>
            <polyline points='0,0 370,0 370,138 0,138 0,0' fill='none' stroke='cyan' strokeWidth={6}/>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Accueil;






