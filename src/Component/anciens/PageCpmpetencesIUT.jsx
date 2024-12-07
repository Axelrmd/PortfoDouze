import React, { useState } from 'react';

const PageCompetencesIUT = () => {
    const [visibleSection, setVisibleSection] = useState(null);

    const toggleSection = (section) => {
        if (visibleSection === section) {
            setVisibleSection(null);
        } else {
            setVisibleSection(section);
        }
    };

    return (
        <div className="pageCompetIUT">
            <button onClick={() => toggleSection('realiser')}>
                Réaliser des applications
            </button>
            {visibleSection === 'realiser' && (
                <ul>
                    <li>Maîtrise des concepts de la programmation orientée objet.</li>
                    <li>Compétence dans divers langages : Java, PHP, JavaScript/Typescript (et frameworks), C, Python, PL/SQL, HTML, CSS.</li>
                    <li>Écriture de code de qualité avec tests unitaires et documentation.</li>
                    <li>Création d'algorithmes pour la résolution de problèmes.</li>
                </ul>
            )}

            <button onClick={() => toggleSection('optimiser')}>
                Optimiser des applications informatiques
            </button>
            {visibleSection === 'optimiser' && (
                <ul>
                    <li>Analyse et optimisation d'algorithmes.</li>
                    <li>Utilisation d'outils mathématiques pour l'optimisation.</li>
                </ul>
            )}

            <button onClick={() => toggleSection('administrer')}>
                Administrer des systèmes informatiques communicants complexes
            </button>
            {visibleSection === 'administrer' && (
                <ul>
                    <li>Installation, configuration et gestion des systèmes d'exploitation (Windows et Linux).</li>
                    <li>Maîtrise des concepts de base des réseaux et de la sécurité informatique.</li>
                    <li>Maîtrise des concepts de base de la virtualisation.</li>
                    <li>Résolution des problèmes sur un système d'exploitation.</li>
                </ul>
            )}

            <button onClick={() => toggleSection('gerer')}>
                Gérer des données de l'information
            </button>
            {visibleSection === 'gerer' && (
                <ul>
                    <li>Maîtrise des langages PL/SQL.</li>
                    <li>Utilisation de différents SGBD : Oracle, MySQL, MariaDB, SQLiten MongoDB.</li>
                    <li>Conception d'un MCD et d'un MLD.</li>
                    <li>Conception d'API pour manipuler des données dans une base de données.</li>
                </ul>
            )}

            <button onClick={() => toggleSection('conduire')}>
                Conduire un projet
            </button>
            {visibleSection === 'conduire' && (
                <ul>
                    <li>Planification d'un projet.</li>
                    <li>Réalisation d'un projet en équipe.</li>
                    <li>Rédaction de documents de projet (cahier des charges, spécifications techniques, etc.).</li>
                </ul>
            )}

            <button onClick={() => toggleSection('travailler')}>
                Travailler dans une équipe informatique
            </button>
            {visibleSection === 'travailler' && (
                <ul>
                    <li>Communication efficace au sein d'une équipe.</li>
                    <li>Connaissance des différentes méthodes de développement et leur application.</li>
                    <li>Veille constante sur les nouveautés dans le domaine de l'informatique.</li>
                </ul>
            )}
        </div>
    );
};

export default PageCompetencesIUT;
