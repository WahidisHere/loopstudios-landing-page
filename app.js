'use-strict';
// Element Selection
const navbar = document.querySelector('.navbar');
const navbarBtn = document.querySelector('.hamburger-icon');
// Event Listener
navbarBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
  if (navbar.classList.contains('show')) {
    navbarBtn.src = 'images/icon-close.svg';
  } else {
    navbarBtn.src = 'images/icon-hamburger.svg';
  }
});
