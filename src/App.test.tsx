import React from 'react';
import { render, screen } from '@testing-library/react';

// import { MemoryRouter } from 'react-router';

import App from './App';

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

// test('Renders Page not found if user enter wrong path', () => {
//   const badRoute = '/wrong/way/link';
//   render(
//     <MemoryRouter initialEntries={[badRoute]}>
//       <App />
//     </MemoryRouter>
//   );
//   expect(
//     screen.getByRole('heading', {
//       level: 1,
//     })
//   ).toHaveTextContent('Page not found :(');
// });
