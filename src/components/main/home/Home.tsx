import React, { useState } from 'react';
import Title from '../../header/Title';
import Cards from './UI/Cards';
import './Home.scss';

export default function Home() {
  const key = 'RSTaskMessage';

  const [input, setInput] = useState(localStorage.getItem(key) || '');

  const setLSData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    localStorage.setItem(key, e.target.value);
    setInput(e.target.value);
  };

  return (
    <main className="main">
      <Title>{'Home page'}</Title>
      <div className="search light-block">
        <input
          className="search__input"
          type="text"
          placeholder="Search"
          value={input}
          onChange={setLSData}
          data-testid="main-search-bar"
        />
        <span className="search__icon" data-testid="main-search-icon"></span>
      </div>
      <Cards />
    </main>
  );
}
