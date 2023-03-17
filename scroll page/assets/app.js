window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});

const linkContainer = document.querySelector(".link-container");
const navToggle = document.querySelector(".nav-toggle");
const link = document.querySelector(".links");

// menu bar actions
navToggle.addEventListener("click", () => {
  // linkContainer.classList.toggle("un-hide");
  const containerHeight = linkContainer.getBoundingClientRect().height;

  const linkHeight = link.getBoundingClientRect().height;

  if (containerHeight == 0) {
    linkContainer.style.height = `${linkHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});

// making the nav position fixed dynamically while listening to the window scroll event
const navBar = document.querySelector("nav");
const homeLink = document.querySelector(".back-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed-nav");
    homeLink.classList.add("un-hide");
  } else {
    navBar.classList.remove("fixed-nav");
    homeLink.classList.remove("un-hide");
  }
});

// navigation to the section using scrollTo property
const navBtns = document.querySelectorAll(".scroll-link");
navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const contHeight = linkContainer.getBoundingClientRect().height;
    e.preventDefault();

    // console.log(navHeight);
    let position = element.offsetTop - navHeight;
    // console.log(position);
    // console.log(position - navHeight);
    // if (!navBar.classList.contains("fixed-nav")) {
    //   position = position - navHeight;
    // }
    scrollTo({ top: position, left: 0 });
    linkContainer.style.height = 0;
  });
});
