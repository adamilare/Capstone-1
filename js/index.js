function mobileMenuClicked() {
  const menu = document.getElementById('mobile-menu-icon');
  menu.classList.toggle('fa-bars');
  menu.classList.toggle('fa-cancel');
  document.getElementById('nav-wrapper').toggleAttribute('hidden');
}

document
  .querySelector('#mobile-menu-icon')
  .addEventListener('click', mobileMenuClicked);

document.querySelectorAll('#mobile-menu-items li').forEach((item) => {
  item.addEventListener('click', mobileMenuClicked);
});
