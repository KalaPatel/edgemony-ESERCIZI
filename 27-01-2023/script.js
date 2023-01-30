import {
  cE,
  qS,
  qSA,
  movieCardGen,
  modalGen,
  searchedShowCard,
  deleteCard,
} from "./utils.js";
import { GET } from "./api.js";
const topratedSectionEl = qS(".top_rated");
const popularSectionEl = qS(".popularSeries");
const onAirSectionEl = qS(".onAirSeries");

const modalEl = qS(".modal");
const modalOverlay = qS(".overlay");

const searchBarEl = qS("#searchTitle");

const searchResultSection = qS(".cardSearched");

Promise.all([GET("tv/top_rated"), GET("tv/on_the_air"), GET("tv/popular")])
  .then((data) => {
    data[0].results.map((item) => topratedSectionEl.append(movieCardGen(item)));
    data[1].results.map((item) => popularSectionEl.append(movieCardGen(item)));
    data[2].results.map((item) => onAirSectionEl.append(movieCardGen(item)));
  })
  .then(() => {
    const posterContainerEls = qSA(".img_container");
    posterContainerEls.forEach((movie) =>
      GET("tv/" + movie.id).then((selectedMovie) =>
        movie.addEventListener("click", () => {
          modalEl.appendChild(modalGen(selectedMovie));
          modalEl.style.display = "flex";
        })
      )
    );
  });

modalOverlay.addEventListener("click", () => {
  const modalMovieEl = qS(".movie-modal");

  modalEl.style.display = "none";
  modalMovieEl.remove();
});

searchBarEl.addEventListener("submit", (event) => {
  {
    event.preventDefault();
    deleteCard(".wrapperMovieSections");
    // console.log(event.target[0].value);
    GET("search/tv", "&query=" + event.target[0].value).then((data) => {
      deleteCard(".boxCard");
      data.results.map((item) =>
        searchResultSection.appendChild(searchedShowCard(item))
      );
    });
  }
});
