import React from 'react';
import { ModelOfFlatListItem } from '../Models';

import * as Styles from './styles';
import { Texts } from '@src/styles';
import { ButtonBase } from '@src/components';

export const FlatListItem: React.FC<ModelOfFlatListItem> = ({
  handleButton,
  movie,
  hideButton,
}) => {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Image
          source={{ uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}` }}
          resizeMode='cover'
        />
        <Styles.HeaderRight>
          <Texts.SubTitle>Titulo</Texts.SubTitle>
          <Styles.Body>{movie.title}</Styles.Body>
          <Texts.SubTitle>Titulo Original</Texts.SubTitle>
          <Styles.Body>{movie.original_title}</Styles.Body>
          <Texts.SubTitle>Votos</Texts.SubTitle>
          <Styles.Body>{movie.vote_count}</Styles.Body>
          <Texts.SubTitle>Médias de Votos</Texts.SubTitle>
          <Styles.Body>{movie.vote_average}</Styles.Body>
          <Texts.SubTitle>Popularidade</Texts.SubTitle>
          <Styles.Body>{movie.popularity}</Styles.Body>
          <Texts.SubTitle>Data</Texts.SubTitle>
          <Styles.Body>{movie.release_date}</Styles.Body>
        </Styles.HeaderRight>
      </Styles.Header>
      <Texts.SubTitle>Resumo</Texts.SubTitle>
      <Styles.Body>{movie.overview}</Styles.Body>
      {hideButton
        ? (
          <Styles.MovieAddedView>
            <Styles.MovieAddedText>Filme adicionado no carrinho!</Styles.MovieAddedText>
          </Styles.MovieAddedView>
        )
        : (
          <ButtonBase
            label='Adicionar na sacola'
            handle={() => handleButton({ movie })}
          />

        )}
    </Styles.Container>
  );
}
