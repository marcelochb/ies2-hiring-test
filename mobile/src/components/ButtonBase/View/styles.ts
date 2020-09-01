import styled from 'styled-components/native';
import { TouchableRipple } from 'react-native-paper';
import { ModelOfButtonBaseContainerStyle } from '../Models';

export const Container = styled(TouchableRipple)<
  ModelOfButtonBaseContainerStyle
>`
  background-color: ${props =>
    props.isLink || props.isOutline
      ? 'transparent'
      : props.theme.colors.elements};
  border-radius: ${props => props.theme.metrics.radiusBase};
  border-width: ${props => (props.isOutline ? '1px' : '0px')};
  border-color: ${props => props.theme.colors.elements};
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: ${props =>
    props.isSmall
      ? props.theme.metrics.buttonHeightSmall
      : props.theme.metrics.buttonHeight};
  width: ${props => (props.isSmall ? 'auto' : '100%')};
  padding-left: ${props => (props.isSmall ? props.theme.metrics.base : '0')};
  padding-right: ${props => (props.isSmall ? props.theme.metrics.base : '0')};
`;
