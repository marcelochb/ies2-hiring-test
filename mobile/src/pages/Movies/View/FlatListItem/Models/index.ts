import { ModelOfTableMovie } from '@src/database/Models';
import { ModelOfAddMovieToCart } from '@src/pages/Films/Models';
export type ModelOfFlatListItem = {
  movie: ModelOfTableMovie;
  handleButton: ModelOfAddMovieToCart;
  hideButton: boolean;
};
