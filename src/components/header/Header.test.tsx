import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from './Header';

describe('App', () => {
  it('renders navigation block', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const nav = screen.getByRole('navigation');

    expect(nav.childElementCount).toBe(3);
    expect(nav.firstChild).toHaveTextContent(/Home/);
    expect(nav.lastChild).toHaveTextContent(/about us/i);
  });
});
