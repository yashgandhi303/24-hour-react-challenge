import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@src/theme';
import RegisterForm from './RegisterForm';
import { configureStore } from '@src/store';
import { Provider } from 'react-redux';

const store = configureStore();

describe('RegisterForm', () => {
  it('should render email input on activeTab === "email"', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RegisterForm activeTab="email" />
        </ThemeProvider>
      </Provider>,
    );

    const placeholder = screen.getByPlaceholderText(/Email Address/i);

    expect(placeholder).toBeInTheDocument();
  });

  it('should have an email value on change with activeTab being email', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RegisterForm activeTab="email" />
        </ThemeProvider>
      </Provider>,
    );

    const input = screen.getByPlaceholderText(/Email Address/i);
    fireEvent.change(input, { target: { value: 'johndoe@app.com' } });

    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe('johndoe@app.com');
    });
  });

  it('should render phone input on activeTab === "phone"', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RegisterForm activeTab="phone" />
        </ThemeProvider>
      </Provider>,
    );

    const placeholder = screen.getByPlaceholderText('Ex (337) 378 8383');

    expect(placeholder).toBeInTheDocument();
  });
  it('should have an email value on change with activeTab being phone', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RegisterForm activeTab="phone" />
        </ThemeProvider>
      </Provider>,
    );

    const input = screen.getByPlaceholderText('Ex (337) 378 8383');

    fireEvent.change(input, { target: { value: '+123456789' } });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe('+123456789');
    });
  });
});
