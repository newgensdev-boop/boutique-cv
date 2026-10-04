window.addEventListener('DOMContentLoaded',()=>{
  const intro=document.getElementById('intro');
  if(!intro) return;
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){ intro.classList.add('hidden'); return; }
  window.setTimeout(()=>intro.classList.add('hidden'),4600);
});
