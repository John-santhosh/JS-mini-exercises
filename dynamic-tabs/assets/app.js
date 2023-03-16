const about = document.querySelector(".about");
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove .active from other buttons and add .active to the button which is clicked
    buttons.forEach((button) => {
      button.classList.remove("active");
      e.target.classList.add("active");
    });
    // displaying the content based on the buttons which the user is clicked and hide other contents
    contents.forEach((content) => {
      content.classList.remove("active");
      if (content.id == id) {
        content.classList.add("active");
      }
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});
