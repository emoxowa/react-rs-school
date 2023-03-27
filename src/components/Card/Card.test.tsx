import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  const defaultProps = {
    image: null,
    title: 'Default Title',
    userName: 'Default User',
    description: 'Default Description',
    date: '2022-03-25',
    category: 'Default Category',
    checkbox: false,
    radio: 'Yes',
  };

  it('should display the default image if no image is provided', () => {
    render(<Card {...defaultProps} />);

    const imageElement = screen.getByAltText('Featured meal image');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain('defaultImage.png');
  });
});
