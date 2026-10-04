window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  if (!intro) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Une seule animation d'introduction par session
  if (sessionStorage.getItem('introSeen') === 'true') {
    intro.classList.add('hidden');
    return;
  }

  // Respect de la préférence de réduction des animations
  if (reduce) {
    intro.classList.add('hidden');
    sessionStorage.setItem('introSeen', 'true');
    return;
  }

  // Première arrivée dans la session : jouer l'introduction
  sessionStorage.setItem('introSeen', 'true');

  window.setTimeout(() => {
    intro.classList.add('hidden');
  }, 4600);
});
