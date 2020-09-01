import { ModelOfTableMovie } from '@src/database/Models';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ModelOfCartGlobalState = {
  movies: ModelOfTableMovie[];
};

export enum ActionTypesOfCartGlobalState {
  ADD_MOVIE_TO_CART_REQUEST = 'ADD_MOVIE_TO_CART_REQUEST',
  REMOVE_MOVIE_FROM_CART_REQUEST = 'REMOVE_MOVIE_FROM_CART_REQUEST',
  REMOVE_ALL_MOVIES_FROM_CART_REQUEST = 'REMOVE_ALL_MOVIES_FROM_CART_REQUEST',
}

type ModelOfActionCartPayload = {
  movie: ModelOfTableMovie;
};

export type ModelOfActionReducerOfCartGlobalState = {
  payload: ModelOfActionCartPayload;
  type: string;
};

type ModelOfActionCartReturn = {
  payload: ModelOfActionCartPayload;
  type: string;
};

export type ModelOfActionAddMovieToCart = (
  params: ModelOfActionCartPayload,
) => ModelOfActionCartReturn;

export type ModelOfActionRemoveMovieFromCart = ModelOfActionAddMovieToCart;

export type ModelOfCartSagasParameters = {
  payload: ModelOfActionCartPayload;
  type: string;
};

export type ModelOfThunkActionAddMovieToCart = (
  params: ModelOfActionAddMovieToCart,
) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => void;
