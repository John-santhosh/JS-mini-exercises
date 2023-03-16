window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "assets/images/item-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "assets/images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "assets/images/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "assets/images/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "assets/images/item-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "assets/images/item-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "assets/images/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "assets/images/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "assets/images/item-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "assets/images/item-10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// creating each items dynamically from menu array
let parent = document.querySelector(".menu");
window.addEventListener("DOMContentLoaded", () => {
  createElements(menu);
});
function createElements(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return `<article class="menu-item flex">
          <img src="${item.img}"  class="photo" />
          <div class="item-info">
            <header class="flex">
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  parent.innerHTML = displayMenu.join("");
}

// dynamically creating filter buttons
window.addEventListener("DOMContentLoaded", displayButtons);
function displayButtons() {
  let buttonContainer = document.querySelector(".btn-container");
  // method 1
  let cat = menu.reduce(
    function (acc, cur) {
      if (!acc.includes(cur.category)) {
        acc.push(cur.category);
      }
      return acc;
    },
    ["all"]
  );

  // method 2
  // let cat = menu.map((item) => item.category);
  // [...set] = new Set(cat);
  // let set = ["all", ...new Set(cat)];
  // console.log(set);

  const category = cat
    .map((item) => {
      return `<button class="filter-btn" type="button" data-id="${item}">${item}</button>`;
    })
    .join("");
  buttonContainer.innerHTML = category;

  // adding events to the filter buttons
  let filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      let menuCategory = menu.filter((menuItem) => {
        return menuItem.category == category;
      });
      if (category == "all") {
        createElements(menu);
      } else {
        createElements(menuCategory);
      }
    });
  });
}
