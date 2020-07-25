import "./style/main.scss";
const $ = require("jquery");

const calendar = document.querySelector(".calendar_grid");
for (let i = 0; i < 31; i++) {
  let elem = document.createElement("div");
  elem.className = "calendar_grid__day";
  let day = document.createTextNode(`${i + 1}`);
  elem.appendChild(day);
  calendar.appendChild(elem);
}
