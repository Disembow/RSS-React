import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders about block', () => {
    render(<About />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
