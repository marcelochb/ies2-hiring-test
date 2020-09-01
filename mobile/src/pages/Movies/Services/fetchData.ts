import { useEffect, useState, useCallback } from 'react';
import {
  ModelOfTableMovie,
  ModelOfMoviesResponseFromApi,
} from '@src/database/Models';
import api from '@src/database/Services/api';
import { Alert } from 'react-native';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const useFetchDataService = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<ModelOfTableMovie[]>([]);
  const [moviesFiltered, setMoviesFiltered] = useState<ModelOfTableMovie[]>([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get<ModelOfMoviesResponseFromApi>('popular');
        const formatedMovies = response.data.results.map(movie => ({
          ...movie,
          release_date: format(parseISO(movie.release_date), 'dd/MM/yyyy', {
            locale: ptBR,
          }),
        }));
        const sortedMovies = formatedMovies.sort((current, next) =>
          current.title > next.title ? 1 : -1,
        );
        setMovies(sortedMovies);
        setMoviesFiltered(sortedMovies);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert(
          'Falha de comunicação',
          JSON.stringify(error.response.data),
        );
      }
    };
    loadData();
  }, []);

  const findMovieByTitle = ({ titleOfMovie }: { titleOfMovie: string }) => {
    const filtered = movies.filter(movie => movie.title.includes(titleOfMovie));
    setMoviesFiltered(filtered);
  };

  return {
    loading,
    movies: moviesFiltered,
    findMovieByTitle,
  };
};
