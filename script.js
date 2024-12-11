// scripts.js
// Get the dropdown button and content
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle dropdown visibility
dropdownButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from propagating
    dropdownContent.classList.toggle('show');
});

// Close dropdown if clicking outside
document.addEventListener('click', (event) => {
    if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownContent.classList.remove('show');
    }
});
