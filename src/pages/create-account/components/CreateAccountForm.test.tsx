import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '@src/theme';
import { configureStore } from '@src/store';
import CreateAccountForm from './CreateAccountForm';

const store = configureStore();

describe('CreateAccountForm', () => {
  it('should find full name input by placeholder', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CreateAccountForm />
        </ThemeProvider>
      </Provider>,
    );

    const name = screen.getByPlaceholderText('Ex. John Doe');
    expect(name).toBeInTheDocument();
  });

  it('should find Account ID input by placeholder', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CreateAccountForm />
        </ThemeProvider>
      </Provider>,
    );

    const name = screen.getByPlaceholderText('yourname');
    expect(name).toBeInTheDocument();
  });
});
