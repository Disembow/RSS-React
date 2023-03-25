import React from 'react';
import CardsInfoRow from '../home/CardsInfo';
import { TFormCard } from '../../../types/props-types';
import imageDefault from '../../../assets/image_default.webp';

export default function CardsForm(props: TFormCard) {
  const cards: JSX.Element[] = [];

  for (let i = 0; i < props.number; i++) {
    cards.push(
      <div className="card__item form__card" key={i + 1}>
        <h3>Card #{i + 1}</h3>
        <img
          className="form__card_image"
          src={props.logo[i] !== '' ? props.logo[i] : imageDefault}
          alt="logo"
        />
        <CardsInfoRow
          title="Full name"
          info={props.radio[i] + ' ' + props.firstName[i] + ' ' + props.lastName[i]}
        />
        <CardsInfoRow title="Delivery" info={props.date[i]} />
        <CardsInfoRow title="Post provider" info={props.postService} />
        <CardsInfoRow title="Email notification" info={props.notification[i]} />
      </div>
    );
  }

  return <div>{cards}</div>;
}
