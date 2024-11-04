const menuButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".header__navigation-close");
const navigationMenu = document.querySelector(".header__navigation");
const overlayBlur = document.querySelector(".overlay__blur");

menuButton.addEventListener("click", () => {
    navigationMenu.classList.add("overlay");
    overlayBlur.classList.add("active");
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
    navigationMenu.classList.remove("overlay");
    overlayBlur.classList.remove("active");
    document.body.style.overflow = "";
});

overlayBlur.addEventListener("click", () => {
    navigationMenu.classList.remove("overlay");
    overlayBlur.classList.remove("active");
    document.activeElement.style.overflow = "";
});

