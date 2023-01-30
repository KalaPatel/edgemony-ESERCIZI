const BASE_URL = "https://api.themoviedb.org/3/";

const API_KEY = "?api_key=3952ada8611fe5cc504d6b498fdac98d";

//api.themoviedb.org/3/search/tv?api_key=3952ada8611fe5cc504d6b498fdac98d&query=Arcane

const GET = async (endpoint, query = "") => {
  const res = await fetch(BASE_URL + endpoint + API_KEY + query);
  const data = await res.json();
  return data;
};
export { GET };
