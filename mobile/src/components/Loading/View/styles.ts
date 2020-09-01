import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

export const SpinningLoading = styled(ActivityIndicator)`
  color: ${props => props.theme.colors.text};
`;
