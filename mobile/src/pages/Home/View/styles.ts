import styled from 'styled-components/native';
import { Texts } from '@src/styles';

export const Header = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${props => props.theme.metrics.base};
`;
export const Body = styled.View`
  flex: 2;
  align-items: center;
`;
export const Footer = styled.View`
  flex: 3;
  align-items: center;
  justify-content: space-around;
  padding-left: ${props => props.theme.metrics.large};
  padding-right: ${props => props.theme.metrics.large};
`;

export const Text = styled(Texts.Title)``;
