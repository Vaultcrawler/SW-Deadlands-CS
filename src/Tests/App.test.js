import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders attributes', () => {
  render(<App />);
  const linkElement = screen.getByText(/Attributes/i);
  expect(linkElement).toBeVisible();

  const linkElement2 = screen.getByText(/Skills/i);
  expect(linkElement2).toBeVisible();
});