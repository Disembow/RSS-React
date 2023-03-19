import React, { Component } from 'react';
import './Cards.css';
import { TProps } from '../../types/props-types';
import music from '../../data/data';

export default class Cards extends Component {
  ListItem(props: TProps) {
    const albums = props.value?.albums;
    const items = albums?.map((e) => {
      return (
        <li className="card__item" key={e.id}>
          <div className="card-image__wrapper">
            <img className="card__image" src={e.cover} alt={e.album}></img>
          </div>
          <div className="card__info">
            <p className="card-info__row">
              <span className="card-info__title">Artist: </span>
              <span className="card-info__item">{e.artist}</span>
            </p>
            <p className="card-info__row">
              <span className="card-info__title">Genre: </span>
              <span className="card-info__item">{e.genre}</span>
            </p>
            <p className="card-info__row">
              <span className="card-info__title">Release: </span>
              <span className="card-info__item">{e.year}</span>
            </p>
            <p className="card-info__row">
              <span className="card-info__title">Album: </span>
              <span className="card-info__item">{e.album}</span>
            </p>
            <p className="card-info__row">
              <span className="card-info__title">Tracks: </span>
              <span className="card-info__item">{e.tracks}</span>
            </p>
            <p className="card-info__row">
              <span className="card-info__title">Rating: </span>
              <span className="card-info__item">{e.rating}</span>
            </p>
          </div>
        </li>
      );
    });
    return <ul className="cards__wrapper">{items}</ul>;
  }

  render() {
    return <this.ListItem value={music} />;
  }
}
