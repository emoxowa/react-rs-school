import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('should render the 404 title and message', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const title = screen.getByText('404');
    expect(title).toBeInTheDocument();

    const message = screen.getByText(
      "Oh no! It looks like you've stumbled upon the infamous Page 404 - the land of lost pages and digital tumbleweeds."
    );
    expect(message).toBeInTheDocument();
  });

  it('should render the home page button', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /home page/i });
    expect(button).toBeInTheDocument();
  });
});
