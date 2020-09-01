import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${props => props.theme.metrics.base};
  background-color: ${props => props.theme.colors.background};
`;

export const ContentCenter = styled.View`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  padding-top: ${props => props.theme.metrics.base};
`;
