import React, { useEffect, useState, useRef } from 'react';
import { TInput, TAlbums } from '../../../../types/props-types';
import Cards from './Cards';
import fetchAPI from '../../../utils/fetchAPI';

export default function SearchBar(props: TInput) {
  const key = 'RSTaskMessage';

  const inputRef = useRef<HTMLInputElement>(null);

  const [input, setInput] = useState(localStorage.getItem(key) || '');
  const [albums, setAlbums] = useState<TAlbums[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    fetchAPI(setAlbums, setIsLoading, setError, input);

    const inputValue = inputRef.current;
    const localData = localStorage.getItem(key);

    if (localData && inputValue) {
      setInput(localData);
      inputValue.value = localData;
    }

    return () => {
      if (inputValue) {
        localStorage.setItem(key, inputValue.value);
      }
    };
  }, [input]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const inputValue = inputRef.current;
    if (inputValue) setInput(inputValue.value);

    setIsLoading((prev: boolean) => !prev);

    fetchAPI(setAlbums, setIsLoading, setError, input);
  };

  return (
    <>
      <form className="search light-block" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type={props.type}
          placeholder={props.placeholder}
          data-testid={props['data-testid']}
          ref={inputRef}
        />
        <button type="submit" className="search__icon" data-testid="main-search-icon"></button>
      </form>
      <Cards albums={albums} isLoading={isLoading} error={error} />
    </>
  );
}
