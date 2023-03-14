let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let count = document.querySelector(".count");

let result = 0;

//decreasing counter by 1
decrease.addEventListener("click", () => {
  result -= 1;
  count.textContent = result;
  color();
});

// reset to default
reset.addEventListener("click", () => {
  result = 0;
  count.textContent = result;
  color();
});

// increasing counter by 1
increase.addEventListener("click", () => {
  result += 1;
  count.textContent = result;
  color();
});

// checking for indication color
function color() {
  result < 0 ? (count.style.color = "red") : (count.style.color = "green");
  if (result == 0) count.style.color = "initial";
}

// setting current year
window.addEventListener("load", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});
