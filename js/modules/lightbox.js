export function initLightbox() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('imgDentroDelModal');
  const closeSpan = document.querySelector('.image-modal-close');

  if (!modal || !modalImg) return;

  // Delegación de eventos para imágenes con clase 'zoomable'
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

  // Exponer funciones globales para uso en HTML (por si se necesita onclick)
  window.openImageModal = openImageModal;
  window.closeImageModal = closeImageModal;
}