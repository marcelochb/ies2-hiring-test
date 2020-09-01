import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics = {
  smallest: '3px',
  small: '5px',
  base: '10px',
  large: '20px',
  largest: '40px',
  inputHeight: '60px',
  inputWidthBase: '200px',
  inputWidthLarge: '400px',
  buttonHeight: '70px',
  buttonWidth: '70px',
  buttonBaseSize: '70px',
  buttonHeightSmall: '50px',
  radiusBase: '8px',
  radiusLarge: '20px',
  radiusRounded: '50px',
  borderWidth: '1px',
  screenWidth: width + 'px',
  screenHeight: height + 'px',
};
