import React from 'react';
import Title from '../../header/Title';
import Cards from './UI/Cards';
import './Home.scss';
import SearchBar from './UI/SearchBar';

export default function Home() {
  return (
    <main className="main">
      <Title>{'Home page'}</Title>
      <SearchBar type={'text'} placeholder={'Type to search...'} data-testid={'main-search-bar'} />
      <Cards />
    </main>
  );
}
