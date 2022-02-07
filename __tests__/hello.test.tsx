import { render, screen } from '@testing-library/react';
import Hello from '@components/Hello';

describe('Hello World!', () => {
  it('renders a paragraph with text "Hello World!"', () => {
    render(<Hello />);

    const text = screen.getByText(/Hello World!/i);

    expect(text).toBeInTheDocument();
  });
});
