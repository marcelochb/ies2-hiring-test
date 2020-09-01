import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Views, Texts } from '@src/styles';
import { useMoviesController } from '../Controller';
import { Loading, InputText } from '@src/components';

import * as Styles from './styles';
import { FlatListItem } from './FlatListItem/View/Index';

export const Movies: React.FC = () => {
  const { getController, handleController } = useMoviesController();

  if (getController.loading) return (
    <Loading />
  )
  return (
    <Views.Container>
      <InputText
        label='Buscar'
        onChangeText={(e) => handleController.onChangeTitleOfMovie(e.toString())}
        value={getController.titleOfMovie}
      />
      <FlatList
        data={getController.movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FlatListItem
            movie={item}
            handleButton={handleController.addMovieToCart}
            hideButton={handleController.checkThereIsMovieInCart({ movie: item })}
          />
        )}
        ListEmptyComponent={<Styles.EmptyMovieText>
          Nenhum filme corresponde ao critério de busca
        </Styles.EmptyMovieText>}
        ItemSeparatorComponent={() => <Styles.LineSeparator />}
      />

    </Views.Container>
  );
}
