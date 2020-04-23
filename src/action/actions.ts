import {
  AppActionsType,
  REQUEST_UPCOMING_MOVIES_ACTION,
  REQUEST_UPCOMING_MOVIES_SUCCESS_ACTION,
  REQUEST_UPCOMING_MOVIES_FAILED_ACTION,
  REQUEST_MOVIE_DETAILS_ACTION,
  REQUEST_MOVIE_DETAILS_SUCCESS_ACTION,
  REQUEST_MOVIE_DETAILS_FAILED_ACTION,
} from '../types/types';
import {Movie} from '../modal/modals';

export const requestUpcomingMoviesAction = (): AppActionsType => ({
  type: REQUEST_UPCOMING_MOVIES_ACTION,
});

export const requestUpcomingMoviesSuccessAction = (
  data: Movie[],
): AppActionsType => ({
  type: REQUEST_UPCOMING_MOVIES_SUCCESS_ACTION,
  data: data,
});

export const requestUpcomingMoviesFailedAction = (
  error: string,
): AppActionsType => ({
  type: REQUEST_UPCOMING_MOVIES_FAILED_ACTION,
  error: error,
});

export const requestMovieDetailAction = (id: number): AppActionsType => ({
  type: REQUEST_MOVIE_DETAILS_ACTION,
  id: id,
});

export const requestMovieDetailSuccessAction = (
  data: Movie,
): AppActionsType => ({
  type: REQUEST_MOVIE_DETAILS_SUCCESS_ACTION,
  data: data,
});

export const requestMovieDetailFailedAction = (
  error: string,
): AppActionsType => ({
  type: REQUEST_MOVIE_DETAILS_FAILED_ACTION,
  error: error,
});
