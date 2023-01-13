const leftSwitcherEl = document.querySelector(".left_circle");
const centerSwitcherEl = document.querySelector(".center_circle");
const rightSwitcherEl = document.querySelector(".right_circle");

const imgEl = document.querySelector(".carousel__img");

leftSwitcherEl.addEventListener("click", () => {
  imgEl.setAttribute("src", "./img/img1.jpg");
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
