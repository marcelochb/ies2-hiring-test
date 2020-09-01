import produce from 'immer';
import {
  ModelOfCartGlobalState,
  ModelOfActionReducerOfCartGlobalState,
  ActionTypesOfCartGlobalState,
} from './model';

const INITIAL_STATE: ModelOfCartGlobalState = {
  movies: [],
};

export const cart = (
  state = INITIAL_STATE,
  action: ModelOfActionReducerOfCartGlobalState,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypesOfCartGlobalState.ADD_MOVIE_TO_CART_REQUEST: {
        draft.movies.push(action.payload.movie);
        break;
      }
      case ActionTypesOfCartGlobalState.REMOVE_MOVIE_FROM_CART_REQUEST: {
        draft.movies = draft.movies.filter(
          movie => movie.id !== action.payload.movie.id,
        );
        break;
      }
      case ActionTypesOfCartGlobalState.REMOVE_ALL_MOVIES_FROM_CART_REQUEST: {
        draft.movies = [];
        break;
      }
      default:
    }
  });
};
