import { useSelector } from 'react-redux';
import { GlobalState } from '@src/store/Model';
import { useHandleCartService } from '../Services/handleCart';

export const useCartController = () => {
  const { movies } = useSelector((state: GlobalState) => state.cart);
  const { removeMovieToCart } = useHandleCartService();

  return {
    getController: {
      movies,
    },
    handleController: {
      removeMovieToCart,
    },
  };
};
