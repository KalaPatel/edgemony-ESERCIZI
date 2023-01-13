import { cE, qS } from "./utils.js";
const createCarousel = () => {
  const bodyEl = document.body;
  const carousEl = cE("div");
  carousEl.className = "carousel";

  const imgEl = cE("img");
  imgEl.setAttribute("src", "./img/img2.jpg");
  imgEl.className = "carousel__img";

  const switcherEl = cE("div");
  switcherEl.className = "switcher";

  const leftSwitcherEl = cE("div");
  leftSwitcherEl.className = "left_circle";

  const centerSwitcherEl = cE("div");
  centerSwitcherEl.className = "center_circle";

  const rightSwitcherEl = cE("div");
  rightSwitcherEl.className = "right_circle";

  switcherEl.append(leftSwitcherEl, centerSwitcherEl, rightSwitcherEl);
  carousEl.append(imgEl, switcherEl);
  bodyEl.appendChild(carousEl);

  leftSwitcherEl.addEventListener("click", () => {
    imgEl.setAttribute("src", "./img/img.jpg");
    leftSwitcherEl.style.backgroundColor = "rgb(201, 148, 36)";
    centerSwitcherEl.style.backgroundColor = "rgba(249, 240, 222, 0.878)";
    rightSwitcherEl.style.backgroundColor = "rgba(249, 240, 222, 0.878)";
  });

  centerSwitcherEl.addEventListener("click", () => {
    imgEl.setAttribute("src", "./img/img2.jpg");
    centerSwitcherEl.style.backgroundColor = "rgb(201, 148, 36)";
    leftSwitcherEl.style.backgroundColor = "rgba(249, 240, 222, 0.878)";
    rightSwitcherEl.style.backgroundColor = "rgba(249, 240, 222, 0.878)";
  });

  rightSwitcherEl.addEventListener("click", () => {
    imgEl.setAttribute("src", "./img/img3.jpg");
    rightSwitcherEl.style.backgroundColor = "rgb(201, 148, 36)";
    centerSwitcherEl.style.backgroundColor = "rgba(249, 240, 222, 0.878)";
    leftSwitcherEl.style.backgroundColor = "rgba(249, 240, 222, 0.878)";
  });
};

createCarousel();
