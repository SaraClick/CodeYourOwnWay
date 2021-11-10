const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('navbar-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});