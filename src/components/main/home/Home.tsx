import React from 'react';
import Title from '../../header/Title';
import './Home.scss';
import SearchBar from './UI/SearchBar';

export default function Home() {
  return (
    <>
      <Title>{'Home page'}</Title>
      <SearchBar
        type={'search'}
        placeholder={'Search by artist, album, genre, country, year...'}
        data-testid={'main-search-bar'}
      />
    </>
  );
}
