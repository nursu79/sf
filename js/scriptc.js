// Select elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeButton = document.getElementById('close-button');

// Show the navigation menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navMenu.classList.add('active'); // Add class to show the menu
});

// Hide the navigation menu when the close button is clicked
closeButton.addEventListener('click', () => {
    navMenu.classList.remove('active'); // Remove class to hide the menu
});

// Optional: Hide the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove('active'); // Hide the menu if clicked outside
    }
});