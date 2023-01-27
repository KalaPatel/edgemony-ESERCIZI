const cE = (type) => document.createElement(type);
const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);

const movieCardGen = (data) => {
  const wrapperImgCard = cE("div");
  const movieImgEl = cE("img");

  movieImgEl.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path;
  movieImgEl.setAttribute = ("alt", data.name);
  wrapperImgCard.className = "img_container";

  wrapperImgCard.appendChild(movieImgEl);
  return wrapperImgCard;
};

export { cE, qS, movieCardGen };
