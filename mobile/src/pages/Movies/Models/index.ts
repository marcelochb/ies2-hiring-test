import { ModelOfTableMovie } from '@src/database/Models';

type ModelOfMovieParameters = {
  movie: ModelOfTableMovie;
};

export type ModelOfAddMovieToCart = (params: ModelOfMovieParameters) => void;

export type ModelOfCheckIfThereIsMovieInCart = (
  params: ModelOfMovieParameters,
) => boolean;

type ModelOfFindMovieByTitleParamters = {
  titleOfMovie: string;
};

export type ModelOfFindMovieByTitle = (
  params: ModelOfFindMovieByTitleParamters,
) => void;
