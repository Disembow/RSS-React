import React from 'react';
import './Cards.scss';
import { TAlbums } from '../../../../types/props-types';
import CardsInfoRow from './CardsInfo';
import DataLoaderImitation from './DataLoaderImitation';

type TCards = {
  albums: TAlbums[];
  isLoading: boolean;
  error: string | null;
};

export default function Cards({ albums, isLoading, error }: TCards) {
  return (
    <div className="cards__wrapper" data-testid="main-cards-list">
      {error && <div className="error__message_fetch">{error}</div>}
      {isLoading && <DataLoaderImitation />}
      {albums.length > 0 ? (
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
                <CardsInfoRow title="Artist" info={e.artist} />
                <CardsInfoRow title="Country" info={e.country} />
                <CardsInfoRow title="Genre" info={e.genre} />
                <CardsInfoRow title="Album" info={e.album} />
                <CardsInfoRow title="Release" info={e.year} />
                <CardsInfoRow title="Tracks" info={e.tracks} />
                <CardsInfoRow title="Rating" info={e.rating} />
              </div>
            </div>
          );
        })
      ) : (
        <div className="error__message_fetch">{'No result found'}</div>
      )}
    </div>
  );
}
