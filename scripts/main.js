const openMenu = document.querySelector(".open__menu__btn");
const closeMenu = document.querySelector(".close__menu__btn");
const navbar = document.querySelector(".header__navbar");

openMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("active");
});
