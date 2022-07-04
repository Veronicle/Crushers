const bar = document.querySelector('#mobile-menu');
const barLinks = document.querySelector('.navBar__menu');

const displayMeny = () => {
    bar.classList.toggle('is-active');
    barLinks.classList.toggle('active');
};

BarProp.addEventListener('click', mobileMenu);
