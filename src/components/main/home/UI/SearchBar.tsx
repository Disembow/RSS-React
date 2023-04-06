import React, { useEffect, useState, useRef } from 'react';
import { TInput, TAlbums } from '../../../../types/props-types';

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
    fetch('http://localhost:3000/catalog')
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch the data from that source");
        }
        return res.json();
      })
      .then((data) => {
        const result = data.filter((album: TAlbums) => {
          return album && album.artist && album.artist.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => setIsLoading((prev: boolean) => !prev));
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
