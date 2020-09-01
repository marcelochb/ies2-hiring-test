import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      elements: string;
      elementsSecundary: string;
      text: string;
      textSecundary: string;
      textWeak: string;
    };
    fontSize: {
      base: string;
      large: string;
      lagest: string;
      small: string;
      smallest: string;
    };
    metrics: {
      smallest: string;
      small: string;
      base: string;
      large: string;
      largest: string;
      inputHeight: string;
      inputWidthBase: string;
      inputWidthLarge: string;
      buttonHeight: string;
      buttonWidth: string;
      buttonBaseSize: string;
      buttonHeightSmall: string;
      radiusBase: string;
      radiusLarge: string;
      radiusRounded: string;
      borderWidth: string;
      screenWidth: string;
      screenHeight: string;
    };
  }
}
