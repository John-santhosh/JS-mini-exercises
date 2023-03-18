window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");

slides.forEach((item, index) => {
  console.log((item.style.left = `${index * 100}%`));
});

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

function carousel() {
  if (counter < 0) {
    counter = 3;
  } else if (counter > 3) {
    counter = 0;
  }
  // working with buttons
  if (counter == slides.length - 1) {
    console.log("john");
    nextBtn.style.visibility = "hidden";
  } else {
    nextBtn.style.visibility = "visible";
  }
  if (counter == 0) {
    prevBtn.style.visibility = "hidden";
  } else {
    prevBtn.style.visibility = "visible";
  }
  slides.forEach(function (item, index) {
    item.style.transform = `translateX(-${counter * 100}%)`;
  });
}
