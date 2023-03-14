window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});

let hamBtn = document.querySelector(".ham-menu");
let links = document.querySelector(".links");
hamBtn.addEventListener("click", () => {
  links.classList.toggle("links-active");
  hamBtn.classList.toggle("rotate");
});
