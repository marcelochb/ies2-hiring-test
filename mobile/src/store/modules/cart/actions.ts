import {
  ActionTypesOfCartGlobalState,
  ModelOfActionAddMovieToCart,
  ModelOfActionRemoveMovieFromCart,
} from './model';

export const actionAddMovieToCart: ModelOfActionAddMovieToCart = ({
  movie,
}) => {
  return {
    type: ActionTypesOfCartGlobalState.ADD_MOVIE_TO_CART_REQUEST,
    payload: { movie },
  };
};

export const actionRemoveMovieFromCart: ModelOfActionRemoveMovieFromCart = ({
  movie,
}) => {
  return {
    type: ActionTypesOfCartGlobalState.REMOVE_MOVIE_FROM_CART_REQUEST,
    payload: { movie },
  };
};

export const actionRemoveAllMoviesFromCart = () => {
  return {
    type: ActionTypesOfCartGlobalState.REMOVE_ALL_MOVIES_FROM_CART_REQUEST,
    payload: {},
  };
};
