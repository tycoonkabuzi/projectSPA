//variables
const theBody = document.querySelector("body");
const navBar = document.querySelector(".nav");
const humbergerMenu = document.querySelector(".nav-humberger");

// functions
// function to change the background of the nav and the humberger menu on scroll
function changeOnScroll() {
  if (scrollY > 100) {
    navBar.classList.add("fixed-nav");
    humbergerMenu.classList.add("white-humberger");
  } else {
    navBar.classList.remove("fixed-nav");
    humbergerMenu.classList.remove("white-humberger");
  }
}
// function to display the mobile display menu
function displayMobileMenu() {
  navBar.classList.toggle("mobile-nav");
  humbergerMenu.classList.toggle("humberger-on-click");
  humbergerMenu.firstElementChild.classList.toggle("rotate-left");
  humbergerMenu.lastElementChild.classList.toggle("rotate-right");
  humbergerMenu.lastElementChild.previousElementSibling.classList.toggle(
    "hide-span"
  );
  theBody.classList.toggle("top-background");
}
// function to change the background color whenever I click on the outside of a nav.
function bodyBackgroundChangeOnClick(event) {
  if (
    !navBar.contains(event.target) &&
    window.innerWidth <= 768 &&
    navBar.classList.contains("mobile-nav")
  ) {
    displayMobileMenu();
    console.log();
  }
}

window.addEventListener("scroll", changeOnScroll);
humbergerMenu.addEventListener("click", displayMobileMenu);
document.addEventListener("click", bodyBackgroundChangeOnClick);
