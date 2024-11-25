document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");

  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
