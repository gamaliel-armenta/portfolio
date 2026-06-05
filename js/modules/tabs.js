import { renderProjects } from './projects.js';
import { CATEGORIES } from '../../data/projectsData.js';

export function initTabs() {
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
      btn.addEventListener('click', (e) => {
        const key = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(key);
        createRipple(e);
      });
    });
  };

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
  };

  render('todos');
}