import imgCover1 from "./Assets/banner_booki.webp";
import imgModal1 from "./Assets/booki.webp";
import imgCover2 from "./Assets/banner_kasa.webp";
import imgModal2 from "./Assets/kasa.webp";
import imgCover3 from "./Assets/banner_argent.webp";
import imgModal3 from "./Assets/argentbank.webp";
import imgCover4 from "./Assets/banner_sophieBluel.webp";
import imgModal4 from "./Assets/bluel.webp";
import imgCover5 from "./Assets/banner_ohmyfood.webp";
import imgModal5 from "./Assets/oh-my-food.webp";
import imgCover6 from "./Assets/banner-nina.webp";
import imgModal6 from "./Assets/Nina-Carducci.webp";
import imgCover7 from "./Assets/banner-77events.webp";
import imgModal7 from "./Assets/event.webp";
import imgCover8 from "./Assets/banner-qwenta.webp";
import imgModal8 from "./Assets/menumaker.webp";

const projectsData = [
  {
    id: "1",
    title: "Booki",
    client:
      "Entreprise souhaitant développer un site web pour la recherche d'hébergements et d'activités.",
    presentation:
      "Booki est un projet web qui vise à simplifier la recherche d'hébergements et d'activités dans la ville de choix de l'utilisateur. Mon rôle en tant que développeur Front-End était de prendre les maquettes fournies par l'UI designer, et de les intégrer en utilisant HTML et CSS.",
    overview:
      "Le principal obstacle résidait dans la compatibilité du projet avec différentes tailles d'écran tout en respectant les spécifications de conception. J'ai collaboré étroitement avec les concepteurs afin d'intégrer de manière harmonieuse les éléments visuels dans la mise en page, garantissant ainsi une présentation esthétique et pratique sur les écrans de bureau larges, les tablettes et les smartphones.",
    github: "",
    website: "",
    tags: ["HTML5", "CSS3", "Responsive Web Design", "Figma"],
    img_cover: imgCover1,
    img_modal: imgModal1,
  },
  {
    id: "2",
    title: "Kasa",
    client:
      "Startup spécialisée dans la location d'appartements entre particuliers.",
    presentation:
      "J'ai travaillé en tant que développeur front-end sur le projet Kasa, pour une refonte totale du site. Mon rôle était de concevoir une plateforme web en utilisant React pour le côté front-end, et Node.js pour le côté backend, ainsi que des maquettes fournies par le designer.",
    overview:
      "L'objectif était de moderniser la plateforme existante, en React, pour améliorer l'expérience utilisateur sur différentes tailles d'écran. J'ai développé l'interactivité du site en intégrant des animations CSS tout en introduisant des éléments avancés, comme la création d'un carrousel pour afficher les images des logements, l'implémentation d'un collapse pour améliorer l'UX, et la gestion dynamique des fiches logements à partir de données internes. J'ai utilisé Sass pour améliorer la gestion des styles.",
    github: "https://github.com/DsValentin/web-Kasa-project-8.git",
    website: "",
    tags: ["React", "Node.js", "Sass", "Responsive Web Design"],
    img_cover: imgCover2,
    img_modal: imgModal2,
  },
  {
    id: "3",
    title: "ArgentBank",
    client: "Banque en ligne qui souhaite évoluer dans le secteur bancaire",
    presentation:
      "En tant que développeur front-end chez Argent Bank, ma mission principale était de créer un tableau de bord utilisateur avec un système d'authentification en utilisant React et Redux. Cette tâche impliquait la migration d'un site web existant en HTML/CSS vers cette nouvelle plateforme.",
    overview:
      " En tant que membre de l'équipe Argent Bank, j'ai eu un rôle important dans l'authentification utilisateur avec JWT (JSON Web Tokens)  pour des appels API sécurisés. J'ai également supervisé la gestion des données via Redux, ce qui a permis aux utilisateurs de récupérer leurs informations en se connectant, mais aussi de les modifier s'ils le souhaitent. L'utilisation de Swagger a permis une meilleure conception et documentation des API, accélérant le développement de nouvelles fonctionnalités et renforçant la sécurité, les performances et l'expérience utilisateur dans l'application Argent Bank. Mon rôle était également de déterminer les routes pour les transactions dans l'éditeur Swagger, ce qui impliquait de choisir les méthodes HTTP appropriées, telles que GET, PUT ou DELETE, afin de simplifier leur gestion future.",
    github: "https://github.com/DsValentin/argentbank-openclassroom.git",

    tags: ["React", "Redux", "Green Code", "MongoDB", "Swagger"],
    img_cover: imgCover3,
    img_modal: imgModal3,
  },
  {
    id: "4",
    title: "Sophie Bluel",
    client: "Sophie Bluel",
    presentation:
      "En tant que développeur front-end, j'ai aidé une équipe à finaliser le nouveau site internet d'une architecte d'intérieur. J'étais chargé de développer plusieurs fonctionnalités clés pour le site.",
    overview:
      "Mon rôle a inclus la création de la page de présentation des travaux de l'architecte, avec des options de filtrage par catégorie, le développement de la page de connexion sécurisée de l'administrateur pour l'authentification, ainsi que la conception d'une modale permettant à l'architecte d'ajouter ou de supprimer des projets. J'ai utilisé JavaScript pour générer dynamiquement les éléments en communiquant avec une API, ce qui a permis de récupérer, ajouter et supprimer des travaux.",
    github: "https://github.com/DsValentin/Project-6-Openclassrooms.git",
    tags: ["Node.js", "Figma", "HTML5", "CSS3", "JavaScript", "Swagger"],
    img_cover: imgCover4,
    img_modal: imgModal4,
  },
  {
    id: "5",
    title: "Oh My Food!",
    client: "Startup de restauration.",
    presentation:
      "OhMyFood est une startup de restauration qui souhaite développer un site répertoriant les menus de restaurants gastronomiques. Mon rôle en tant que développeur était de créer le site en respectant les maquettes fournies par l'équipe UX designer.",
    overview:
      "Le projet a été conçu en adoptant une approche 'mobile first', ce qui signifie que j'ai priorisé l'optimisation de l'expérience utilisateur sur les appareils mobiles. Cette stratégie garantit que les utilisateurs bénéficient d'une expérience fluide et réactive, quel que soit l'appareil qu'ils utilisent, allant des smartphones aux ordinateurs de bureau. De plus, pour rendre le site encore plus attrayant, j'ai intégré des animations fluides et naturelles. Ces animations ont été soigneusement créées pour améliorer l'interactivité du site, offrant ainsi aux visiteurs une expérience engageante et immersive.",
    github:
      "https://github.com/DsValentin/Project_4_oh_my_food_openclassrooms.git",
    website:
      "https://dsvalentin.github.io/Project_4_oh_my_food_openclassrooms/",
    tags: ["HTML5", "CSS3", "Responsive Web Design", "Animations"],
    img_cover: imgCover5,
    img_modal: imgModal5,
  },

  {
    id: "6",
    title: "Nina Carducci",
    client: "Nina Carducci, phototgraphe professionnelle",
    presentation:
      "Nina Carducci est le site web d'une photographe professionnelle spécialisée dans les portraits et la photographie événementielle. Le site a pour but de présenter le portfolio de la photographe et de mettre en valeur ses réalisations.",
    overview:
      "Le projet visait à améliorer la performance globale du site, réduire le temps de chargement, et renforcer son référencement sur les moteurs de recherche. Mon intervention a inclus l'optimisation des images, la refonte du code et de la structure du site, la mise en place du référencement local avec Schema.org, et l'ajout des métas pour les réseaux sociaux. De plus, j'ai réalisé une optimisation du SEO du site, intégré le Rich Snippet pour une meilleure visibilité sur les moteurs de recherche, et effectué une analyse approfondie avec Wave pour garantir des performances optimales. Ces améliorations ont abouti à une expérience utilisateur plus fluide, une meilleure visibilité en ligne, et la possibilité d'attirer de nouveaux clients, notamment grâce à l'optimisation de Wave pour une meilleure accessibilité.",
    github: "https://github.com/DsValentin/Nina-Carducci-p9.git",
    website: "https://dsvalentin.github.io/Nina-Carducci-p9/",
    tags: [
      "Optimisation web",
      "SEO",
      "Référencement local",
      "Rich Snippet",
      "Wave",
      "Lighthouse",
      "Accessibilité",
    ],
    img_cover: imgCover6,
    img_modal: imgModal6,
  },

  {
    id: "7",
    title: "724events",
    client: "L'agence évènementielle 724events.",
    presentation:
      "724events, une agence événementielle, avait lancé une refonte cruciale de son site vitrine. Après la validation du design, un développeur freelance a été recruté pour l'intégration, mais il a dû quitter le projet en cours. J'ai relevé le défi de finaliser le site en me basant sur le travail déjà effectué, ajoutant ma touche personnelle tout en respectant le concept initial.",
    overview:
      "Ma mission a été d'effectuer un débogage complet et d'optimiser le site web de 724events. J'ai commencé par une analyse approfondie du code source existant, identifiant ainsi les problèmes techniques qui entravaient les performances du site. Mon objectif était de garantir que le site soit fluide et réactif pour les visiteurs. Pour atteindre cet objectif, j'ai utilisé des tests unitaires pour vérifier chaque composant du site. Les React Dev Tools ont été essentielles pour analyser et optimiser le code React. Grâce à ces outils, j'ai pu cibler les zones spécifiques nécessitant des améliorations. En parallèle, j'ai finalisé le cahier de recette, créant des scénarios détaillés pour vérifier que chaque fonctionnalité du site fonctionnait comme prévu. Cela incluait des tests de navigation, de formulaire, de performance, et bien d'autres. Mon travail a permis d'assurer que le site réponde aux normes de qualité les plus élevées, offrant ainsi une expérience optimale aux utilisateurs.",
    github:
      "https://github.com/DsValentin/Debuggez-le-site-agence-evenementiel.git",
    tags: ["Débogage", "Optimisation", "Tests Unitaires", "React Dev Tools"],
    img_cover: imgCover7,
    img_modal: imgModal7,
  },

  {
    id: "8",
    title: "Menu Maker",
    client:
      "Qwenta, entreprise spécialisée dans les solutions numériques pour la restauration.",
    presentation:
      "Au sein de l'agence Webgencia, j'ai pris en charge la préparation et la planification d'un projet de développement particulier : la création du \"Menu Maker\" pour l'entreprise Qwenta. Le \"Menu Maker\" est un outil novateur dédié aux restaurateurs, simplifiant la conception et la mise en page de leurs menus. ",
    overview:
      "J'ai dirigé la planification du projet \"Menu Maker\" en étroite collaboration avec le Product Owner, Soufiane. Mon rôle clé incluait la création d'un plan de développement précis, l'identification des spécifications techniques essentielles, et la mise en place d'une méthodologie agile. J'ai également préparé une présentation détaillée pour la réunion de validation du projet avec John, le chef de projet de Qwenta, en mettant en avant la solution technique retenue et les spécifications techniques. En parallèle, j'ai effectué une veille technologique pour étayer nos choix techniques en identifiant des sources pertinentes et en organisant l'information. Enfin, j'ai géré le projet en utilisant un tableau Kanban pour suivre l'avancement des tâches.",
    tags: [
      "Scrum",
      "Kanban",
      "Notion",
      "Outil de veille",
      "Planification de projet",
      "Spécifications techniques",
      "Solutions techniques",
    ],
    img_cover: imgCover8,
    img_modal: imgModal8,
  },
];
export default projectsData;
