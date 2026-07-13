// =============================================
// main.js - TODAS las funciones en un solo archivo
// Incluye: tema, estilos, pestañas, modal, lightbox, idiomas
// =============================================

// -------- DATOS DE PROYECTOS --------
const CATEGORIES = [
  { key: "todos", label: "Todos" },
  { key: "uiux", label: "UI/UX" },
  { key: "fullstack", label: "Full Stack" },
  { key: "educacion", label: "Educación" },
  { key: "sonoro", label: "Diseño Sonoro" }
];

const projectData = {
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

// -------- TRADUCCIONES COMPLETAS (incluye casos de estudio) --------
const translations = {
  es: {
    // Navegación
    nav: {
      inicio: "Inicio",
      sobre_mi: "Sobre Mí",
      proyectos: "Proyectos"
    },
    // Hero
    hero: {
      badge: "Ingeniero en Software & UI/UX",
      titulo: 'Gamaliel <br><span class="gradient-text">Armenta Pérez</span>',
      descripcion: "Ingeniero en Software enfocado en el Diseño UI/UX y la innovación educativa a través de la tecnología. Mi objetivo es aplicar el pensamiento crítico y el diseño centrado en el usuario para construir las herramientas digitales del futuro, optimizando flujos de trabajo mediante el uso estratégico de Inteligencia Artificial.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Ciudad Obregón, Sonora"
    },
    // Sobre mí
    sobre_mi: {
      titulo: "Conoce un poco más de mí",
      card1_titulo: "El puente entre el Diseño y el Código",
      card1_texto: "Como Ingeniero en Software, mi gran habilidad es que no solo diseño pantallas atractivas, sino que entiendo la estructura y viabilidad detrás de ellas. Esto me permite crear interfaces de usuario funcionales, accesibles y fáciles de implementar.",
      card1_curiosidad: "Dato curioso: en mi tiempo libre me dedico a la producción musical. Aprendo ritmo, composición y armonía; principios que aplico para crear 'armonía visual' en UX.",
      card2_titulo: "Mi Stack de Herramientas",
      card2_texto: "Perfil multidisciplinario que se adapta a diferentes etapas del ciclo de vida del producto:",
      badges: ["Figma", "Diseño UI/UX", "Prototipado", "Sistemas de Diseño", "User Research", "HTML/CSS/JS", "Frontend", "Git/GitHub"]
    },
    // Proyectos
    proyectos: {
      titulo: "Proyectos Tecnológicos",
      ver_caso: "Ver Caso de Estudio ✦",
      ver_detalles: "Ver detalles ✦",
      sin_proyectos: "No hay proyectos en esta categoría aún."
    },
    // Footer
    footer: "© 2026 Gamaliel Armenta Pérez",

    error404: {
      title: "Página no encontrada | Gamaliel Armenta",
      heading: "Página no encontrada",
      description: "Lo sentimos, la página que buscas no existe o ha sido movida.",
      button: "Volver al inicio"
    },

    // --- CASOS DE ESTUDIO ---
    case_glaze: {
      title: "Glaze | Caso de Estudio UI/UX",
      badge: "Caso de Estudio UX/UI",
      heading: "Glaze",
      subtitle: "Diversión segura para los niños y facilidad para los tutores.",
      meta: {
        role: "UI/UX Designer",
        tools: "Figma, IA Generativa",
        duration: "Ene 2025 - May 2025",
        platform: "Mobile App (iOS & Android)"
      },
      section1: "1. Contexto y Problema",
      section1_text: "El acceso temprano de los niños a dispositivos móviles ha creado una brecha entre la exploración digital y la seguridad, así mismo el acceso a contenido que no es apto para sus edades puede propiciar cambios de comportamiento afectando a otros niños o incluso en su dinámica familiar. Durante la fase de empatía, conversé con padres de familia que expresaron una preocupación constante: el software de control parental actual es demasiado invasivo, difícil de configurar o carece de una interfaz amigable para el niño que está usando el dispositivo.",
      section1_quote: "\"Mi hijo se pone violento y le dijo a su maestra (de preescolar) que la iba a matar.\"",
      section2: "2. Investigación y Definición de User Personas",
      section2_text: "Para abordar el problema, la arquitectura de la información se dividió basándose en dos <i>User Personas</i> principales:",
      section2_list: [
        "<strong>El Niño:</strong> Requiere una interfaz altamente visual, estímulos positivos, navegación basada en iconos grandes y ausencia total de menús de configuración complejos. Su entorno debe ser un 'jardín cercado' seguro.",
        "<strong>El Tutor:</strong> Necesita métricas claras (tiempo de pantalla), interruptores rápidos para bloquear/desbloquear aplicaciones, historial de actividad y notificaciones en tiempo real sobre intentos de acceso a contenido restringido."
      ],
      section3: "3. Sistema de Diseño Adaptativo",
      section3_text: "Implementé un sistema de diseño bifásico. Para la <strong>vista del tutor</strong>, mantuvimos una estética profesional, oscura y analítica. Para la <strong>vista del niño</strong>, los acentos de color se adaptan a un esquema más vibrante y lúdico.",
      section3_palette: {
        kid_title: "Vista del Niño",
        tutor_title: "Vista del Tutor"
      },
      section3_typography: {
        kid_title: "Vista del Niño",
        tutor_title: "Vista del Tutor"
      },
      section4: "4. Prototipado y Contraste de Vistas",
      section4_text: "El prototipo de alta fidelidad demuestra cómo la misma aplicación transforma su arquitectura de la información dependiendo del usuario logueado. Mientras el tutor tiene un panel de control jerárquico, el niño experimenta un carrusel inmersivo de aplicaciones y contenidos aprobados.",
      section4_card_title: "Vista del desarrollo de Glaze",
      section5: "5. Conclusiones y Pruebas de Usabilidad",
      section5_text: "Se realizaron pruebas con 5 familias. El diseño dual demostró ser un éxito moderado: <strong>redujo el tiempo de configuración inicial por parte de los padres en un 45%</strong> comparado con aplicaciones de la competencia. Por su parte, los niños (edades 6-9) pudieron navegar hacia sus juegos sin frustración y sin poder vulnerar el <i>sandbox</i> de seguridad.",
      button: "Ver otros proyectos"
    },
    case_sidiene: {
      title: "SIDIENE | Caso de Estudio UI/UX",
      badge: "Caso de Estudio UX/UI",
      heading: "Rediseño SIDIENE",
      subtitle: "Transformando la burocracia en papel en una experiencia digital fluida para el personal educativo.",
      meta: {
        role: "UI/UX Designer",
        tools: "Figma, Fluent UI, Hue Icons",
        duration: "Ene 2024 - Actualidad",
        platform: "Web App (Desktop)"
      },
      section1: "1. Contexto y Problema",
      section1_text: "A principios de 2024 se atendieron diversas entrevistas con directivos y personal del Departamento de Servicios Educativos Complementarios con enfoque en gestionar incidencias y expedientes de manera física. Empecé a desarrollar una solución basada en software en equipo como un sistema de administración y gestión inspirado en otros sistemas burocráticos (y actualmente descontinuados) como SICRES, pero adecuándolo a las necesidades recolectadas durante las entrevistas.",
      section1_text2: "Entre los principales <i>pain points</i> de los Prefectos y Directivos destacan el acceso por horario a los expedientes físicos y la estructura no estandarizada de los mismos.",
      section1_quote: "\"Ocupo algo a lo que pueda acceder para descargar el expediente de los estudiantes y enviarlos a mis superiores de manera inmediata.\"",
      section2: "2. Investigación y Descubrimientos",
      section2_text: "En base a los datos de la institución, tracé el <i>User Journey</i> de un prefecto escolar. Se mostró que al menos 30 minutos de su jornada eran usados en realizar correcciones de incidencias escritas por parte de los docentes. Igualmente, los roles implicados dentro de esta solución se ampliaron de Directivos y Prefectos a incluir al Trabajador Social y a los Docentes.",
      section2_text2: "Se estandarizaron los términos \"Reporte\" y \"Expediente\" por \"Incidencia\" y \"Expediente Único de Incidencias\" respectivamente. Esto se hizo ya que el término \"Reporte\" se usa en el desarrollo como un sinónimo de historial, mientras que en el sector educativo se refiere a un archivo que detalla una indisciplina con su nivel de severidad y la relatoría de la misma.",
      section3: "3. Sistema de Diseño e Identidad",
      section3_text: "Implementé un sistema de diseño basado en los colores institucionales detallados en el Manual de Identidad del Gobierno del Estado de Sonora. Esto, aunado al proceso de digitalización de los trámites y acciones burocráticas, mostró potencial para una mejor asimilación por parte del público meta.",
      section3_text2: "Se validó el contraste de los colores institucionales bajo el estándar WCAG 2.1 AA para prevenir fatiga visual en los docentes, garantizando que el sistema sea accesible y cómodo para un uso prolongado durante la jornada escolar.",
      section3_text3: "En el diseño tipográfico, se optó por fuentes <i>sans-serif</i> para mantener una imagen formal y legible. Se pensó en Montserrat como fuente principal, pero se descartó para evitar confusiones de identidad, ya que el Gobierno Federal hace uso de esta, mientras que la institución educativa es de carácter Estatal.",
      section3_palette: "Colores institucionales",
      section3_typography_title: "Tipografías",
      section4: "4. El Antes y el Después",
      section4_text: "El contraste visual y de arquitectura de la información entre la versión del 2024, 2025 y el nuevo rediseño evidencia una optimización directa en la reducción de carga cognitiva para el usuario. Se tomó como un proceso iterativo para diversas materias dentro de la Ingeniería y se centró en un subcaso de uso dentro de \"Gestionar Incidencias\".",
      gallery: {
        v1: "V1 (2024)",
        v2: "V2 (2025)",
        final: "Diseño Final"
      },
      section5: "5. Resultados y Próximos Pasos",
      section5_text: "El rediseño logró reducir la carga visual de los formularios, actualmente se encuentra en proceso de desarrollo de los flujos completos del software. Este está ligado al caso de desarrollo fullstack en este mismo portafolio con una migración de React, Typescript y Node.JS a Svelte, C# y .NET.",
      button: "Ver otros proyectos"
    },
    case_geocraft: {
      title: "Geocraft | Caso de Estudio EdTech",
      badge: "2026 | Proyecto EdTech y Gamificación",
      heading: "Geocraft",
      subtitle: "Desarrollo e implementación de un proyecto gamificado e inclusivo en Minecraft para la enseñanza iterativa de geografía en secundaria.",
      meta: {
        role: "EdTech Designer &amp; Co-Docente Bilingüe",
        tools: "Minecraft, Agile Framework",
        approach: "ABP / ABJ (Aprendizaje Basado en Juegos)",
        status: "Terminado"
      },
      section1: "1. Contexto y el Reto de Inclusión",
      section1_text: "El proyecto nació de la necesidad de transformar la enseñanza tradicional de la geografía en una escuela secundaria, convirtiendo conceptos densos de relieve, fronteras, geopolítica y patrimonio biocultural en una experiencia interactiva y memorable. El reto principal incrementó su complejidad al integrar una <b>adecuación curricular de accesibilidad lingüística</b>, debido a la incorporación de una estudiante angloparlante en el grupo.",
      section1_text2: "A través de metodologías de diseño centrado en el usuario (los alumnos), estructuré un plan de clase disruptivo apoyado en técnicas de co-docencia bilingüe en idioma inglés, garantizando que la barrera del idioma no fuera un impedimento para la asimilación del contenido.",
      section1_quote: "\"¿Cómo transformamos la teoría plana de un libro de texto en un entorno virtual tridimensional interactivo, manteniendo un aula 100% inclusiva y bilingüe?\"",
      section2: "2. Propuesta Pedagógica: Gamificación e Iteración",
      section2_text: "Implementando los principios del Aprendizaje Basado en Juegos (ABJ) y Problemas (ABP), seleccioné <b>Minecraft</b> como el motor de simulación a gran escala. El núcleo del proyecto consistió en que los estudiantes crearan una representación tridimensional y escalada de un país real otorgada de manera aleatoria, reflejando los temas vistos en clase.",
      section2_text2: "Como Ingeniero en Software, trasladé el chip de las metodologías ágiles a la planeación didáctica implementando un enfoque de <b>Construcción Iterativa</b>. En lugar de una entrega final única, el proyecto se dividió en <i>Sprints</i> educativos: los estudiantes construían, recibían retroalimentación continua del cuerpo docente, refinaban sus mapas bloque por bloque y agregaban lo visto en clase para la siguiente entrega, emulando el ciclo de vida del desarrollo de software moderno.",
      section3: "3. El 'Sistema de Diseño' del Proyecto",
      section3_text: "Para asegurar el éxito de la experiencia, diseñé lineamientos claros que funcionaron como el sistema de reglas y componentes del juego.",
      section3_text2: "La documentación y el material visual de las clases se estructuraron utilizando tipografías limpias y de alta legibilidad, garantizando una imagen formal pero moderna que capturara la atención de los alumnos sin generar fatiga cognitiva.",
      section3_environment: "Componentes del Entorno",
      section3_biomes: "Paleta de Biomas / Simulación",
      section3_typography: "Estructura Tipográfica (Slides)",
      section4: "4. Evolución por Sprints (Construcción por Fases)",
      section4_text: "El proyecto no se construyó de un jalón. Siguiendo el pipeline de un desarrollo de software robusto, dividimos la creación del mapa en tres fases evolutivas clave donde los alumnos pasaban de la abstracción en papel a un despliegue virtual funcional:",
      section4_phase1: "Fase 1: Wireframe / Planos",
      section4_phase2: "Fase 2: MVP (Relieve Básico)",
      section4_phase3: "Fase 3: Entorno Final",
      section5: "5. Resultados e Impacto de la Experiencia",
      section5_text: "La implementación de <b>Geocraft</b> incrementó radicalmente el engagement del grupo, logrando una retención conceptual superior a las evaluaciones escritas tradicionales. La adecuación bilingüe mitigó por completo el aislamiento de la alumna angloparlante, promoviendo una inclusión e integración social natural en la comunidad escolar.",
      section5_text2: "Este proyecto demostró mi capacidad como Ingeniero para liderar equipos multifuncionales, aplicar metodologías ágiles de construcción fuera del entorno técnico convencional y diseñar experiencias de usuario (UX) centradas en el aprendizaje y la empatía comunitaria.",
      button: "Ver otros proyectos"
    }
  },
  en: {
    // Navegación
    nav: {
      inicio: "Home",
      sobre_mi: "About Me",
      proyectos: "Projects"
    },
    // Hero
    hero: {
      badge: "Software Engineer & UI/UX",
      titulo: 'Gamaliel <br><span class="gradient-text">Armenta Pérez</span>',
      descripcion: "Software Engineer focused on UI/UX Design and educational innovation through technology. My goal is to apply critical thinking and user-centered design to build the digital tools of the future, optimizing workflows through the strategic use of Artificial Intelligence.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Ciudad Obregón, Sonora"
    },
    sobre_mi: {
      titulo: "Learn more about me",
      card1_titulo: "The bridge between Design and Code",
      card1_texto: "As a Software Engineer, my great skill is that I don't just design attractive screens, but I understand the structure and feasibility behind them. This allows me to create functional, accessible, and easy-to-implement user interfaces.",
      card1_curiosidad: "Fun fact: In my free time I dedicate myself to music production. I learn rhythm, composition and harmony; principles that I apply to create 'visual harmony' in UX.",
      card2_titulo: "My Tech Stack",
      card2_texto: "Multidisciplinary profile that adapts to different stages of the product lifecycle:",
      badges: ["Figma", "UI/UX Design", "Prototyping", "Design Systems", "User Research", "HTML/CSS/JS", "Frontend", "Git/GitHub"]
    },
    proyectos: {
      titulo: "Tech Projects",
      ver_caso: "View Case Study ✦",
      ver_detalles: "View details ✦",
      sin_proyectos: "No projects in this category yet."
    },
    footer: "© 2026 Gamaliel Armenta Pérez",

    error404: {
      title: "Page not found | Gamaliel Armenta",
      heading: "Page not found",
      description: "Sorry, the page you are looking for does not exist or has been moved.",
      button: "Back to home"
    },

    // --- CASOS DE ESTUDIO (inglés) ---
    case_glaze: {
      title: "Glaze | UI/UX Case Study",
      badge: "UX/UI Case Study",
      heading: "Glaze",
      subtitle: "Safe fun for children and ease for guardians.",
      meta: {
        role: "UI/UX Designer",
        tools: "Figma, Generative AI",
        duration: "Jan 2025 - May 2025",
        platform: "Mobile App (iOS & Android)"
      },
      section1: "1. Context and Problem",
      section1_text: "The early access of children to mobile devices has created a gap between digital exploration and safety. Likewise, access to age-inappropriate content can lead to behavioral changes affecting other children or even their family dynamics. During the empathy phase, I spoke with parents who expressed a constant concern: current parental control software is too invasive, difficult to configure, or lacks a child-friendly interface for the child using the device.",
      section1_quote: "\"My son gets violent and told his preschool teacher that he was going to kill her.\"",
      section2: "2. Research and User Personas Definition",
      section2_text: "To address the problem, the information architecture was divided based on two main User Personas:",
      section2_list: [
        "<strong>The Child:</strong> Requires a highly visual interface, positive stimuli, navigation based on large icons, and the absence of complex configuration menus. Their environment must be a safe 'walled garden'.",
        "<strong>The Guardian:</strong> Needs clear metrics (screen time), quick switches to block/unblock apps, activity history, and real-time notifications about attempts to access restricted content."
      ],
      section3: "3. Adaptive Design System",
      section3_text: "I implemented a two-phase design system. For the guardian view, we maintained a professional, dark, and analytical aesthetic. For the child view, color accents adapt to a more vibrant and playful scheme.",
      section3_palette: {
        kid_title: "Child View",
        tutor_title: "Guardian View"
      },
      section3_typography: {
        kid_title: "Child View",
        tutor_title: "Guardian View"
      },
      section4: "4. Prototyping and View Contrast",
      section4_text: "The high-fidelity prototype demonstrates how the same application transforms its information architecture depending on the logged-in user. While the guardian has a hierarchical control panel, the child experiences an immersive carousel of approved apps and content.",
      section4_card_title: "Glaze Development View",
      section5: "5. Conclusions and Usability Testing",
      section5_text: "Tests were conducted with 5 families. The dual design proved moderately successful: <strong>it reduced the initial setup time for parents by 45%</strong> compared to competitor apps. Meanwhile, children (ages 6-9) were able to navigate to their games without frustration and could not breach the security sandbox.",
      button: "View other projects"
    },
    case_sidiene: {
      title: "SIDIENE | UI/UX Case Study",
      badge: "UX/UI Case Study",
      heading: "SIDIENE Redesign",
      subtitle: "Transforming paper-based bureaucracy into a fluid digital experience for educational staff.",
      meta: {
        role: "UI/UX Designer",
        tools: "Figma, Fluent UI, Hue Icons",
        duration: "Jan 2024 - Present",
        platform: "Web App (Desktop)"
      },
      section1: "1. Context and Problem",
      section1_text: "In early 2024, various interviews were held with directors and staff of the Department of Complementary Educational Services to address the management of incidents and files through physical means. I began developing a software-based solution as a team, an administration and management system inspired by other bureaucratic systems (currently discontinued) such as SICRES, but adapted to the needs collected during the interviews.",
      section1_text2: "Among the main pain points of Prefects and Directors, the time-bound access to physical files and their non-standardized structure stand out.",
      section1_quote: "\"I need something I can access to download student files and send them to my superiors immediately.\"",
      section2: "2. Research and Discoveries",
      section2_text: "Based on the institution's data, I traced the User Journey of a school prefect. It was shown that at least 30 minutes of their day were used to correct incident records written by teachers. Likewise, the roles involved within this solution expanded from Directors and Prefects to include the Social Worker and Teachers.",
      section2_text2: "The terms 'Report' and 'File' were standardized to 'Incident' and 'Unique Incident File' respectively. This was done because the term 'Report' is used in development as a synonym for history, while in the educational sector it refers to a file detailing a misconduct with its severity level and a narrative of the event.",
      section3: "3. Design System and Identity",
      section3_text: "I implemented a design system based on the institutional colors detailed in the Brand Identity Manual of the Government of the State of Sonora. This, together with the digitization process of procedures and bureaucratic actions, showed potential for better assimilation by the target audience.",
      section3_text2: "The contrast of institutional colors was validated under WCAG 2.1 AA standard to prevent visual fatigue in teachers, ensuring the system is accessible and comfortable for prolonged use during the school day.",
      section3_text3: "In typographic design, sans-serif fonts were chosen to maintain a formal and legible image. Montserrat was considered as the primary font, but it was discarded to avoid identity confusion, as the Federal Government uses it, while the educational institution is state-level.",
      section3_palette: "Institutional Colors",
      section3_typography_title: "Typography",
      section4: "4. Before and After",
      section4_text: "The visual and information architecture contrast between the 2024, 2025 versions and the new redesign shows a direct optimization in reducing cognitive load for the user. It was taken as an iterative process for various subjects within Engineering and focused on a subcase of use within 'Manage Incidents'.",
      gallery: {
        v1: "V1 (2024)",
        v2: "V2 (2025)",
        final: "Final Design"
      },
      section5: "5. Results and Next Steps",
      section5_text: "The redesign managed to reduce the visual load of the forms; it is currently in the process of developing the complete software flows. This is linked to the fullstack development case in this same portfolio with a migration from React, TypeScript and Node.js to Svelte, C# and .NET.",
      button: "View other projects"
    },
    case_geocraft: {
      title: "Geocraft | EdTech Case Study",
      badge: "2026 | EdTech and Gamification Project",
      heading: "Geocraft",
      subtitle: "Development and implementation of a gamified and inclusive project in Minecraft for the iterative teaching of geography in secondary school.",
      meta: {
        role: "EdTech Designer &amp; Bilingual Co-Teacher",
        tools: "Minecraft, Agile Framework",
        approach: "PBL / GBL (Project/Game-Based Learning)",
        status: "Completed"
      },
      section1: "1. Context and Inclusion Challenge",
      section1_text: "The project was born from the need to transform traditional geography teaching in a secondary school, turning dense concepts of relief, borders, geopolitics, and biocultural heritage into an interactive and memorable experience. The main challenge increased in complexity by integrating a curricular adaptation for linguistic accessibility, due to the inclusion of an English-speaking student in the group.",
      section1_text2: "Through user-centered design methodologies (the students), I structured a disruptive lesson plan supported by bilingual co-teaching techniques in English, ensuring that the language barrier was not an obstacle to content assimilation.",
      section1_quote: "\"How do we transform the flat theory of a textbook into an interactive three-dimensional virtual environment, maintaining a 100% inclusive and bilingual classroom?\"",
      section2: "2. Pedagogical Proposal: Gamification and Iteration",
      section2_text: "Implementing the principles of Game-Based Learning (GBL) and Project-Based Learning (PBL), I selected <b>Minecraft</b> as the large-scale simulation engine. The core of the project consisted of students creating a three-dimensional and scaled representation of a real country randomly assigned, reflecting the topics seen in class.",
      section2_text2: "As a Software Engineer, I transferred the agile methodologies mindset to lesson planning by implementing an <b>Iterative Construction</b> approach. Instead of a single final deliverable, the project was divided into educational <i>Sprints</i>: students built, received continuous feedback from the teaching staff, refined their maps block by block, and added what was seen in class for the next delivery, emulating the modern software development lifecycle.",
      section3: "3. The Project's 'Design System'",
      section3_text: "To ensure the success of the experience, I designed clear guidelines that functioned as the game's rule system and components.",
      section3_text2: "The documentation and visual material for the classes were structured using clean and highly legible typographies, ensuring a formal but modern image that would capture the students' attention without generating cognitive fatigue.",
      section3_environment: "Environment Components",
      section3_biomes: "Biome / Simulation Palette",
      section3_typography: "Typography Structure (Slides)",
      section4: "4. Evolution by Sprints (Phased Construction)",
      section4_text: "The project was not built in one go. Following a robust software development pipeline, we divided the map creation into three key evolutionary phases where students moved from paper abstraction to a functional virtual deployment:",
      section4_phase1: "Phase 1: Wireframe / Plans",
      section4_phase2: "Phase 2: MVP (Basic Terrain)",
      section4_phase3: "Phase 3: Final Environment",
      section5: "5. Results and Impact of the Experience",
      section5_text: "The implementation of <b>Geocraft</b> radically increased the group's engagement, achieving a conceptual retention superior to traditional written assessments. The bilingual adaptation completely mitigated the isolation of the English-speaking student, promoting natural inclusion and social integration in the school community.",
      section5_text2: "This project demonstrated my ability as an Engineer to lead cross-functional teams, apply agile construction methodologies outside the conventional technical environment, and design user experiences (UX) centered on learning and community empathy.",
      button: "View other projects"
    }
  },
  ja: {
    // Navegación
    nav: {
      inicio: "ホーム",
      sobre_mi: "私について",
      proyectos: "プロジェクト"
    },
    hero: {
      badge: "ソフトウェアエンジニア & UI/UX",
      titulo: 'ガマリエル <br><span class="gradient-text">アルメンタ・ペレス</span>',
      descripcion: "UI/UXデザインとテクノロジーを通じた教育イノベーションに注力するソフトウェアエンジニア。私の目標は、批判的思考とユーザー中心のデザインを適用して、未来のデジタルツールを構築し、人工知能の戦略的活用を通じてワークフローを最適化することです。",
      email: "メール",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "シウダー・オブレゴン, ソノラ"
    },
    sobre_mi: {
      titulo: "私についてもっと知る",
      card1_titulo: "デザインとコードの架け橋",
      card1_texto: "ソフトウェアエンジニアとしての私の大きなスキルは、魅力的な画面をデザインするだけでなく、その背後にある構造と実現可能性を理解していることです。これにより、機能的でアクセシブルで実装が容易なユーザーインターフェースを作成できます。",
      card1_curiosidad: "豆知識：余暇には音楽制作に取り組んでいます。リズム、作曲、ハーモニーを学び、UXにおける「視覚的ハーモニー」を生み出すためにこれらの原則を適用しています。",
      card2_titulo: "私のテクノロジースタック",
      card2_texto: "製品ライフサイクルのさまざまな段階に適応する学際的なプロファイル：",
      badges: ["Figma", "UI/UXデザイン", "プロトタイピング", "デザインシステム", "ユーザーリサーチ", "HTML/CSS/JS", "フロントエンド", "Git/GitHub"]
    },
    proyectos: {
      titulo: "テクノロジープロジェクト",
      ver_caso: "ケーススタディを見る ✦",
      ver_detalles: "詳細を見る ✦",
      sin_proyectos: "このカテゴリにはまだプロジェクトがありません。"
    },
    footer: "© 2026 ガマリエル・アルメンタ・ペレス",

    error404: {
      title: "ページが見つかりません | Gamaliel Armenta",
      heading: "ページが見つかりません",
      description: "お探しのページは存在しないか、移動しました。",
      button: "ホームに戻る"
    },

    // --- CASOS DE ESTUDIO (japonés) ---
    case_glaze: {
      title: "Glaze | UI/UX ケーススタディ",
      badge: "UX/UI ケーススタディ",
      heading: "Glaze",
      subtitle: "子供の安全な楽しみと保護者のための使いやすさ。",
      meta: {
        role: "UI/UXデザイナー",
        tools: "Figma, 生成AI",
        duration: "2025年1月 - 2025年5月",
        platform: "モバイルアプリ (iOS & Android)"
      },
      section1: "1. 背景と課題",
      section1_text: "子どもたちが早期にモバイルデバイスにアクセスすることで、デジタル探求と安全性の間にギャップが生じています。同様に、年齢に不適切なコンテンツへのアクセスは、他の子どもや家族のダイナミクスに影響を与える行動変化を引き起こす可能性があります。共感フェーズでは、保護者から現在のペアレンタルコントロールソフトウェアは侵入的すぎるか、設定が難しいか、子どもが使うデバイスに子ども向けのインターフェースが不足しているという懸念を聞きました。",
      section1_quote: "\"私の息子は暴力的になり、幼稚園の先生に殺すと言いました。\"",
      section2: "2. リサーチとユーザーペルソナの定義",
      section2_text: "問題に対処するため、情報アーキテクチャを2つの主要なユーザーペルソナに基づいて分割しました：",
      section2_list: [
        "<strong>子ども：</strong>高度に視覚的なインターフェース、ポジティブな刺激、大きなアイコンに基づくナビゲーション、複雑な設定メニューの不在を必要とします。彼らの環境は安全な「壁で囲まれた庭」でなければなりません。",
        "<strong>保護者：</strong>明確なメトリクス（スクリーンタイム）、アプリのブロック/ブロック解除のためのクイックスイッチ、アクティビティ履歴、制限されたコンテンツへのアクセス試行に関するリアルタイム通知が必要です。"
      ],
      section3: "3. 適応型デザインシステム",
      section3_text: "二段階のデザインシステムを実装しました。保護者ビューでは、プロフェッショナルでダークで分析的な美学を維持しました。子どもビューでは、カラーアクセントがより鮮やかで遊び心のあるスキームに適応します。",
      section3_palette: {
        kid_title: "子どもビュー",
        tutor_title: "保護者ビュー"
      },
      section3_typography: {
        kid_title: "子どもビュー",
        tutor_title: "保護者ビュー"
      },
      section4: "4. プロトタイピングとビューの対比",
      section4_text: "高忠実度プロトタイプは、ログインユーザーに応じて同じアプリケーションが情報アーキテクチャをどのように変換するかを示しています。保護者は階層型のコントロールパネルを持ち、子どもは承認されたアプリとコンテンツの没入型カルーセルを体験します。",
      section4_card_title: "Glaze 開発ビュー",
      section5: "5. 結論とユーザビリティテスト",
      section5_text: "5つの家族でテストを実施しました。デュアルデザインは中程度の成功を収めました。<strong>競合アプリと比較して、保護者の初期設定時間を45%削減しました。</strong>一方、子どもたち（6〜9歳）はフラストレーションなくゲームにナビゲートでき、セキュリティサンドボックスを侵害することはできませんでした。",
      button: "他のプロジェクトを見る"
    },
    case_sidiene: {
      title: "SIDIENE | UI/UX ケーススタディ",
      badge: "UX/UI ケーススタディ",
      heading: "SIDIENE リデザイン",
      subtitle: "紙ベースの官僚主義を教育スタッフのための流動的なデジタル体験に変える。",
      meta: {
        role: "UI/UXデザイナー",
        tools: "Figma, Fluent UI, Hue Icons",
        duration: "2024年1月 - 現在",
        platform: "Webアプリ (デスクトップ)"
      },
      section1: "1. 背景と課題",
      section1_text: "2024年初頭、教育補完サービス部の管理職やスタッフとのさまざまなインタビューが行われ、インシデントやファイルの物理的な管理に対処しました。私はチームとしてソフトウェアベースのソリューションを開発し始めました。これはSICRESなどの他の官僚システム（現在は廃止）に触発された管理・管理システムですが、インタビューで収集されたニーズに適応させました。",
      section1_text2: "プレフェクトやディレクターの主なペインポイントとしては、物理ファイルへの時間制限付きアクセスと、その非標準化された構造が挙げられます。",
      section1_quote: "\"学生ファイルをダウンロードして上司に即座に送信できるものが必要です。\"",
      section2: "2. リサーチと発見",
      section2_text: "機関のデータに基づいて、学校のプレフェクトのユーザージャーニーをトレースしました。教師が書いたインシデント記録を修正するのに、1日の少なくとも30分が使われていることが示されました。同様に、このソリューションに関与する役割は、ディレクターやプレフェクトから、ソーシャルワーカーや教師を含むように拡大されました。",
      section2_text2: "「レポート」と「ファイル」という用語は、それぞれ「インシデント」と「ユニークインシデントファイル」に標準化されました。これは、「レポート」という用語が開発では履歴の同義語として使用されるのに対し、教育分野では、その重大度レベルとイベントの物語を含む不正行為を詳細に説明するファイルを指すために行われました。",
      section3: "3. デザインシステムとアイデンティティ",
      section3_text: "ソノラ州政府のブランドアイデンティティマニュアルに詳細に記載されている機関カラーに基づいてデザインシステムを実装しました。これにより、手続きや官僚的行為のデジタル化プロセスとともに、ターゲットオーディエンスによるより良い同化の可能性が示されました。",
      section3_text2: "機関カラーのコントラストは、WCAG 2.1 AA基準に基づいて検証され、教師の視覚疲労を防ぎ、学校の授業時間中に長時間使用してもアクセス可能で快適なシステムを保証しました。",
      section3_text3: "タイポグラフィデザインでは、フォーマルで読みやすいイメージを維持するためにサンセリフフォントが選ばれました。Montserratが主要フォントとして検討されましたが、連邦政府が使用しているため、アイデンティティの混乱を避けるために却下されました。教育機関は州レベルのものです。",
      section3_palette: "機関カラー",
      section3_typography_title: "タイポグラフィ",
      section4: "4. ビフォー・アフター",
      section4_text: "2024年版、2025年版と新しいリデザインの間のビジュアルおよび情報アーキテクチャのコントラストは、ユーザーの認知負荷を軽減する直接的な最適化を示しています。エンジニアリング内のさまざまな主題のための反復プロセスとして捉えられ、「インシデント管理」内の使用サブケースに焦点を当てました。",
      gallery: {
        v1: "V1 (2024)",
        v2: "V2 (2025)",
        final: "最終デザイン"
      },
      section5: "5. 結果と今後のステップ",
      section5_text: "リデザインによりフォームの視覚的負荷を軽減することに成功しました。現在、ソフトウェアの完全なフローの開発を進めています。これは、React、TypeScript、Node.jsからSvelte、C#、.NETへの移行を伴う、この同じポートフォリオ内のフルスタック開発ケースに関連しています。",
      button: "他のプロジェクトを見る"
    },
    case_geocraft: {
      title: "Geocraft | EdTech ケーススタディ",
      badge: "2026 | EdTech・ゲーミフィケーションプロジェクト",
      heading: "Geocraft",
      subtitle: "中学校での地理の反復的指導のためのMinecraftでのゲーミフィケーションと包括的プロジェクトの開発と実装。",
      meta: {
        role: "EdTechデザイナー &amp; バイリンガル共同講師",
        tools: "Minecraft, アジャイルフレームワーク",
        approach: "PBL / GBL (プロジェクト/ゲームベース学習)",
        status: "完了"
      },
      section1: "1. 背景とインクルージョンの課題",
      section1_text: "このプロジェクトは、中学校での伝統的な地理教育を変革する必要性から生まれました。起伏、国境、地政学、生物文化遺産といった密度の高い概念を、インタラクティブで記憶に残る体験に変えることです。主な課題は、グループに英語を話す生徒が含まれていたため、言語的アクセシビリティのためのカリキュラム適応を統合することで、複雑さが増しました。",
      section1_text2: "ユーザー中心のデザイン方法論（生徒たち）を通じて、バイリンガル共同指導技術（英語）を活用した革新的な授業計画を構築し、言語の壁が内容の理解を妨げないようにしました。",
      section1_quote: "\"教科書の平面的な理論を、インタラクティブな3次元仮想環境にどのように変え、100%包括的でバイリンガルな教室を維持するか？\"",
      section2: "2. 教育提案：ゲーミフィケーションと反復",
      section2_text: "ゲームベース学習（GBL）とプロジェクトベース学習（PBL）の原則を実装し、大規模シミュレーションエンジンとして<b>Minecraft</b>を選択しました。プロジェクトの核心は、生徒がランダムに割り当てられた実際の国の3次元かつスケールされた表現を、授業で見られたトピックを反映して作成することでした。",
      section2_text2: "ソフトウェアエンジニアとして、アジャイルメソドロジーの考え方を授業計画に適用し、<b>反復的構築</b>アプローチを実装しました。単一の最終成果物ではなく、プロジェクトは教育用<i>スプリント</i>に分割されました。生徒は構築し、教員から継続的なフィードバックを受け、ブロックごとにマップを洗練し、次の納品のために授業で見られたものを追加し、現代のソフトウェア開発ライフサイクルを模倣しました。",
      section3: "3. プロジェクトの「デザインシステム」",
      section3_text: "体験の成功を確実にするために、ゲームのルールシステムとコンポーネントとして機能する明確なガイドラインを設計しました。",
      section3_text2: "授業の文書とビジュアル資料は、クリーンで読みやすいタイポグラフィを使用して構造化され、生徒の注意を引きながら認知疲労を引き起こさない、フォーマルでモダンなイメージを確保しました。",
      section3_environment: "環境コンポーネント",
      section3_biomes: "バイオーム / シミュレーションパレット",
      section3_typography: "タイポグラフィ構造（スライド）",
      section4: "4. スプリントによる進化（段階的構築）",
      section4_text: "プロジェクトは一気に構築されたわけではありません。堅牢なソフトウェア開発パイプラインに従い、マップ作成を3つの主要な進化フェーズに分割し、生徒は紙の抽象化から機能的な仮想展開に移行しました：",
      section4_phase1: "フェーズ1: ワイヤーフレーム / 計画",
      section4_phase2: "フェーズ2: MVP (基本地形)",
      section4_phase3: "フェーズ3: 最終環境",
      section5: "5. 結果と体験の影響",
      section5_text: "<b>Geocraft</b>の実装は、グループのエンゲージメントを大幅に向上させ、従来の筆記評価よりも優れた概念保持を達成しました。バイリンガル適応は、英語を話す生徒の孤立を完全に緩和し、学校コミュニティにおける自然なインクルージョンと社会統合を促進しました。",
      section5_text2: "このプロジェクトは、クロスファンクショナルチームをリードし、従来の技術環境外でアジャイル構築方法論を適用し、学習とコミュニティ共感を中心としたユーザー体験（UX）を設計するエンジニアとしての私の能力を示しました。",
      button: "他のプロジェクトを見る"
    }
  }
};

// -------- FUNCIÓN PARA CAMBIAR IDIOMA --------
let currentLanguage = 'es';

function changeLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('language', lang);
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, translations: translations[lang] } }));
  applyTranslations(translations[lang]);
}

function applyTranslations(t) {
  // 1. Traducir elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const parts = key.split('.');
    let value = t;
    for (const part of parts) {
      if (value && value[part] !== undefined) value = value[part];
      else { value = ''; break; }
    }
    if (value) el.innerHTML = value;
  });

  // 2. Traducir badges (generar desde JS)
  const badgeContainer = document.getElementById('badge-container');
  if (badgeContainer) {
    const badges = t.sobre_mi.badges || [];
    badgeContainer.innerHTML = badges.map(b => `<span class="fluent-badge">${b}</span>`).join('');
  }

  // 3. Título de la página (si se definió)
  const pageTitle = document.querySelector('title');
  if (pageTitle && t.pageTitle) {
    pageTitle.textContent = t.pageTitle;
  }
}

function initLanguage() {
  const saved = localStorage.getItem('language');
  const browserLang = navigator.language.slice(0, 2);
  const defaultLang = 'es';
  let lang = saved || (translations[browserLang] ? browserLang : defaultLang);
  if (!translations[lang]) lang = defaultLang;
  changeLanguage(lang);

  const langSelector = document.getElementById('languageSelector');
  if (langSelector) {
    langSelector.value = lang;
    langSelector.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }
}

// -------- FUNCIÓN DE TEMA (claro/oscuro) --------
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const root = document.body;
  const savedTheme = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      requestAnimationFrame(() => {
        const current = root.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateIcon(next);
      });
    });
  }

  function updateIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
    }
  }
}

// -------- SELECTOR DE ESTILOS --------
function initStyleSelector() {
  const dots = document.querySelectorAll('.style-dot');
  if (!dots.length) return;

  const savedStyle = localStorage.getItem('style') || 'bauhaus';
  document.body.setAttribute('data-style', savedStyle);

  dots.forEach(dot => {
    dot.classList.toggle('active', dot.dataset.style === savedStyle);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const style = dot.dataset.style;
      document.body.setAttribute('data-style', style);
      localStorage.setItem('style', style);
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });
}

// -------- MODAL --------
let modalOverlay, modalBody, closeBtn;

function initModal() {
  modalOverlay = document.getElementById('modalOverlay');
  modalBody = document.getElementById('modalBody');
  closeBtn = document.getElementById('closeModalBtn');
  if (!modalOverlay || !modalBody) return;

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

function openModal(id) {
  const data = projectData[id];
  if (!data) return;

  modalBody.innerHTML = `
    <div class="fluent-badge" style="margin-bottom: 16px;">${data.tag}</div>
    <h2 style="margin-bottom: 8px;">${data.title}</h2>
    <h4 style="color: var(--text-dim); margin-bottom: 24px;">${data.subtitle}</h4>
    <ul style="margin-left: 24px; line-height: 1.7;">
      ${data.details.map(item => `<li>${item}</li>`).join('')}
    </ul>
    ${data.githubLink ? `<br><a href="${data.githubLink}" target="_blank" class="fluent-btn" style="margin-top: 20px;">Ver Repositorio <i class="ri-external-link-line"></i></a>` : ''}
  `;
  modalOverlay.classList.add('active');
}

function closeModal() {
  modalOverlay.classList.remove('active');
}

// -------- RENDERIZADO DE PROYECTOS --------
function renderProjects(activeKey = 'todos') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = Object.entries(projectData).filter(([, data]) =>
    activeKey === 'todos' || data.category === activeKey
  );

  if (!filtered.length) {
    const msg = document.createElement('p');
    msg.className = 'empty-msg';
    const t = translations[currentLanguage] || translations.es;
    msg.textContent = t.proyectos.sin_proyectos;
    container.appendChild(msg);
    return;
  }

  filtered.forEach(([id, data]) => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.onclick = () => {
      if (data.isCaseStudy && data.caseStudyLink) {
        window.location.href = data.caseStudyLink;
      } else {
        openModal(id);
      }
    };
    const t = translations[currentLanguage] || translations.es;
    const label = data.isCaseStudy ? t.proyectos.ver_caso : t.proyectos.ver_detalles;
    card.innerHTML = `
      <div class="fluent-badge">${data.tag.split('|')[0].trim()}</div>
      <h3 style="margin-top: 12px;">${data.title}</h3>
      <p style="color: var(--text-dim); margin: 12px 0;">${data.subtitle}</p>
      <p style="color: var(--primary); font-weight: 600; margin-top: 16px;">
        ${label}
      </p>
    `;
    container.appendChild(card);
  });
}

// -------- PESTAÑAS --------
function initTabs() {
  const container = document.getElementById('tabs-container');
  if (!container) return;

  const render = (activeKey) => {
    container.innerHTML = CATEGORIES.map(cat => `
      <button class="tab-btn ${activeKey === cat.key ? 'active' : ''}"
              data-tab="${cat.key}">
        ${cat.label}
      </button>
    `).join('');
    renderProjects(activeKey);
    attachEvents();
  };

  const attachEvents = () => {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(key);
      });
    });
  };

  render('todos');
}

// -------- LIGHTBOX --------
function initLightbox() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('imgDentroDelModal');
  const closeSpan = document.querySelector('.image-modal-close');

  if (!modal || !modalImg) return;

  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('.zoomable');
    if (target && target.tagName === 'IMG') {
      openImageModal(target.src);
    }
  });

  function openImageModal(src) {
    modalImg.src = src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeImageModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeSpan.addEventListener('click', closeImageModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeImageModal();
  });

  window.openImageModal = openImageModal;
  window.closeImageModal = closeImageModal;
}

// -------- INICIALIZACIÓN --------
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initStyleSelector();
  initTabs();
  initModal();
  initLightbox();

  document.addEventListener('languageChanged', () => {
    const langSelector = document.getElementById('languageSelector');
    if (langSelector) {
      langSelector.value = currentLanguage;
    }
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
      const key = activeTab.dataset.tab;
      renderProjects(key);
    } else {
      renderProjects('todos');
    }
  });
});