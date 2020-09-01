import { colors } from '@src/theme/colors';
import { TextStyle } from 'react-native';
import { metrics } from '@src/theme/metrics';

const fonts = {
  regular: {
    fontFamily: 'Roboto-Regular',
  },
};

export const theme = {
  colors: {
    primary: colors.text,
    error: colors.textWeak,
    text: colors.text,
    background: colors.background,
    placeholder: colors.text,
  },
  fonts,
};

export const style: TextStyle = {
  flex: 1,
  marginBottom: 10,
  backgroundColor: colors.background,
};
