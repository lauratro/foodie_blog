//Mobile menu
let scrollDownMenu = () => {
  let hamburger = document.querySelector(".hamburger");
  let mobileMenu = document.querySelector(".mobile-menu");
  let links = document.querySelectorAll(".menu-list-mobile li");
  let icons = document.querySelectorAll(".menu-list-mobile i");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    links.forEach((x) => {
      x.classList.toggle("end");
    });
    icons.forEach((y) => {
      y.classList.toggle("iconEnd");
    });
  });
};
scrollDownMenu();
