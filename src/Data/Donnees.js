
const header = [{
    bouton: "SKILLS",
    onglet: {
        nom: "Skills.html",
        selected: false,
        image: "./images/HTMLLogo.png"
    }},{
    bouton: "PROJECTS",
    onglet: {
        nom: "Projects.html",
        selected: false,
        image: "./images/HTMLLogo.png"
    }},/* {
    bouton: "EXPERIENCES",
    onglet: {
        nom: "Experiences.html",
        selected: false,
        image: "./images/HTMLLogo.png"
    }},{
    bouton: "ABOUT",
    onglet: {
        nom: "About.html",
        selected: false,
        image: "./images/HTMLLogo.png"
    }}, */{
    bouton: "Conpétences IUT",
    onglet: {
        nom: "Competences_IUT.css",
        selected: false,
        image: "./images/CSSLogo.png"
    }}
]


const fichiers = [{nom: "Welcome", selected: true, image: "./images/LogoPortfolio.png"}]


const Skills = [
    {
        nom: "C",
        image: "./images/CLogo.png",
        type: ["Back-End"]
    },{
        nom: "CSS",
        image: "./images/CSSLogo.png",
        type: ["Front-End"]
    },{
        nom: "HTML",
        image: "./images/HTMLLogo.png",
        type: ["Front-End"]
    },{
        nom: "Java",
        image: "./images/JavaLogo.png",
        type: ["Back-End"]
    },{
        nom: "JavaScript",
        image: "./images/JSLogo.png",
        type: ["Back-End"]
    },{
        nom: "Kotlin",
        image: "./images/KotlinLogo.png",
        type: ["Back-End"]
    },{
        nom: "PHP",
        image: "./images/PHPLogo.png",
        type: ["Back-End"]
    },{
        nom: "Python",
        image: "./images/PythonLogo.png",
        type: ["Back-End"]
    },{
        nom: "React",
        image: "./images/ReactLogo.png",
        type: ["Front-End", "Framework"]
    },{
        nom: "SCSS",
        image: "./images/SCSSLogo.png",
        type: ["Front-End"]
    },{
        nom: "Synfony",
        image: "./images/SymfonyLogo.png",
        type: ["Back-End", "Framework"]
    },{
        nom: "Tailwind CSS",
        image: "./images/TailwindLogo.png",
        type: ["Front-End"]
    },{
        nom: "Vue.js",
        image: "./images/VueLogo.png",
        type: ["Front-End", "Framework"]
    },{
        nom: "MySQL",
        image: "./images/MySQLLogo.png",
        type: ["BD"]
    },{
        nom: "MongoDB",
        image: "./images/MongoDBLogo.png",
        type: ["BD"]
    },{
        nom: "Visual Studio Code",
        image: "./images/VSCodeLogo.png",
        type: ["Outil"]
    },{
        nom: "GitLab",
        image: "./images/GitLabLogo.png",
        type: ["Outil"]
    },{
        nom: "Git",
        image: "./images/GitLogo.png",
        type: ["Outil"]
    },{
        nom: "Suite JetBrains",
        image: "./images/JetBrainsLogo.png",
        type: ["Outil"]
    },{
        nom: "Android Studio",
        image: "./images/AndroidStudioLogo.png",
        type: ["Outil"]
    }
]


const Projects = [
    {
        nom: "Studio Kebab",
        description: "Site de vente de kebab.",
        image: "./images/studio_kebab.png", 
        technologies: ["HTML", "CSS", "JavaScript"],
        lien: "http://p2201074.pages.univ-lyon1.fr/studio-kebab/" 
    },
    {
        nom: "Maki Malin",
        description: "Site de liste de courses.",
        image: "./images/maki-malin.png", 
        technologies: ["HTML", "CSS", "PHP", "Symfony", "SQL", "Twig"],
        lien: "https://github.com/Jemery-Dev/MakiMalin" 
    },
    {
        nom: "Foirauxhistoires",
        description: "Réseau social de partage de chapitres.",
        image: "./images/foirauxhistoires.png", 
        technologies: ["HTML", "CSS", "JavaScript", "Python"],
        lien: "https://foireauxhistoires.super-sympa.fr/" 
    },
    {
        nom: "Mon Portfolio",
        description: "Portfolio personnel.",
        image: "./images/portfolio.png", 
        technologies: ["SCSS", "JavaScript", "React"],
        lien: "https://axelrmd.github.io/PortfoDouze/" 
    }
];



export {header, fichiers, Skills, Projects};
