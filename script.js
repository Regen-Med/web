// Navegacao principal e menus acessiveis no desktop e dispositivos moveis.
const copyright = document.getElementById('copyright');
if (copyright) copyright.textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu');
const navigation = document.getElementById('menu-principal');
const dropdowns = navigation ? Array.from(navigation.querySelectorAll('details')) : [];

function closeDropdowns(except = null) {
  dropdowns.forEach(menu => { if (menu !== except) menu.open = false; });
}
dropdowns.forEach(menu => {
  menu.addEventListener('toggle', () => {
    if (menu.open) closeDropdowns(menu);
  });
});
if (toggle && navigation) {
  function setMenu(open) {
    navigation.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    toggle.textContent = open ? '×' : '☰';
    if (!open) closeDropdowns();
  }
  toggle.addEventListener('click', () => setMenu(!navigation.classList.contains('open')));
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const expandedDropdown = dropdowns.find(menu => menu.open);
    if (expandedDropdown) {
      expandedDropdown.open = false;
      expandedDropdown.querySelector('summary').focus();
    } else if (navigation.classList.contains('open')) {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
    else if (!dropdowns.some(menu => menu.contains(event.target))) closeDropdowns();
  });
  const media = window.matchMedia('(max-width: 900px)');
  if (typeof media.addEventListener === 'function') media.addEventListener('change', () => setMenu(false));
}
