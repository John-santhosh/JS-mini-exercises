window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});

let switchBtn = document.querySelector(".switch-btn");
let video = document.querySelector(".video-container");
switchBtn.addEventListener("click", () => {
  // switchBtn.classList.toggle("toggle-btn");
  // video.pause();
  if (switchBtn.classList.contains("toggle-btn")) {
    switchBtn.classList.remove("toggle-btn");
    video.play();
  } else {
    switchBtn.classList.add("toggle-btn");
    video.pause();
  }
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");
  loader.classList.add("hide-loader");
});
