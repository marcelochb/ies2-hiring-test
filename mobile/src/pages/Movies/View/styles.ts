import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const LineSeparator = styled.View`
  border-color: ${props => props.theme.colors.text};
  border-width: 0.5px;
  border-style: solid;
`;
