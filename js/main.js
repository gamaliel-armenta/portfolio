import { initTheme } from './modules/theme.js';
import { initTabs } from './modules/tabs.js';
import { initModal } from './modules/modal.js';
import { initLightbox } from './modules/lightbox.js';
import { initScrollAnimations } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTabs();
  initModal();
  initLightbox();
  initScrollAnimations();
});