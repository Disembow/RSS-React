import React, { useState, useEffect } from 'react';
import './Cards.scss';
import { TAlbums } from '../../../../types/props-types';
import CardsInfoRow from './CardsInfo';
import DataLoaderImitation from './DataLoaderImitation';

export default function Cards() {
  const [albums, setAlbums] = useState<TAlbums[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3000/catalog')
        .then((res) => {
          if (!res.ok) {
            throw new Error("Couldn't fetch the data from that source");
          }
          return res.json();
        })
        .then((data) => {
          setAlbums(data);
          setIsLoading((prev) => !prev);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading((prev) => !prev);
        });
    }, 1500);
  }, []);

  return (
    <div className="cards__wrapper" data-testid="main-cards-list">
      {error && <div>{error}</div>}
      {isLoading && <DataLoaderImitation />}
      {albums &&
        albums.map((e) => {
          return (
            <div className="card__item" key={e.id}>
              <div className="card-image__wrapper">
                <img
                  className="card__image"
                  src={`http://localhost:3000/${e.cover}`}
                  alt={e.album}
                ></img>
              </div>
              <div className="card__info">
                <CardsInfoRow title="Artist: " info={e.artist} />
                <CardsInfoRow title="Artist: " info={e.country} />
                <CardsInfoRow title="Genre" info={e.genre} />
                <CardsInfoRow title="Release" info={e.year} />
                <CardsInfoRow title="Album" info={e.album} />
                <CardsInfoRow title="Tracks" info={e.tracks} />
                <CardsInfoRow title="Rating" info={e.rating} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
