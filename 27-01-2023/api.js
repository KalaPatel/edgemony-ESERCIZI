const BASE_URL = "https://api.themoviedb.org/3/tv/";

const API_KEY = "3952ada8611fe5cc504d6b498fdac98d";

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint + API_KEY);
  const data = await res.json();
  return data;
};
export { GET };
