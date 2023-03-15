let expandBtns = document.querySelectorAll(".question-expand");
// let question = document.querySelector(".question-text");
// let minusIcon = document.querySelector(".minus-icon");
// let plusIcon = document.querySelector(".plus-icon");

expandBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    // targeting .question-text
    let question = e.currentTarget.parentElement.nextElementSibling;

    question.classList.toggle("unhide-text");
    // when clicking + the .hide-icon class applied and it got the +icon hide and make the - icon display: inline.
    // e.currentTarget will refer the button from that we are traversing to the each child

    // targeting .plus-icon
    e.currentTarget.firstElementChild.classList.toggle("hide-icon");
    // targeting .minus-icon
    e.currentTarget.lastElementChild.classList.toggle("unhide-icon");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});
