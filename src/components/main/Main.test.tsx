import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('Search bar (Input)', () => {
  it('Main page should contain search bar', () => {
    render(<Main />);
    expect(screen.getByTestId('main-search-bar')).toBeInTheDocument();
  });

  it('Main page should contain search bar icon', () => {
    render(<Main />);
    expect(screen.getByTestId('main-search-icon')).toBeInTheDocument();
  });
});
