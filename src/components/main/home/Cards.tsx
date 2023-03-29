import React, { Component } from 'react';
import './Cards.scss';
import { TProps } from '../../../types/props-types';
import music from '../../../data/data';
import CardsInfoRow from './CardsInfo';

export default class Cards extends Component {
  ListItem(props: TProps) {
    const albums = props.database?.albums;
    const items = albums?.map((e) => {
      return (
        <div className="card__item" key={e.id}>
          <div className="card-image__wrapper">
            <img className="card__image" src={e.cover} alt={e.album}></img>
          </div>
          <div className="card__info">
            <CardsInfoRow title="Artist: " info={e.artist} />
            <CardsInfoRow title="Genre" info={e.genre} />
            <CardsInfoRow title="Release" info={e.year} />
            <CardsInfoRow title="Album" info={e.album} />
            <CardsInfoRow title="Tracks" info={e.tracks} />
            <CardsInfoRow title="Rating" info={e.rating} />
          </div>
        </div>
      );
    });
    return (
      <ul className="cards__wrapper" data-testid="main-cards-list">
        {items}
      </ul>
    );
  }

  render() {
    return <this.ListItem database={music} />;
  }
}
