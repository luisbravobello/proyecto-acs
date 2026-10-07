// Navegación móvil y seguimiento de la sección que se está leyendo.
const barra = document.querySelector('.barra-navegacion');
const navegacion = barra.querySelector('nav');
const boton = document.querySelector('.menu-boton');
const menu = document.querySelector('#menu-principal');
const movil = matchMedia('(max-width: 900px)');
function abrirMenu(abierto) {
  boton.setAttribute('aria-expanded', String(abierto));
  boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  menu.classList.toggle('menu-abierto', abierto);
}
boton.addEventListener('click', () => abrirMenu(boton.getAttribute('aria-expanded') !== 'true'));
navegacion.addEventListener('click', evento => {
  const enlace = evento.target.closest('a');
  if (!enlace || !movil.matches) return;
  abrirMenu(false);
  const destino = document.querySelector(enlace.getAttribute('href'));
  destino.setAttribute('tabindex', '-1');
  destino.focus({preventScroll: true});
});
document.addEventListener('keydown', evento => {
  if (evento.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
    abrirMenu(false);
    boton.focus();
  }
});
for (const tipo of ['click', 'focusin']) {
  document.addEventListener(tipo, evento => {
    if (!navegacion.contains(evento.target)) abrirMenu(false);
  });
}
movil.addEventListener('change', () => {
  const foco = document.activeElement;
  abrirMenu(false);
  if (movil.matches && menu.contains(foco)) boton.focus();
  if (!movil.matches && foco === boton) menu.querySelector('a').focus();
});
navegacion.classList.add('menu-activo');
const enlaces = [...menu.querySelectorAll('a')];
const secciones = enlaces.map(enlace => document.querySelector(enlace.getAttribute('href')));
function marcarSeccion() {
  let actual = null;
  const limite = barra.getBoundingClientRect().height + 80;
  for (const seccion of secciones) {
    if (seccion.getBoundingClientRect().top <= limite) actual = seccion.id;
  }
  enlaces.forEach(enlace => {
    const activo = enlace.getAttribute('href') === '#' + actual;
    enlace.classList.toggle('enlace-activo', activo);
    if (activo) enlace.setAttribute('aria-current', 'location');
    else enlace.removeAttribute('aria-current');
  });
}
let pendiente = false;
window.addEventListener('scroll', () => {
  if (pendiente) return;
  pendiente = true;
  requestAnimationFrame(() => { marcarSeccion(); pendiente = false; });
}, {passive: true});
window.addEventListener('resize', marcarSeccion);
marcarSeccion();
