import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
      accent: {
        1: string;
        2: string;
        3: string;
      };
      text: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      danger: string;
      white: string;
    };
    breakpoints: {
      sm: string;
    };
  }
}
