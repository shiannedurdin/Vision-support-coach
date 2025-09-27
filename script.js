// Font size controls: increase up to 48px, decrease to at least 16px, reset to 20px.
(function(){
  const status = document.getElementById('fontStatus');
  function getSize(){ return parseFloat(getComputedStyle(document.body).fontSize); }
  function setSize(px){
    const clamped = Math.max(16, Math.min(48, px));
    document.body.style.fontSize = clamped + 'px';
    if (status) status.textContent = 'Text size is now ' + clamped + ' pixels';
  }
  document.getElementById('fontInc')?.addEventListener('click', () => setSize(getSize() + 4));
  document.getElementById('fontDec')?.addEventListener('click', () => setSize(getSize() - 4));
  document.getElementById('fontReset')?.addEventListener('click', () => setSize(20));

  // Update footer year
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
