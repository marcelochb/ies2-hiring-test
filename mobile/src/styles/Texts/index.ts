import styled from 'styled-components/native';

export const Body = styled.Text`
  font-family: Roboto-Regular;
  font-size: ${props => props.theme.fontSize.base};
  color: ${props => props.theme.colors.text};
`;

export const Title = styled.Text`
  font-family: Roboto-Bold;
  font-size: ${props => props.theme.fontSize.lagest};
  color: ${props => props.theme.colors.text};
`;

export const SubTitle = styled.Text`
  font-family: Roboto-Light;
  font-size: ${props => props.theme.fontSize.smallest};
  color: ${props => props.theme.colors.textWeak};
`;
