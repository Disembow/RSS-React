import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import store from '../../../../app/store';

describe('Searchbar', () => {
  it('should render cards list contains cards', async () => {
    render(
      <Provider store={store}>
        <SearchBar
          type={'search'}
          placeholder={'Search by artist, album, genre, country, year...'}
        />
      </Provider>
    );

    const cards = await screen.findAllByTestId('card-item');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should render cards list contains cards', async () => {
    render(
      <Provider store={store}>
        <SearchBar
          type={'search'}
          placeholder={'Search by artist, album, genre, country, year...'}
        />
      </Provider>
    );

    const cards = await screen.findAllByTestId('card-item');
    fireEvent.click(cards[0]);

    const overlay = await screen.findByTestId('overlay');
    expect(overlay).toBeInTheDocument();
  });
});
