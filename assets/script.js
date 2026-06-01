// Mobile menu
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
}

// Scroll-aware header on the home hero
const header = document.getElementById('siteHeader');
if (header && header.classList.contains('on-hero')) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = document.getElementById('lbImg');
  const close = lightbox.querySelector('.lb-close');
  document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', e => {
      e.preventDefault();
      lbImg.src = tile.getAttribute('href');
      lightbox.classList.add('open');
    });
  });
  const hide = () => { lightbox.classList.remove('open'); lbImg.src = ''; };
  close.addEventListener('click', hide);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) hide(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
}
