// Import stylesheets
import './style.css';

const arrowProduct = document.getElementById('arrow-product');
const arrowCompany = document.getElementById('arrow-company');
const arrowConnect = document.getElementById('arrow-connect');

document.addEventListener('click', (e) => {
  const isDropdownButtonProduct = e.target.matches(
    '[data-dropdown-button-product]'
  );
  if (
    !isDropdownButtonProduct &&
    e.target.closest('[data-dropdown-product]') != null
  )
    return;
  let currentDropdownProduct;
  if (isDropdownButtonProduct) {
    currentDropdownProduct = e.target.closest('[data-dropdown-product]');
    currentDropdownProduct.classList.toggle('active');
    arrowProduct.classList.toggle('arrow-up');
  }

  const isDropdownButtonCompany = e.target.matches(
    '[data-dropdown-button-company]'
  );
  if (
    !isDropdownButtonCompany &&
    e.target.closest('[data-dropdown-company]') != null
  )
    return;
  let currentDropdownCompany;
  if (isDropdownButtonCompany) {
    currentDropdownCompany = e.target.closest('[data-dropdown-company]');
    currentDropdownCompany.classList.toggle('active');
    arrowCompany.classList.toggle('arrow-up');
  }

  const isDropdownButtonConnect = e.target.matches(
    '[data-dropdown-button-connect]'
  );
  if (
    !isDropdownButtonConnect &&
    e.target.closest('[data-dropdown-connect]') != null
  )
    return;
  let currentDropdownConnect;
  if (isDropdownButtonConnect) {
    currentDropdownConnect = e.target.closest('[data-dropdown-connect]');
    currentDropdownConnect.classList.toggle('active');
    arrowConnect.classList.toggle('arrow-up');
  }

  document
    .querySelectorAll('[data-dropdown-product].active')
    .forEach((dropdown) => {
      if (dropdown === currentDropdownProduct) return;
      dropdown.classList.remove('active');
      arrowProduct.classList.toggle('arrow-up');
    });

  document
    .querySelectorAll('[data-dropdown-company].active')
    .forEach((dropdown) => {
      if (dropdown === currentDropdownCompany) return;
      dropdown.classList.remove('active');
      arrowCompany.classList.toggle('arrow-up');
    });

  document
    .querySelectorAll('[data-dropdown-connect].active')
    .forEach((dropdown) => {
      if (dropdown === currentDropdownConnect) return;
      dropdown.classList.remove('active');
      arrowConnect.classList.toggle('arrow-up');
    });
});

// Hamburger Menu Function
const menuButton = document.getElementById('hamburger-menu-btn');
// const exitButton = document.getElementById('exit-btn');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
  nav.classList.add('open-nav');
});

// exitButton.addEventListener('click', () => {
//   nav.classList.remove('open-nav');
// });
