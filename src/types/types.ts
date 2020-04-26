import {Movie} from '../modal/modals';

export interface MovieListState {
  movies: Movie[];
  error: string | null | undefined;
  loading: boolean;
}

export interface DetailMovieState {
  movie?: Movie | null | undefined;
  error: string | null | undefined;
  loading: boolean;
}

export const REQUEST_UPCOMING_MOVIES_ACTION = 'REQUEST_UPCOMING_MOVIES_ACTION';
export const REQUEST_UPCOMING_MOVIES_SUCCESS_ACTION =
  'REQUEST_UPCOMING_MOVIES_SUCCESS_ACTION';
export const REQUEST_UPCOMING_MOVIES_FAILED_ACTION =
  'REQUEST_UPCOMING_MOVIES_FAILED_ACTION';

export const REQUEST_MOVIE_DETAILS_ACTION = 'REQUEST_MOVIE_DETAILS_ACTION';
export const REQUEST_MOVIE_DETAILS_SUCCESS_ACTION =
  'REQUEST_MOVIE_DETAILS_SUCCESS_ACTION';
export const REQUEST_MOVIE_DETAILS_FAILED_ACTION =
  'REQUEST_MOVIE_DETAILS_FAILED_ACTION';

interface RequestUpcomingMoviesAction {
  type: typeof REQUEST_UPCOMING_MOVIES_ACTION;
  page: number;
}

interface RequestUpcomingMoviesSuccessAction {
  type: typeof REQUEST_UPCOMING_MOVIES_SUCCESS_ACTION;
  payload: {
    data: Movie[];
    isFetchedMore?: boolean;
  };
}

interface RequestUpcomingMoviesFailedAction {
  type: typeof REQUEST_UPCOMING_MOVIES_FAILED_ACTION;
  error: string;
}

interface RequestMovieDetailsAction {
  type: typeof REQUEST_MOVIE_DETAILS_ACTION;
  id: number;
}

interface RequestMovieDetailsSuccessAction {
  type: typeof REQUEST_MOVIE_DETAILS_SUCCESS_ACTION;
  data: Movie;
}

interface RequestMovieDetailsFailedAction {
  type: typeof REQUEST_MOVIE_DETAILS_FAILED_ACTION;
  error: string;
}

export type AppActionsType =
  | RequestUpcomingMoviesAction
  | RequestUpcomingMoviesSuccessAction
  | RequestUpcomingMoviesFailedAction
  | RequestMovieDetailsAction
  | RequestMovieDetailsSuccessAction
  | RequestMovieDetailsFailedAction;
