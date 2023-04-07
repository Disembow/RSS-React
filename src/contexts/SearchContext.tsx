import React, { createContext, useEffect, useState } from 'react';
import { TAlbums, TProps } from '../types/props-types';

export const SearchContext = createContext<TAlbums[]>([]);

export default function SearchContextProvider({ children }: TProps) {
  const [albums, setAlbums] = useState<TAlbums[]>([]);

  const key = 'RSTaskMessage';

  useEffect(() => {
    setTimeout(
      () =>
        fetch('http://localhost:3000/catalog')
          .then((res) => {
            if (!res.ok) {
              throw new Error("Couldn't fetch the data from that source");
            }
            return res.json();
          })
          .then((data) => {
            const search = localStorage.getItem(key);
            let result: TAlbums[];

            if (search) {
              result = data.filter((album: TAlbums) => {
                return (
                  album && album.artist && album.artist.toLowerCase().includes(search.toLowerCase())
                );
              });
            } else {
              result = data;
            }
            setAlbums(result);
            console.log(search);
          })
          .catch((error) => {
            console.log(error);
          }),
      1500
    );
  }, []);

  return <SearchContext.Provider value={{ ...albums }}>{children}</SearchContext.Provider>;
}
