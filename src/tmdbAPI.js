import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_OPTIONS = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJINmY5YzA3MTE2ODRjMDM2ZmI3NGFlODg4ZmNiOTcyZSIsIm5iZiI6MTc0ODE3Njk1OC42NzIsInN1YiI6IjY4MzMxMDNlYjU0OWYwZDI3ZGE4Njg0YjIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5VcQ-dgsGUfPelzC9u3sj0lAO8tDyAOtir1Oe_dnak',
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, API_OPTIONS);
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axios.get(`${BASE_URL}/search/movie?query=${query}`, API_OPTIONS);
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, API_OPTIONS);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, API_OPTIONS);
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, API_OPTIONS);
  return response.data.results;
};
