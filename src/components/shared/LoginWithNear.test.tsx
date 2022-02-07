import LoginWithNear from './LoginWithNear';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@src/theme';

describe('LoginWithNear', () => {
  it('renders a text and a button', () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginWithNear />
      </ThemeProvider>,
    );

    const heading = screen.getByText(/Already have NEAR account?/i);
    const buttonText = screen.queryByText(/Login with NEAR/i);

    expect(heading).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});
