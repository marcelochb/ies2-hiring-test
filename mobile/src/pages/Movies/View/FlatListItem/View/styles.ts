import styled from 'styled-components/native';
import { Texts } from '@src/styles';
export const Container = styled.View`
  padding: ${props => props.theme.metrics.base};
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: ${props => props.theme.metrics.base};
`;

export const Image = styled.Image`
  width: 160px;
  height: 230px;
  border-color: ${props => props.theme.colors.elements};
  border-width: 3px;
  border-style: solid;
  border-radius: ${props => props.theme.metrics.radiusBase};
`;

export const HeaderRight = styled.View`
  margin-left: ${props => props.theme.metrics.base};
  flex: 1;
`;

export const Body = styled(Texts.Body)`
  margin-bottom: ${props => props.theme.metrics.base};
`;

export const MovieAddedView = styled.View`
  height: ${props => props.theme.metrics.buttonHeight};
  justify-content: center;
  align-items: center;
`;

export const MovieAddedText = styled(Texts.Title)`
  color: ${props => props.theme.colors.textWeak};
`;
