import React, { useState } from 'react';
import { TInput } from '../../../../types/props-types';

export default function SearchBar(props: TInput) {
  const key = 'RSTaskMessage';

  const [input, setInput] = useState(localStorage.getItem(key) || '');

  const setLSData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    localStorage.setItem(key, e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="search light-block">
      <input
        className="search__input"
        type={props.type}
        placeholder={props.placeholder}
        value={input}
        onChange={setLSData}
        data-testid={props['data-testid']}
      />
      <span className="search__icon" data-testid="main-search-icon"></span>
    </div>
  );
}
