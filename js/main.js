// MENU MOBILE

const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const headerMenu = document.querySelector(".header-menu");
const menuItems = document.querySelectorAll(".header-menu li");

mobileMenuContainer.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("active");
  });
});

