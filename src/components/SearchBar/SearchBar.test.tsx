import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar component', () => {
  it('renders the search bar with a placeholder text', () => {
    render(<SearchBar inputValue="" />);
    const input = screen.getByPlaceholderText('Search recipe');
    expect(input).toBeInTheDocument();
  });

  it('updates the state when the input value changes', () => {
    render(<SearchBar inputValue="" />);
    const input = screen.getByPlaceholderText('Search recipe') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'chicken' } });
    expect(input.value).toBe('chicken');
  });

  it('submits the form with the input value when the button is clicked', () => {
    render(<SearchBar inputValue="" />);
    const input = screen.getByPlaceholderText('Search recipe') as HTMLInputElement;
    const button = screen.getByRole('button', { name: '' });
    fireEvent.change(input, { target: { value: 'chicken' } });
    fireEvent.click(button);
    expect(localStorage.getItem('searchBarInputValue')).toBe('chicken');
  });

  it('loads the saved input value from localStorage on mount', () => {
    localStorage.setItem('searchBarInputValue', 'chicken');
    render(<SearchBar inputValue="" />);
    const input = screen.getByPlaceholderText('Search recipe') as HTMLInputElement;
    expect(input.value).toBe('chicken');
  });
});
