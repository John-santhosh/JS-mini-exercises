window.addEventListener("load", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});

let backBtn = document.getElementById("backward");
let forwardBtn = document.getElementById("forward");
let randomBtn = document.querySelector(".random-btn");
