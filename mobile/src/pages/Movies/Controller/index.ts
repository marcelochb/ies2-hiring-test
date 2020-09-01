import { useEffect, useState, useCallback } from 'react';
import api from '@src/database/Services/api';
import {
  ModelOfTableMovie,
  ModelOfMoviesResponseFromApi,
} from '@src/database/Models';
import { Alert } from 'react-native';
import { useFetchDataService } from '../Services/fetchData';
import { useHandleMoviesService } from '../Services/handleMovies';
import { useSelector } from 'react-redux';
import { GlobalState } from '@src/store/Model';
import { ModelOfCheckIfThereIsMovieInCart } from '../Models';

export const useMoviesController = () => {
  const Cart = useSelector((state: GlobalState) => state.cart);
  const { loading, movies } = useFetchDataService();
  const { addMovieToCart } = useHandleMoviesService();

  const checkThereIsMovieInCart: ModelOfCheckIfThereIsMovieInCart = useCallback(
    ({ movie }) => {
      return (
        Cart.movies.filter(movieInCart => movieInCart.id === movie.id).length >
        0
      );
    },
    [Cart],
  );

  return {
    getController: {
      movies,
      loading,
    },
    handleController: {
      addMovieToCart,
      checkThereIsMovieInCart,
    },
  };
};
