import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../../app/store';

describe('Home page', () => {
  it('should contain search bar', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId('main-search-bar')).toBeInTheDocument();
  });

  it('should contain search bar icon', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId('main-search-icon')).toBeInTheDocument();
  });

  it('should contain list of cards', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId('main-cards-list')).toBeInTheDocument();
  });
});
