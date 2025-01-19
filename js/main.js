//variables

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

window.addEventListener("scroll", changeOnScroll);
