import TopBar from './TopBar';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@src/theme';

describe('TopBar', () => {
  it('renders HomePage if there is no title data prop passed', () => {
    render(
      <ThemeProvider theme={theme}>
        <TopBar />
      </ThemeProvider>,
    );

    const title1 = screen.getByText('Home');
    const title2 = screen.getByText('Page');

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
  });

  it('renders title if title prop is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <TopBar title="Register" />
      </ThemeProvider>,
    );

    const title = screen.getByText(/Register/i);

    expect(title).toBeInTheDocument();
  });
});
