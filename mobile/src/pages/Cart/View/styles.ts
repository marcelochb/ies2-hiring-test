import styled from 'styled-components/native';
import { Texts } from '@src/styles';

export const FlatlistItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.metrics.base};
`;

export const FlatlistItemLeft = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 2;
  padding-right: ${props => props.theme.metrics.base};
`;
export const FlatlistItemRight = styled.View`
  flex: 0.8;
`;

export const MovieAvatar = styled.Image`
  width: 70px;
  height: 70px;
  border-color: ${props => props.theme.colors.elements};
  border-width: 3px;
  border-style: solid;
  border-radius: ${props => props.theme.metrics.radiusRounded};
  margin-right: ${props => props.theme.metrics.base};
`;

export const EmptyCartText = styled(Texts.Title)`
  color: ${props => props.theme.colors.textWeak};
  margin-top: ${props => props.theme.metrics.largest};
  text-align: center;
`;

export const Text = styled(Texts.Body)`
  flex: 1;
`;
