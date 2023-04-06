import React, { useEffect, useState, useRef } from 'react';
import { TInput } from '../../../../types/props-types';

export default function SearchBar(props: TInput) {
  const key = 'RSTaskMessage';

  const [input, setInput] = useState(localStorage.getItem(key) || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputValue = inputRef.current;
    const req = localStorage.getItem(key);

    if (req) {
      setInput(req);
    }

    return () => {
      if (inputValue) {
        localStorage.setItem(key, inputValue.value);
      }
    };
  }, []);

  const setLSData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form className="search light-block" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type={props.type}
        placeholder={props.placeholder}
        value={input}
        onChange={setLSData}
        data-testid={props['data-testid']}
        ref={inputRef}
      />
      <button type="submit" className="search__icon" data-testid="main-search-icon"></button>
    </form>
  );
}
