import { render, screen } from '@testing-library/react';
import SecureAccountForm from './SecureAccountForm';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { configureStore } from '@src/store';
import theme from '@src/theme';

const store = configureStore();

describe('SecureAccountForm', () => {
  it('should render password label and input field', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SecureAccountForm />
        </ThemeProvider>
      </Provider>,
    );

    const password = screen.getByLabelText('Password');
    expect(password).toBeInTheDocument();
  });
  it('should render confirm password label and input field', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SecureAccountForm />
        </ThemeProvider>
      </Provider>,
    );

    const password = screen.getByLabelText('Confirm Password');
    expect(password).toBeInTheDocument();
  });
});
