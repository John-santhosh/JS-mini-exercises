let content = [
  {
    img: "img-15.png",
    heading: "rock paper scissor",
    git: "https://github.com/John-santhosh/Rock-paper-scissor-game-",
    live: "https://rock-paper-secssir-game.netlify.app/",
  },
  {
    img: "img-1.png",
    heading: "color flipper",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/color-flipper",
    live: "color-flipper/index.html",
  },
  {
    img: "img-2.png",
    heading: "slider",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/slider",
    live: "slider/index.html",
  },
  {
    img: "img-3.png",
    heading: "video project",
    git: "",
    live: "vido project with preloader/index.html",
  },
  {
    img: "img-4.png",
    heading: "side navBar",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/vido%20project%20with%20preloader",
    live: "SideBar/index.html",
  },
  {
    img: "img-5.png",
    heading: "Scroll Page",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/scroll%20page",
    live: "scroll page/index.html",
  },
  {
    img: "img-6.png",
    heading: "responsive navbar",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/responsive%20nav-bar",
    live: "responsive nav-bar/index.html",
  },
  {
    img: "img-7.png",
    heading: "question section",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/Question%20dropdown",
    live: "Question dropdown/index.html",
  },
  {
    img: "img-8.png",
    heading: "paragraph generator",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/paragraph-generator",
    live: "paragraph-generator/index.html",
  },
  {
    img: "img-9.png",
    heading: "modal",
    git: "",
    live: "modal/index.html",
  },
  {
    img: "img-10.png",
    heading: "menu Page",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/modal",
    live: "menu list page/index.html",
  },
  {
    img: "img-11.png",
    heading: "counter",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/counter",
    live: "counter/index.html",
  },
  {
    img: "img-12.png",
    heading: "dynamic tabs",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/dynamic-tabs",
    live: "dynamic-tabs/index.html",
  },
  {
    img: "img-13.png",
    heading: "countdown timer",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/countdow-timer",
    live: "countdow-timer/index.html",
  },
  {
    img: "img-14.png",
    heading: "review section",
    git: "https://github.com/John-santhosh/JS-mini-exercises/tree/main/3%20reviews%20with%20buttons",
    live: "3 reviews with buttons/index.html",
  },
];

const parent = document.querySelector(".parent");
let result = content
  .map(function (item) {
    // console.log(item.);

    return ` <!-- start of single card 1-->
          <div class="col-xl-4 col-lg-6 mb-md-4">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top object-fit-cover"
                width="100%"
                height="225"
                src="assets/${item.img}"
                alt="image of the project"
              />
              <div class="card-body">
                <h4 class="card-text text-center">${item.heading}</h4>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group w-75 m-auto my-3">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary w-50 d-flex justify-content-evenly align-items-center p-2"
                    >
                      <img src="assets/giphy.gif" alt="visit code of the project" class="w-25" />
                      <a
                        class="text-decoration-none text-black fs-5"
                        href="${item.git}"
                        >Git</a
                      >
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary w-50 d-flex align-items-center justify-content-evenly p-2"
                    >
                      <img src="assets/netlify-48.png" alt="visit live site" class="w-25" />
                      <a
                        href="${item.live}"
                        class="text-decoration-none text-black fs-5"
                        >Live</a
                      >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of single card  -->`;
  }).join('')

parent.innerHTML = result;