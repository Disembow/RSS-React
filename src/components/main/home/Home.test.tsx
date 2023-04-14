import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../../app/store';

describe('Home page', () => {
  it('Home page should contain search bar', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId('main-search-bar')).toBeInTheDocument();
  });

  it('Home page should contain search bar icon', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId('main-search-icon')).toBeInTheDocument();
  });

  it('Home page should contain unnumberd list of cards', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId('main-cards-list')).toBeInTheDocument();
  });
});
