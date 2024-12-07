import { Projects } from "../../Data/Donnees";

const PageProjet = () => {
    return (
        <div className="pageProjets">
            <h2>Mes Projets</h2>
            <div className="projetsGrid">
                {Projects.map((project, index) => (
                    <div className="projetCard" key={index}>
                        <img src={project.image} alt={project.nom} />
                        <h3>{project.nom}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, techIndex) => (
                                <span className="techBadge" key={techIndex}>{tech}</span>
                            ))}
                        </div>
                       { <a href={project.lien} target="_blank" rel="noopener noreferrer">Voir le projet</a>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PageProjet;
