import { cE, qS, movieCardGen } from "./utils.js";
import { GET } from "./api.js";
const topratedSectionEl = qS(".top_rated");
const popularSectionEl = qS(".popularSeries");
const onAirSectionEl = qS(".onAirSeries");

Promise.all([
  GET("top_rated?api_key="),
  GET("popular?api_key="),
  GET("on_the_air?api_key="),
]).then((data) => {
  data[0].results.map((item) => topratedSectionEl.append(movieCardGen(item)));
  data[1].results.map((item) => popularSectionEl.append(movieCardGen(item)));
  data[2].results.map((item) => onAirSectionEl.append(movieCardGen(item)));
});
