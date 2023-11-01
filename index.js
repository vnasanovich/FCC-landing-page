const body = document.body;
const links = document.querySelectorAll(".nav-link");
const navbar = document.querySelector("#nav-bar");
const burger = document.querySelector(".burger");

burger.addEventListener("click", menuToggler);

function menuToggler(event) {
  navbar.classList.toggle("active");
  burger.classList.toggle("active");
  body.classList.toggle("lock");
}

body.addEventListener("click", (event) => {
  if (!event.target.closest(".menu")) {
    burger.classList.remove("active");
    navbar.classList.remove("active");
    body.classList.remove("lock");
  }
});

navbar.addEventListener("click", (event) => {
  if (event.target.closest(".nav-link")) {
    navbar.classList.remove("active");
    body.classList.remove("lock");
    burger.classList.remove("active");
  }
});
