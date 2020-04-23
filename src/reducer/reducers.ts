import {
  MovieListState,
  AppActionsType,
  REQUEST_MOVIE_DETAILS_ACTION,
  REQUEST_MOVIE_DETAILS_SUCCESS_ACTION,
  REQUEST_MOVIE_DETAILS_FAILED_ACTION,
  DetailMovieState,
  REQUEST_UPCOMING_MOVIES_ACTION,
} from '../types/types';

const initialMovieListState: MovieListState = {
  movies: [],
  error: null,
  loading: false,
};

const initialDetailMovieState: DetailMovieState = {
  error: null,
  loading: false,
  movie: null,
};

export function movieListReducer(
  state = initialDetailMovieState,
  action: AppActionsType,
) {
  switch (action.type) {
    case REQUEST_UPCOMING_MOVIES_ACTION: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case REQUEST_MOVIE_DETAILS_SUCCESS_ACTION: {
      return {
        ...state,
        loading: false,
        movies: action.data,
      };
    }

    case REQUEST_MOVIE_DETAILS_FAILED_ACTION: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
}

export function movieDetailReducer(
  state = initialMovieListState,
  action: AppActionsType,
) {
  switch (action.type) {
    case REQUEST_MOVIE_DETAILS_ACTION: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case REQUEST_MOVIE_DETAILS_SUCCESS_ACTION: {
      return {
        ...state,
        movie: action.data,
        loading: false,
      };
    }

    case REQUEST_MOVIE_DETAILS_FAILED_ACTION: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
