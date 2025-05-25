import Axios from "axios";


const axios = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    language: "en-US",
  },
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmY5YzA3MTE2ODRjMDM2ZmI3NGFlODg4ZmNiOTcyZSIsIm5iZiI6MTc0ODE3Njk1OC42NzIsInN1YiI6IjY4MzMxMDNlYjU0OWYwZDI3ZGE4Njg0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5VcQ-dgsGUfPeIzC9u3sj0lAO8tDyAOtir1Oe_dnak",
  },
});

export async function fetchTrends() {
  const url = "trending/movie/day";

  return await axios.get(url);
}

export async function fetchById(movie_id) {
  const url = `movie/${movie_id}`;

  return await axios.get(url);
}

export async function fetchByQuery(query) {
  const url = `search/movie`;
  const params = {
    query: query,
    include_adult: "false",
    language: "en-US",
    page: "1",
  };
  const response = await axios.get(url, { params });
  return response.data;
}

export async function fetchActors(id) {
  const url = `movie/${id}/credits`;
  return await axios.get(url);
}

export async function fetchReviews(id) {
  const url = `movie/${id}/reviews`;

  return await axios.get(url);
}