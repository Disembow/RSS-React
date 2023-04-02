import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home page', () => {
  it('Home page should contain search bar', () => {
    render(<Home />);
    expect(screen.getByTestId('main-search-bar')).toBeInTheDocument();
  });

  it('Home page should contain search bar icon', () => {
    render(<Home />);
    expect(screen.getByTestId('main-search-icon')).toBeInTheDocument();
  });

  it('Home page should contain unnumberd list of cards', () => {
    render(<Home />);
    expect(screen.getByTestId('main-cards-list')).toBeInTheDocument();
  });
});
