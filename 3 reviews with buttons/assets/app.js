// local reviews data
const reviews = [
  {
    id: 1,
    name: "Jacob",
    job: "web developer",
    img: "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Jack sparrow",
    job: "web designer",
    img: "https://images.pexels.com/photos/14872121/pexels-photo-14872121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "davy jones",
    job: "intern",
    img: "https://cdn.pixabay.com/photo/2022/11/03/12/05/pirate-davy-jones-7567345_960_720.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Thor Odinson",
    job: "the boss",
    img: "https://images.unsplash.com/photo-1579445710183-f9a816f5da05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGhvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let backBtn = document.getElementById("backward");
let forwardBtn = document.getElementById("forward");
let randomBtn = document.querySelector(".random-btn");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");
let personImg = document.getElementById("person-img");

// first item
let current = 0;

// setting initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

// forward button action
forwardBtn.addEventListener("click", () => {
  if (current > reviews.length - 1) current = 0;
  showPerson();
  current += 1;
});

// backward button action
backBtn.addEventListener("click", () => {
  if (current == 0) current = 3;
  showPerson();
  current -= 1;
});

// random review
randomBtn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * reviews.length);
  current = random;
  showPerson();
});

// setting current year and changing change reviews for every 3s
window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
  setInterval(() => {
    if (current > reviews.length - 1) current = 0;
    showPerson();
    current++;
  }, 3000);
});

// accessing every person based on the current var
function showPerson() {
  author.textContent = reviews[current].name;
  job.textContent = reviews[current].job;
  info.textContent = reviews[current].text;
  personImg.setAttribute("src", reviews[current].img);
}
