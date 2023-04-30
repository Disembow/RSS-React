import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import { TestRoutes } from './types/enums';
import { Provider } from 'react-redux';
import store from './app/store';
import Router from './components/layouts/Router';

describe('App', () => {
  it('renders Home page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[TestRoutes.Home]}>
          <Router />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home page');
  });

  it('renders Page not found if user enter wrong path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[TestRoutes.NotFound]}>
          <Router />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Page not found :(');
  });

  it('renders About page if user enter about path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[TestRoutes.About]}>
          <Router />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About');
  });

  it('renders Forms page if user enter forms page path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[TestRoutes.Forms]}>
          <Router />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Form page');
  });
});
