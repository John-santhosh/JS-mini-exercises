let modelToggleBtn = document.querySelector(".modal-btn");
let model = document.querySelector(".model");
let hideBtn = document.querySelector(".close-model");

// open modal button action
hideBtn.addEventListener("click", () => {
  model.classList.remove("un-hide");
});

// close modal button action
modelToggleBtn.addEventListener("click", () => {
  model.classList.add("un-hide");
});

// footer year
window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});
