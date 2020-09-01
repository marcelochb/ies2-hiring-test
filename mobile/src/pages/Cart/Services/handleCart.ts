import { useDispatch } from 'react-redux';
import { actionRemoveMovieFromCart } from '@src/store/modules/cart/actions';
import { ModelOfRemoveMovieToCart } from '../Models';

export const useHandleCartService = () => {
  const dispatch = useDispatch();
  const removeMovieToCart: ModelOfRemoveMovieToCart = ({ movie }) =>
    dispatch(actionRemoveMovieFromCart({ movie }));

  return { removeMovieToCart };
};
