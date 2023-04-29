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
    expect(Number(cards[0].id)).toEqual(1);
    expect(Number(cards[6].id)).toEqual(7);
  });

  it('should render popup overlay by clicking on first card', async () => {
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

  it('should remove popup overlay by clicking on it', async () => {
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
    fireEvent.click(overlay);

    expect(overlay).not.toBeInTheDocument();
  });
});
