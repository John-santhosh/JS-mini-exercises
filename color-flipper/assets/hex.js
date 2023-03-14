let button = document.querySelector("#buttonMain");
let background = document.querySelector(".displayColor");
let currentColor = document.querySelector(".currentColor");

button.addEventListener("click", createHexColor);

function createHexColor() {
  let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += random[randomHex()];
  }
  background.style.backgroundColor = hexCode;
  currentColor.textContent = hexCode;
}

function randomHex() {
  return Math.floor(Math.random() * 16);
}
