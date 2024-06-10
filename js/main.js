// MENU MOBILE

const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const headerMenu = document.querySelector(".header-menu");

mobileMenuContainer.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});