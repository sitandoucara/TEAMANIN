//navbar

const navLinks = document.querySelector(".nav_links");
const menuHamburger = document.querySelector(".menu_burger");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile_menu");
});
