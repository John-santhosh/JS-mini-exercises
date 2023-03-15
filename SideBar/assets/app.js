let crossBtn = document.querySelector(".fa-times");
let menuBtn = document.querySelector(".menu-icon");
let nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("un-hide");
});

crossBtn.addEventListener("click", () => {
  nav.classList.toggle("un-hide");
});

window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear(".menu-icon");
});
