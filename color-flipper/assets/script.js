let button = document.querySelector("#buttonMain");
let background = document.querySelector(".displayColor");

button.addEventListener("click", () => {
  background.style.background = createColor();
});

function createColor() {
  background.style.background = "orange";
}

function random() {
  let random = Math.round(Math.random() * 255);
  return random;
}
