import {
  requestUpcomingMoviesSuccessAction,
  requestUpcomingMoviesAction,
  requestUpcomingMoviesFailedAction,
  requestMovieDetailAction,
  requestMovieDetailSuccessAction,
  requestMovieDetailFailedAction,
} from './actions';
import {ThunkAction} from 'redux-thunk';
import {AnyAction, Dispatch} from 'redux';
import {RootState} from '../store';
import {getUpcomingMovies, getMovieDetails} from '../service/service';

type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;

export const fetchUpcomingMovies = (page: number): ThunkResult<void> => async (
  dispatch: Dispatch,
) => {
  try {
    dispatch(requestUpcomingMoviesAction(page));
    const response = await getUpcomingMovies(page);
    dispatch(
      requestUpcomingMoviesSuccessAction({
        data: response,
        isFetchedMore: page !== 1,
      }),
    );
  } catch (err) {
    dispatch(requestUpcomingMoviesFailedAction(err.message));
  }
};

export const fetchMovieDetails = (id: number): ThunkResult<void> => async (
  dispatch: Dispatch,
) => {
  try {
    dispatch(requestMovieDetailAction(id));
    const response = await getMovieDetails(id);
    dispatch(requestMovieDetailSuccessAction(response));
  } catch (err) {
    dispatch(requestMovieDetailFailedAction(err.message));
  }
};
