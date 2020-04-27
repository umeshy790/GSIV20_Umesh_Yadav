const BASE_URL = 'https://api.themoviedb.org/3';
const key = 'b3a72b722e11795c7179cc928980a9e2';

import 'abortcontroller-polyfill';

const AbortController = window.AbortController;
let controller = new AbortController();

let isRequestPending: boolean = false;

export function fetchMovies(page: number, query: string) {
  const upcomingMoviespath = `${BASE_URL}/movie/upcoming?api_key=${key}&page=${page}`;
  const searchMoviePath = `${BASE_URL}/search/movie?api_key=${key}&query=${encodeURIComponent(
    query,
  )}&page=${page}`;

  if (isRequestPending) {
    controller.abort();
    controller = new AbortController();
  }
  isRequestPending = true;

  return fetch(query ? searchMoviePath : upcomingMoviespath, {
    signal: controller.signal,
  })
    .then(res => res.json())
    .then(json => {
      isRequestPending = false;
      return json.results;
    })
    .catch(err => {
      isRequestPending = false;
      console.log(err);
    });
}

export const getMovieDetails = (id: number) =>
  fetch(`${BASE_URL}/movie/${id}?api_key=${key}`)
    .then(res => res.json())
    .then(json => json);
