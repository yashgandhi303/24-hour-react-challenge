import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import VerificationForm from './VerificationForm';
import { ThemeProvider } from 'styled-components';
import theme from '@src/theme';
import { Provider } from 'react-redux';
import { configureStore } from '@src/store';

const store = configureStore();

describe('VerificationForm', () => {
  it('renders form heading', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <VerificationForm />
        </ThemeProvider>
        ,
      </Provider>,
    );

    const heading = screen.getByText(/Enter verification code/i);

    expect(heading).toBeInTheDocument();
  });

  it('renders 6 inputs for verification code', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <VerificationForm />
        </ThemeProvider>
      </Provider>,
    );

    const num1 = screen.getByPlaceholderText('1');
    const num2 = screen.getByPlaceholderText('2');
    const num3 = screen.getByPlaceholderText('3');
    const num4 = screen.getByPlaceholderText('4');
    const num5 = screen.getByPlaceholderText('5');
    const num6 = screen.getByPlaceholderText('6');

    expect(num1).toBeInTheDocument();
    expect(num2).toBeInTheDocument();
    expect(num3).toBeInTheDocument();
    expect(num4).toBeInTheDocument();
    expect(num5).toBeInTheDocument();
    expect(num6).toBeInTheDocument();
  });

  it('only accepts a maximum of 1 character per input', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <VerificationForm />
        </ThemeProvider>
      </Provider>,
    );

    const num1 = screen.getByPlaceholderText('1');

    fireEvent.change(num1, { target: { value: '123' } });

    await waitFor(() => {
      expect((num1 as HTMLInputElement).maxLength).toBe(1);
    });
  });

  it('renders continue button', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <VerificationForm />
        </ThemeProvider>
      </Provider>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/Continue/i);
  });
});
