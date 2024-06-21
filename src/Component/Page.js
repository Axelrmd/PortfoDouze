import Accueil from './Accueil';
import PageSkills from './PageSkills';
import PageProjet from './PageProjets';
import PageExps from './PageExps';
import PageAbout from './PageAbout';
import PageErreur from './PageErreur';

const Page = ({ fichiers }) => {
  return (
    <div className='page' >
      {fichiers.map((item, index) => {
        if (item.selected) {
          switch (item.nom) {
            case "Welcome":
              return <Accueil key={index} />;
            case "Skills.html":
              return <PageSkills key={index} />;
            case "Projects.html":
              return <PageProjet key={index} />;
            case "Experiences.html":
              return <PageExps key={index} />;
            case "About.html":
              return <PageAbout key={index} />;
            default:
              return <PageErreur key={index} />;
          }
        }
        return <PageErreur key={index} />;
      })}
    </div>
  );
};

export default Page;
