import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should exist', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should have footing role', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeVisible();
  });
});
