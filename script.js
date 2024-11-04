const menuButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".header__navigation-close");
const navigationMenu = document.querySelector(".header__navigation");

menuButton.addEventListener("click", () => {
    navigationMenu.classList.add("overlay");
});

closeButton.addEventListener("click", () => {
    navigationMenu.classList.remove("overlay");
});