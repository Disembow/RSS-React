import React from 'react';
import CardsInfoRow from './CardsInfoRow';
import { TAlbums } from '../../../../types/props-types';
import { API_LINK } from '../../../utils/data';

type TCard = {
  data: TAlbums;
  popup: boolean;
  clickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Card = ({ data, clickHandler, popup }: TCard) => {
  return (
    <div className="card__item" id={`${data.id}`} onClick={clickHandler} data-testid={'card-item'}>
      <div className="card-image__wrapper">
        <img className="card__image" src={`${API_LINK}${data.cover}`} alt={data.album}></img>
      </div>
      <div className="card__info">
        <CardsInfoRow title="Artist" info={data.artist} />
        <CardsInfoRow title="Country" info={data.country} />
        <CardsInfoRow title="Album" info={data.album} />
        <CardsInfoRow title="Genre" info={data.genre} />
        <CardsInfoRow title="Release" info={data.year} />
        {popup && <CardsInfoRow title="Tracks" info={data.tracks} />}
        {popup && <CardsInfoRow title="Rating" info={data.rating} />}
      </div>
    </div>
  );
};

export default Card;
