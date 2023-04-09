import React from 'react';
import CardsInfoRow from './CardsInfoRow';
import { TAlbums } from '../../../../types/props-types';

type TCard = {
  data: TAlbums;
  clickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Card = ({ data, clickHandler }: TCard) => {
  return (
    <div className="card__item" id={`${data.id}`} onClick={clickHandler}>
      <div className="card-image__wrapper">
        <img
          className="card__image"
          src={`http://localhost:3000/${data.cover}`}
          alt={data.album}
        ></img>
      </div>
      <div className="card__info">
        <CardsInfoRow title="Artist" info={data.artist} />
        <CardsInfoRow title="Country" info={data.country} />
        <CardsInfoRow title="Genre" info={data.genre} />
        <CardsInfoRow title="Album" info={data.album} />
        <CardsInfoRow title="Release" info={data.year} />
        <CardsInfoRow title="Tracks" info={data.tracks} />
        <CardsInfoRow title="Rating" info={data.rating} />
      </div>
    </div>
  );
};

export default Card;
