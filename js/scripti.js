const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeButton = document.getElementById('close-button');

hamburger.addEventListener('click', () => {
    navMenu.classList.add('active'); // Show the sidebar
});

closeButton.addEventListener('click', () => {
    navMenu.classList.remove('active'); // Hide the sidebar
});