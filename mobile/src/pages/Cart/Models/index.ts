import { ModelOfTableMovie } from '@src/database/Models';

type ModelOfCartParameters = {
  movie: ModelOfTableMovie;
};

export type ModelOfRemoveMovieToCart = (params: ModelOfCartParameters) => void;
