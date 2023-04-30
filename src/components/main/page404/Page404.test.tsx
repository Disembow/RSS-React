import React from 'react';
import { render, screen } from '@testing-library/react';
import Page404 from './Page404';

describe('Page 404', () => {
  it('exists', () => {
    render(<Page404 />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/page not found/i);
  });
});
