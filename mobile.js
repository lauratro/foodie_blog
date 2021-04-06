//Mobile menu
let scrollDownMenu = () => {
  let hamburger = document.querySelector(".hamburger");
  let mobileMenu = document.querySelector(".mobile-menu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
};
scrollDownMenu();
