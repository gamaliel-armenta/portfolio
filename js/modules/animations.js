export function initScrollAnimations() {
  // Registrar plugin de ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Seleccionar todos los elementos que deben aparecer al hacer scroll
  const reveals = document.querySelectorAll('.reveal');
  
  if (reveals.length === 0) return;

  reveals.forEach(el => {
    // Si el elemento ya es visible por algún motivo, forzamos opacidad 1
    gsap.set(el, { opacity: 0, y: 30 });
    
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          overwrite: true
        });
      },
      once: true, // solo una vez
      // Si por algún error no se dispara, mostramos el elemento igual
      onEnterBack: () => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.5 });
      }
    });
  });

  // También forzamos visibilidad después de 1 segundo por si ScrollTrigger falla
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      if (window.getComputedStyle(el).opacity === '0') {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }, 1000);

  // Animación de blobs (sutil, no afecta contenido)
  gsap.to('.blob-1', {
    x: 30, y: 30, duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut"
  });
  gsap.to('.blob-2', {
    x: -40, y: 20, duration: 18, repeat: -1, yoyo: true, ease: "sine.inOut"
  });
}