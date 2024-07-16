
// Header Section

const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
     header.classList.toggle("sticky", this.window.scrollY > 0);
});

// Mobile Menu Section

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function() {
     menu.classList.toggle("fa-xmark");
     navbar.classList.toggle("open");
});