import { useDispatch } from 'react-redux';
import { actionAddMovieToCart } from '@src/store/modules/cart/actions';
import { ModelOfAddMovieToCart } from '../Models';

export const useHandleMoviesService = () => {
  const dispatch = useDispatch();
  const addMovieToCart: ModelOfAddMovieToCart = ({ movie }) =>
    dispatch(actionAddMovieToCart({ movie }));

  return { addMovieToCart };
};
