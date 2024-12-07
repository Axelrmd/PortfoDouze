
const header = [{
    bouton: "SKILLS",
    onglet: {
        nom: "Skills.html",
        selected: false,
        image: "assets/images/HTMLLogo.png"
    }},{
    bouton: "PROJECTS",
    onglet: {
        nom: "Projects.html",
        selected: false,
        image: "assets/images/HTMLLogo.png"
    }},/* {
    bouton: "EXPERIENCES",
    onglet: {
        nom: "Experiences.html",
        selected: false,
        image: "assets/images/HTMLLogo.png"
    }},{
    bouton: "ABOUT",
    onglet: {
        nom: "About.html",
        selected: false,
        image: "assets/images/HTMLLogo.png"
    }}, {
    bouton: "Conpétences IUT",
    onglet: {
        nom: "Competences_IUT.css",
        selected: false,
        image: "assets/images/CSSLogo.png"
    }} */
]


const fichiers = [{nom: "Welcome", selected: true, image: "assets/images/LogoPortfolio.png"}]


const Skills = [
    {
        nom: "C",
        image: "assets/images/CLogo.png",
        type: ["Back-End"]
    },{
        nom: "CSS",
        image: "assets/images/CSSLogo.png",
        type: ["Front-End"]
    },{
        nom: "HTML",
        image: "assets/images/HTMLLogo.png",
        type: ["Front-End"]
    },{
        nom: "Java",
        image: "assets/images/JavaLogo.png",
        type: ["Back-End"]
    },{
        nom: "JavaScript",
        image: "assets/images/JSLogo.png",
        type: ["Back-End"]
    },{
        nom: "Kotlin",
        image: "assets/images/KotlinLogo.png",
        type: ["Back-End"]
    },{
        nom: "PHP",
        image: "assets/images/PHPLogo.png",
        type: ["Back-End"]
    },{
        nom: "Python",
        image: "assets/images/PythonLogo.png",
        type: ["Back-End"]
    },{
        nom: "React",
        image: "assets/images/ReactLogo.png",
        type: ["Front-End", "Framework"]
    },{
        nom: "SCSS",
        image: "assets/images/SCSSLogo.png",
        type: ["Front-End"]
    },{
        nom: "Synfony",
        image: "assets/images/SymfonyLogo.png",
        type: ["Back-End", "Framework"]
    },{
        nom: "Tailwind CSS",
        image: "assets/images/TailwindLogo.png",
        type: ["Front-End"]
    },{
        nom: "Vue.js",
        image: "assets/images/VueLogo.png",
        type: ["Front-End", "Framework"]
    },{
        nom: "MySQL",
        image: "assets/images/MySQLLogo.png",
        type: ["BD"]
    },{
        nom: "MongoDB",
        image: "assets/images/MongoDBLogo.png",
        type: ["BD"]
    },{
        nom: "Visual Studio Code",
        image: "assets/images/VSCodeLogo.png",
        type: ["Outil"]
    },{
        nom: "GitLab",
        image: "assets/images/GitLabLogo.png",
        type: ["Outil"]
    },{
        nom: "Git",
        image: "assets/images/GitLogo.png",
        type: ["Outil"]
    },{
        nom: "Suite JetBrains",
        image: "assets/images/JetBrainsLogo.png",
        type: ["Outil"]
    },{
        nom: "Android Studio",
        image: "assets/images/AndroidStudioLogo.png",
        type: ["Outil"]
    }
]


const Projects = [
    {
        nom: "Studio Kebab",
        description: "Site de vente de kebab.",
        image: "assets/images/studio_kebab.png", 
        technologies: ["HTML", "CSS", "JavaScript"],
        lien: "http://p2201074.pages.univ-lyon1.fr/studio-kebab/" 
    },
    {
        nom: "Maki Malin",
        description: "Site de liste de courses.",
        image: "assets/images/maki-malin.png", 
        technologies: ["HTML", "CSS", "PHP", "Symfony", "SQL", "Twig"],
        lien: "https://github.com/Jemery-Dev/MakiMalin" 
    },
    {
        nom: "Foirauxhistoires",
        description: "Réseau social de partage de chapitres.",
        image: "assets/images/foirauxhistoires.png", 
        technologies: ["HTML", "CSS", "JavaScript", "Python"],
        lien: "https://foireauxhistoires.super-sympa.fr/" 
    },
    {
        nom: "Mon Portfolio",
        description: "Portfolio personnel.",
        image: "assets/images/portfolio.png", 
        technologies: ["SCSS", "JavaScript", "React"],
        lien: "https://axelrmd.github.io/PortfoDouze/" 
    }
];



export {header, fichiers, Skills, Projects};
