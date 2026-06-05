export const CATEGORIES = [
  { key: "todos", label: "Todos" },
  { key: "uiux", label: "UI/UX" },
  { key: "fullstack", label: "Full Stack" },
  { key: "educacion", label: "Educación" },
  { key: "sonoro", label: "Diseño Sonoro" }
];

export const projectData = {
  sidiene: {
    title: "SIDIENE",
    category: "fullstack",
    tag: "01/2025 – Actualidad | Proyecto Institucional",
    subtitle: "Sistema de Digitalización de Incidencias",
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
    category: "uiux",
    tag: "2026 | Proyecto UX/UI",
    subtitle: "Modernización de Interfaz",
    details: [
      "Investigación basada en datos de INEGI y flujos de trabajo reales.",
      "Diseño adaptado a colores institucionales de Sonora.",
      "Enfoque profundo en accesibilidad web."
    ],
    caseStudyLink: "./case-studies/sidiene-ui.html",
    isCaseStudy: true
  },
  glaze_ui: {
    title: "Diseño UI/UX - Glaze",
    category: "uiux",
    tag: "2025 | Proyecto UX/UI",
    subtitle: "Desarrollo de propuesta de Interfaz",
    details: [
      "Investigación basada en datos de INEGI y tendencias del mercado infantil.",
      "Diseño contextual a usuarios (tutores y niños).",
      "Enfoque profundo en accesibilidad web."
    ],
    caseStudyLink: "./case-studies/glaze-ui.html",
    isCaseStudy: true
  },
  geocraft: {
    title: "Propuesta EdTech - Geocraft",
    category: "educacion",
    tag: "2026 | Proyecto EdTech y Gamificación",
    subtitle: "Proyecto gamificado para secundaria",
    details: [
      "Aplicación de Aprendizaje Basado en Juegos y Problemas.",
      "Diseño adaptado a estudiantes y sus intereses.",
      "Construcción iterativa con enfoque comunitario."
    ],
    caseStudyLink: "./case-studies/ed-geocraft.html",
    isCaseStudy: true
  }
};