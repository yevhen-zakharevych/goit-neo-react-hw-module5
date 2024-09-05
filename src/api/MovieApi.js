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

export const getMovieById = async (movieId) => {
  const url = `${baseUrl}/movie/${movieId}?language=en-US`;
  const response = await axios(url, options);
  const data = await response.data;

  return data;
};

export const getMovieCast = async (movieId) => {
  const url = `${baseUrl}/movie/${movieId}/credits?language=en-US`;
  const response = await axios(url, options);
  const data = await response.data.cast;

  return data;
};

export const getMovieReviews = async (movieId) => {
  const url = `${baseUrl}/movie/${movieId}/reviews?language=en-US`;
  const response = await axios(url, options);
  const data = await response.data.results;

  return data;
};

export const getMovieByName = async (movieName) => {
  const url = `${baseUrl}/search/movie?query=${movieName}&language=en-US&page=1`;
  const response = await axios(url, options);
  const data = await response.data.results;

  return data;
};
