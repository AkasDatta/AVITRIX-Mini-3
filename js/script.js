const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbarDefault = document.getElementById('navbar-default');

toggleButton.addEventListener('click', () => {
  navbarDefault.classList.toggle('hidden');
});
