import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

const TMDB_KEY = import.meta.env.VITE_API_KEY;
const options = {
  headers: {
    Authorization: "Bearer " + TMDB_KEY,
  },
};

export const getTrendingMovies = async () => {
  const url = `${baseUrl}/trending/movie/day?include_adult=false&language=en-US&page=1`;
  const response = await axios(url, options);
  const data = await response.data.results;

  return data;
};
