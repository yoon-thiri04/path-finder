document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    // Toggle the 'active' class on click
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
