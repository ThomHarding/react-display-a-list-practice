import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a lion somewhere', () => {
  render(<App />);
  const linkElement = screen.getByText('lion');
  expect(linkElement).toBeInTheDocument();
});
