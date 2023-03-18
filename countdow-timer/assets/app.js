window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 2, 27, 12, 00, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const weekday = months[futureDate.getDay()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
giveaway.innerHTML = `<h4>giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hour}:${minutes}am</h4>`;

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date();
  const just = futureTime - today;
  // console.log(futureTime, today);
  // values in ms
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;

  // futureDate in ms  - current date in ms
  let days = just / oneDay;
  days = Math.floor(days);
  // hours left
  let hours = Math.floor((just % oneDay) / oneHour);
  // minutes left
  let minutes = Math.floor((just % oneHour) / oneMinute);
  // seconds left
  let seconds = Math.floor((just % oneMinute) / 1000);
  // console.log(futureDate.getHours() - today.getHours());
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (just < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4>sorry, this giveaway has expired</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
