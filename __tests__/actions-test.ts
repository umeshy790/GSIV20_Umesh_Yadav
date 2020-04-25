import * as types from '../src/types/types';
import * as actions from '../src/action/actions';
import {Movie} from '../src/modal/modals';

describe('actions', () => {
  it('should create a actions', () => {
    const error: string = 'Some error';
    const movies: Movie[] = [];
    const movie: Movie = {
      id: 1212,
      original_language: 'en',
      original_title: 'dummy',
      overview: 121,
      release_date: 112,
      title: 'dummy',
      vote_average: 1212,
      adult: false,
      backdrop_path: '',
      genre_ids: [121, 22],
      popularity: 4.3,
      poster_path: 'fjfjd',
      video: false,
      vote_count: 121,
    };
    const id: number = 1212;

    describe('request movie action', () => {
      const requestUpcomingMovieAction = {
        type: types.REQUEST_UPCOMING_MOVIES_ACTION,
      };
      expect(actions.requestUpcomingMoviesAction()).toEqual(
        requestUpcomingMovieAction,
      );
    });

    describe('request movie success action', () => {
      const requestUpcomingMovieSuccessAction = {
        type: types.REQUEST_UPCOMING_MOVIES_SUCCESS_ACTION,
        data: movies,
      };
      expect(actions.requestUpcomingMoviesSuccessAction(movies)).toEqual(
        requestUpcomingMovieSuccessAction,
      );
    });

    describe('request movie failed action', () => {
      const requestUpcomingMovieFailedAction = {
        type: types.REQUEST_UPCOMING_MOVIES_FAILED_ACTION,
        error,
      };
      expect(actions.requestUpcomingMoviesFailedAction(error)).toEqual(
        requestUpcomingMovieFailedAction,
      );
    });

    describe('request movie detail action', () => {
      const requestMovieDetailAction = {
        type: types.REQUEST_MOVIE_DETAILS_ACTION,
        id: id,
      };
      expect(actions.requestMovieDetailAction(id)).toEqual(
        requestMovieDetailAction,
      );
    });

    describe('request movie detail success action', () => {
      const requestMovieDetailSuccessAction = {
        type: types.REQUEST_MOVIE_DETAILS_SUCCESS_ACTION,
        data: movie,
      };
      expect(actions.requestMovieDetailSuccessAction(movie)).toEqual(
        requestMovieDetailSuccessAction,
      );
    });

    describe('request movie detail failed action', () => {
      const requestMovieDetailFailedAction = {
        type: types.REQUEST_MOVIE_DETAILS_FAILED_ACTION,
        error: error,
      };
      expect(actions.requestMovieDetailFailedAction(error)).toEqual(
        requestMovieDetailFailedAction,
      );
    });
  });
});
