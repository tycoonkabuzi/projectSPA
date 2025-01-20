//variables
const theBody = document.querySelector("body");
const navBar = document.querySelector(".nav");
const humbergerMenu = document.querySelector(".nav-humberger");

const forms = document.querySelectorAll("form");

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
  }
}
// function form handler

function formHandler(e) {
  e.preventDefault();
  const form = e.target;
  console.log(form);
  const nameInput = form.querySelector("#name");
  const emailInput = form.querySelector("#email");
  const optionsInput = form.querySelector("#options");
  const numberInput = form.querySelector("#number");
  const dateInput = form.querySelector("#date");
  const timeInput = form.querySelector("#time");
  const notesInput = form.querySelector("#notes");

  const hasNumber = /\d/;
  switch (true) {
    //names
    case nameInput.value === "":
      alert("Name field is empty you must provide a name");
      break;
    case hasNumber.test(nameInput.value):
      alert("Your name should not contain numbers");
      break;
    //email
    case emailInput.value === "":
      alert("Email field is empty you must provide a email");
      break;

    case !emailInput.value.includes("@"):
      alert("Email field should contain @");
      break;

    case optionsInput.value === "option1":
      alert("Invalid option");
      break;
    case dateInput.value === "":
      alert("A date must be provided ");
      break;
    case timeInput.value === "":
      alert("A time must be provided");
      break;
    case numberInput.value === "":
      alert("Please provide your phone number");
      break;
    case notesInput.value === "":
      alert("This is empty");
      break;
    default:
      alert("Form Submitted");
  }
}
// Event listeners
window.addEventListener("scroll", changeOnScroll);
humbergerMenu.addEventListener("click", displayMobileMenu);
document.addEventListener("click", bodyBackgroundChangeOnClick);
forms.forEach((element) => {
  element.addEventListener("submit", formHandler);
});
