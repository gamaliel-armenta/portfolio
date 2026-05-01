// app.js
document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
});

function renderProjects() {
    const container = document.getElementById("projects-container");
    if(!container) return; // Por si estamos en el caso de estudio y no existe
    
    for (const [id, data] of Object.entries(projectData)) {
        const card = document.createElement("div");
        card.className = "glass-card";
        
        if(data.isCaseStudy) {
            card.onclick = () => window.location.href = data.caseStudyLink;
        } else {
            card.onclick = () => openModal(id);
        }

        card.innerHTML = `
            <div class="fluent-badge" style="display:inline-block; margin-bottom:10px;">${data.tag.split('|')[0]}</div>
            <h3>${data.title}</h3>
            <p style="color: var(--text-dim); margin: 10px 0;">${data.subtitle}</p>
            <p style="font-size:0.8rem; color: var(--primary); font-weight: 600; margin-top:15px;">
                ${data.isCaseStudy ? 'Ver Caso de Estudio ✦' : 'Ver detalles ✦'}
            </p>
        `;
        container.appendChild(card);
    }
}

function openModal(id) {
    const data = projectData[id];
    let html = `
        <div class="fluent-badge">${data.tag}</div>
        <h2 style="margin: 15px 0 5px;">${data.title}</h2>
        <h4 style="color: var(--text-dim); margin-bottom: 20px;">${data.subtitle}</h4>
        <ul style="margin-left: 20px; line-height: 1.6; color: var(--text-dim);">
            ${data.details.map(item => `<li>${item}</li>`).join('')}
        </ul>
        ${data.githubLink ? `<br><a href="${data.githubLink}" target="_blank" class="fluent-btn">Ver Repositorio ↗</a>` : ''}
    `;
    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

function toggleTheme() {
    const body = document.body;
    body.getAttribute('data-theme') === 'dark' 
        ? body.setAttribute('data-theme', 'light') 
        : body.setAttribute('data-theme', 'dark');
}

function changeLanguage() {
    // Lógica de idioma original aquí
}

/* --- FUNCIONES PARA EL VISOR DE IMÁGENES --- */
function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imgDentroDelModal');
    if(modal && modalImg) {
        modalImg.src = src;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    }
}