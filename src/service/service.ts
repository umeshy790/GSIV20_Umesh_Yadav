const BASE_URL = 'https://api.themoviedb.org/3/movie';
const key = 'b3a72b722e11795c7179cc928980a9e2';

export const getUpcomingMovies = (page: number) =>
  fetch(`${BASE_URL}/upcoming?api_key=${key}&page=${page}`)
    .then(res => res.json())
    .then(json => json.results);

export const getMovieDetails = (id: number) =>
  fetch(`${BASE_URL}/${id}?api_key=${key}`)
    .then(res => res.json())
    .then(json => json);
