// data.js
const projectData = {
    sidiene: {
        title: "SIDIENE",
        tag: "01/2025 – Actualidad | Proyecto Institucional",
        subtitle: "Sistema de Digitalización de Incidencias",
        statusText: "En proceso de refactorización",
        details: [
            "Lideré el levantamiento de requerimientos con docentes.",
            "Diseñé prototipos en Figma y desarrollé en React.",
            "Arquitectura de 3 capas: Front-end (React), APIs (TypeScript), BD (SQLPub)."
        ],
        githubLink: "https://github.com/gamaliel-armenta/SIDIENE---Deprecated",
        isCaseStudy: false
    },
    sidiene_ui: {
        title: "Rediseño UI/UX - SIDIENE",
        tag: "2026 | Proyecto UX/UI",
        subtitle: "Modernización de Interfaz",
        statusText: "En fase de wireframing",
        details: [
            "Investigación basada en datos de INEGI y flujos de trabajo reales.",
            "Diseño adaptado a colores institucionales de Sonora.",
            "Enfoque profundo en accesibilidad web."
        ],
        caseStudyLink: "./case-studies/sidiene-ui.html", // <--- Enlace a tu página extra
        isCaseStudy: true
    }
    // Añade el resto de tus proyectos aquí...
};

const translations = {
    es: { nav_home: "Inicio", hero_tag: "Ingeniero en Software & UI/UX" },
    en: { nav_home: "Home", hero_tag: "Software Engineer & UI/UX" }
    // Añade tus traducciones aquí...
};