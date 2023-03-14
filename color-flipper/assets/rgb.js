let button = document.querySelector("#buttonMain");
let background = document.querySelector(".displayColor");
let currentColor = document.querySelector(".currentColor");

button.addEventListener("click", createRGBColor);

function createRGBColor() {
  let randomColor = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
  currentColor.textContent = randomColor;
  background.style.backgroundColor = randomColor;
}

function randomRgb() {
  return Math.round(Math.random() * 255);
}
