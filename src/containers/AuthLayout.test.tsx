import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@src/theme';
import AuthLayout from './AuthLayout';

describe('AuthLayout', () => {
  it('renders title and children based on props input', () => {
    render(
      <ThemeProvider theme={theme}>
        <AuthLayout title="Test Title">
          <p>This is a paragraph child</p>
        </AuthLayout>
      </ThemeProvider>,
    );

    const title = screen.getByText(/Test Title/i);
    const paragraph = screen.getByText(/This is a paragraph/i);

    expect(title).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
