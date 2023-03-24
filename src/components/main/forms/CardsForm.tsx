import React from 'react';
import CardsInfoRow from '../home/CardsInfo';
import { TFormCard } from './Input';

export default function CardsForm(props: TFormCard) {
  // state = {
  //   cardsCount: 2,
  // };

  const cards: JSX.Element[] = [];

  for (let i = 0; i < props.number; i++) {
    cards.push(
      <div className="card__item" key={i + 1}>
        <h3>Card #{props.number}</h3>
        <CardsInfoRow title="Full name" info={props.fullname} />
        <CardsInfoRow title="Delivery" info={props.date} />
        <CardsInfoRow title="Post provider" info={props.postService} />
        <CardsInfoRow title="Email notification" info={props.notification} />
        <CardsInfoRow title="Photo" info={props.logo} />
      </div>
    );
  }

  return <div>{cards}</div>;
}
