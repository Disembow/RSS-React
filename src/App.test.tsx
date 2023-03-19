import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App', () => {
  it('Renders Home page', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home page');
  });
});
