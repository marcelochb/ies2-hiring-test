import React from 'react';
import { Views, Texts } from '@src/styles';

import LogoIES2 from '@src/assets/Images/ies2_logo.svg';
import LogoMovieDB from '@src/assets/Images/moviedb_logo.svg';

import * as Styles from './styles';
import { ButtonBase } from '@src/components';
import { useHomeController } from '../Controller';

export const Home: React.FC = () => {
  const { handleController } = useHomeController();

  return (
    <Views.Container>
      <Styles.Header>
        <LogoIES2 />
      </Styles.Header>
      <Styles.Body>
        <Texts.Title>
          {
            `Hiring test para a IES2!
com o objetivo de consumir a
API da The MovieDB.
Tecnologias utilizadas:
  - React Native;
  - Function Components;
  - Hooks;
  - Redux;
Objetivo: Simular loja de filmes.
  - Catalogo de filmes;
  - Carrinho de compras;`}
        </Texts.Title>
        <Texts.SubTitle>Marcelo Block Teixeira</Texts.SubTitle>
      </Styles.Body>
      <Styles.Footer>
        <LogoMovieDB />
        <ButtonBase
          label='Vamos lá'
          handle={handleController.submitButton}
        />
      </Styles.Footer>

    </Views.Container>
  );
}
