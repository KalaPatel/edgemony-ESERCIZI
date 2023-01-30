const cE = (type) => document.createElement(type);
const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);

const movieCardGen = (data) => {
  const wrapperImgCard = cE("div");
  const movieImgEl = cE("img");

  wrapperImgCard.setAttribute("id", data.id);
  movieImgEl.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path;
  movieImgEl.setAttribute = ("alt", data.name);
  wrapperImgCard.className = "img_container";

  wrapperImgCard.appendChild(movieImgEl);
  return wrapperImgCard;
};

const modalGen = (data) => {
  const modalEl = cE("div");
  const imgEl = cE("img");
  const wrapperTextEl = cE("div");
  const titleEl = cE("h2");
  const overviewEl = cE("p");
  const releaseDateEl = cE("p");
  const voteAverageEl = cE("p");

  modalEl.className = "movie-modal";
  imgEl.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path;
  imgEl.alt = data.name;
  titleEl.textContent = data.original_name;
  overviewEl.textContent = data.overview;
  releaseDateEl.textContent = data.first_air_date;
  voteAverageEl.textContent = data.vote_average;

  wrapperTextEl.append(titleEl, overviewEl, releaseDateEl, voteAverageEl);
  modalEl.append(imgEl, wrapperTextEl);
  return modalEl;
};

const searchedShowCard = (data) => {
  const cardResultContainer = cE("div");
  cardResultContainer.className = "boxCard";

  const imgEl = cE("img");
  imgEl.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path;
  imgEl.alt = data.name;
  const showInfoContainer = cE("div");
  showInfoContainer.className = "showInfo";

  const infoEl = cE("div");
  const showDescription = cE("p");
  showDescription.textContent = data.overview;
  const voteAverageEl = cE("p");
  voteAverageEl.textContent = "Vote Average: " + data.vote_average;

  const showTitle = cE("h2");
  showTitle.textContent = data.original_name;
  const releaseDateEl = cE("p");
  releaseDateEl.textContent = data.first_air_date;

  infoEl.append(showTitle, releaseDateEl);
  showInfoContainer.append(infoEl, showDescription, voteAverageEl);
  cardResultContainer.append(imgEl, showInfoContainer);
  return cardResultContainer;
};

const deleteCard = (element) => {
  const cardEls = document.querySelectorAll(element);
  cardEls.forEach((card) => card.remove());
};

export { cE, qS, qSA, movieCardGen, modalGen, searchedShowCard, deleteCard };
