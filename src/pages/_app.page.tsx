import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { normalize } from 'polished';
import { wrapper } from '@src/store';
import theme from '@src/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Manrope', Arial, Helvetica, sans-serif;
    font-size: 16px;
    width: 100%;
    overflow-x: hidden;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      display: none;
    }
  }

  a {
    text-decoration: none;
  }


`;

export default wrapper.withRedux(App);
