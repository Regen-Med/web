const copyright = document.getElementById('copyright');
if (copyright) copyright.textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu');
const navigation = document.getElementById('menu-principal');
const matrices = document.querySelector('.nav-matrices');
if (toggle && navigation) {
  function setMenu(open) {
    navigation.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    toggle.textContent = open ? '×' : '☰';
    if (!open && matrices) matrices.open = false;
  }
  toggle.addEventListener('click', () => setMenu(!navigation.classList.contains('open')));
  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && matrices?.open) {
      matrices.open = false;
      matrices.querySelector('summary').focus();
    } else if (event.key === 'Escape' && navigation.classList.contains('open')) {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (matrices && !matrices.contains(event.target)) matrices.open = false;
    if (!navigation.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
  });
  window.matchMedia('(max-width: 900px)').addEventListener('change', () => setMenu(false));
}
