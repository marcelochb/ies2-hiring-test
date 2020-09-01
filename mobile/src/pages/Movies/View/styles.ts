import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Texts } from '@src/styles';

export const LineSeparator = styled.View`
  border-color: ${props => props.theme.colors.text};
  border-width: 0.5px;
  border-style: solid;
`;

export const EmptyMovieText = styled(Texts.Title)`
  color: ${props => props.theme.colors.textWeak};
  margin-top: ${props => props.theme.metrics.largest};
  text-align: center;
`;
