import styled from 'styled-components/native';
import { ModelOfContentBaseButtonTextStyle } from '../Models';

export const Text = styled.Text<ModelOfContentBaseButtonTextStyle>`
  font-family: Roboto-Regular;
  font-size: ${props =>
    props.isSmall ? props.theme.fontSize.base : props.theme.fontSize.lagest};
  color: ${props =>
    props.isOutline ? props.theme.colors.elements : props.theme.colors.text};
  margin-left: ${props => (props.hasSVG ? props.theme.metrics.base : '0')};
`;
