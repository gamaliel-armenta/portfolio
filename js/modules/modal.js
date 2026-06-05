import { projectData } from '../../data/projectsData.js';

let modalOverlay, modalBody, closeBtn;

export function initModal() {
  modalOverlay = document.getElementById('modalOverlay');
  modalBody = document.getElementById('modalBody');
  closeBtn = document.getElementById('closeModalBtn');
  if (!modalOverlay || !modalBody) return;

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

export function openModal(id) {
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

export function closeModal() {
  modalOverlay.classList.remove('active');
}