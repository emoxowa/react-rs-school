import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  test('renders all input fields', () => {
    render(<Form />);
    expect(screen.getByLabelText('Your name')).toBeInTheDocument();
    expect(screen.getByLabelText('Recipe title')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of publication')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByLabelText('Image')).toBeInTheDocument();
  });
});
