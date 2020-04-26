import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  REQUEST_UPCOMING_MOVIES_ACTION,
  REQUEST_UPCOMING_MOVIES_SUCCESS_ACTION,
  REQUEST_MOVIE_DETAILS_ACTION,
  REQUEST_MOVIE_DETAILS_SUCCESS_ACTION,
  REQUEST_UPCOMING_MOVIES_FAILED_ACTION,
} from '../src/types/types';
import {fetchUpcomingMovies, fetchMovieDetails} from '../src/action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  /**
   * abort controller not working with jest so i test for failed action
   */
  describe('request upcoming movies thunk test', () => {
    it('requesting movies', () => {
      fetchMock.getOnce('', {
        body: {results: []},
      });

      const expectedActions = [
        {type: REQUEST_UPCOMING_MOVIES_ACTION, page: 1},
        {
          type: REQUEST_UPCOMING_MOVIES_FAILED_ACTION,
          error: 'AbortController is not a constructor',
        },
      ];

      const store = mockStore({});

      return store
        .dispatch(fetchUpcomingMovies(1, ''))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  });

  describe('request detail of movie thunk test', () => {
    const id: number = 12121;
    it('request movie detail', () => {
      fetchMock.getOnce('', {
        body: {},
      });

      const expectedActions = [
        {type: REQUEST_MOVIE_DETAILS_ACTION, id: id},
        {type: REQUEST_MOVIE_DETAILS_SUCCESS_ACTION, data: {}},
      ];

      const store = mockStore({});

      return store
        .dispatch(fetchMovieDetails(id))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  });
});
