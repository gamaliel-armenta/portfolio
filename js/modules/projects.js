import { projectData } from '../../data/projectsData.js';
import { openModal } from './modal.js';

export function renderProjects(activeKey = 'todos') {
  const container = document.getElementById('projects-container');
  if (!container) return;
  container.innerHTML = '';

  const filtered = Object.entries(projectData).filter(([, data]) =>
    activeKey === 'todos' || data.category === activeKey
  );

  if (!filtered.length) {
    container.innerHTML = `<p class="empty-msg">No hay proyectos en esta categoría aún.</p>`;
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
    card.innerHTML = `
      <div class="fluent-badge">${data.tag.split('|')[0].trim()}</div>
      <h3 style="margin-top: 12px;">${data.title}</h3>
      <p style="color: var(--text-dim); margin: 12px 0;">${data.subtitle}</p>
      <p style="color: var(--primary); font-weight: 600; margin-top: 16px;">
        ${data.isCaseStudy ? 'Ver Caso de Estudio ✦' : 'Ver detalles ✦'}
      </p>
    `;
    container.appendChild(card);
  });
}