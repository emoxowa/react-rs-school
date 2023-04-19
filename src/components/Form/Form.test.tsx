// tests/Form.spec.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
import { vitest } from 'vitest';

describe('Form Component', () => {
  test('renders the form and its elements', () => {
    render(<Form setCardsInfo={() => {}} />);

    expect(screen.getByLabelText(/Your name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Recipe title/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of publication/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Category/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Image/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Make my name visible/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/ })).toBeInTheDocument();
  });

  test('displays an error message if the name input is empty on submit', () => {
    const setCardsInfo = vitest.fn();
    render(<Form setCardsInfo={setCardsInfo} />);

    fireEvent.click(screen.getByRole('button', { name: /Submit/ }));

    expect(setCardsInfo).not.toHaveBeenCalled();
  });
});
