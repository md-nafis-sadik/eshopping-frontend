const menuHoverSpan = document.querySelector('#menu-hover');
const subMenu = document.querySelector('#submenu');

// Boolean to track the visibility of the menu
let isMenuVisible = false;

// Show the submenu when hovering over the menu hover span
menuHoverSpan.addEventListener('mouseover', () => {
    subMenu.classList.add('d-block');
    isMenuVisible = true;
});

// Hide the submenu when the mouse leaves the menu hover span
menuHoverSpan.addEventListener('mouseout', () => {
    // Add a small delay to check if the mouse is over the submenu
    setTimeout(() => {
        if (!subMenu.matches(':hover') && isMenuVisible) {
            subMenu.classList.remove('d-block');
            isMenuVisible = false;
        }
    }, 200); // Adjust delay as needed
});

// Also, hide the submenu when the mouse leaves the submenu
subMenu.addEventListener('mouseout', () => {
    setTimeout(() => {
        if (!menuHoverSpan.matches(':hover') && !subMenu.matches(':hover')) {
            subMenu.classList.remove('d-block');
            isMenuVisible = false;
        }
    }, 200); // Adjust delay as needed
});


$('.carousel').carousel({
    interval: 3000 // Change slide every 3 seconds
  });