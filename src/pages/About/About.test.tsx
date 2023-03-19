import { render, screen } from '@testing-library/react';
import About from './About';

describe('About component', () => {
  it('renders the about section with the correct text', () => {
    render(<About />);
    const title = screen.getByText(/ABOUT/i);
    expect(title).toBeInTheDocument();

    const text1 = screen.getByText(/healthy eating doesn't have to be boring/i);
    expect(text1).toBeInTheDocument();

    const text2 = screen.getByText(/our website features an extensive range of recipes/i);
    expect(text2).toBeInTheDocument();

    const text3 = screen.getByText(/come and explore our website/i);
    expect(text3).toBeInTheDocument();
  });
});
