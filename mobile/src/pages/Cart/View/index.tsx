import React from 'react';
import { View, FlatList } from 'react-native';
import { Views, Texts } from '@src/styles';
import { useCartController } from '../Controller';

import * as Styles from './styles';
import { ButtonBase } from '@src/components';

export const Cart: React.FC = () => {
  const { getController, handleController } = useCartController();
  return (
    <Views.Container>
      <FlatList
        ListEmptyComponent={<Styles.EmptyCartText>
          Você não possui filmes no carrinho!
        </Styles.EmptyCartText>}
        data={getController.movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Styles.FlatlistItem>
            <Styles.FlatlistItemLeft>
              <Styles.MovieAvatar
                source={{ uri: `https://image.tmdb.org/t/p/w300${item.poster_path}` }}
                resizeMode='cover'
              />
              <Styles.Text>{item.title}</Styles.Text>
            </Styles.FlatlistItemLeft>
            <Styles.FlatlistItemRight>
              <ButtonBase
                label={'Remover'}
                handle={() => handleController.removeMovieToCart({ movie: item })}
                isSmall
                isOutline
              />
            </Styles.FlatlistItemRight>
          </Styles.FlatlistItem>
        )}
      />
    </Views.Container>
  );
}
