import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders a lion somewhere', () => {
  render(<App />);
  const linkElement = screen.getByText('lion');
  expect(linkElement).toBeInTheDocument();
});
