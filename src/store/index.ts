import {movieListReducer, movieDetailReducer} from '../reducer/reducers';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {AppActionsType} from '../types/types';

const rootReducer = combineReducers({
  movieListReducer,
  movieDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, AppActionsType>),
);
