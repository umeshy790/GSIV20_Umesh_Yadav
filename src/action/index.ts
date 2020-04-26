import * as ActionTypes from './actions';
import {ThunkAction} from 'redux-thunk';
import {AnyAction, Dispatch} from 'redux';
import {RootState} from '../store';
import {getMovieDetails, fetchMovies} from '../service/service';

type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;

export const fetchUpcomingMovies = (
  page: number,
  query?: string,
): ThunkResult<void> => async (dispatch: Dispatch) => {
  try {
    dispatch(ActionTypes.requestUpcomingMoviesAction(page));
    const response = await fetchMovies(page, query);
    dispatch(
      ActionTypes.requestUpcomingMoviesSuccessAction({
        data: response,
        isFetchedMore: page !== 1,
      }),
    );
  } catch (err) {
    dispatch(ActionTypes.requestUpcomingMoviesFailedAction(err.message));
  }
};

export const fetchMovieDetails = (id: number): ThunkResult<void> => async (
  dispatch: Dispatch,
) => {
  try {
    dispatch(ActionTypes.requestMovieDetailAction(id));
    const response = await getMovieDetails(id);
    dispatch(ActionTypes.requestMovieDetailSuccessAction(response));
  } catch (err) {
    dispatch(ActionTypes.requestMovieDetailFailedAction(err.message));
  }
};
