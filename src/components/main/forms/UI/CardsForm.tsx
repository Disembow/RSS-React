import React from 'react';
import CardsInfoRow from '../../home/UI/CardsInfoRow';
import { TFormCard } from '../../../../types/props-types';
import { TImage } from '../../../../types/props-types';
import imageDefault from '../../../../assets/image_default.webp';
import checkmarkTrue from '../../../../assets/checkbox-checked.svg';
import checkmarkFalse from '../../../../assets/checkbox.svg';

const CheckboxChecked = ({ src }: TImage) => <img src={src} alt="notifications" width={'20'} />;

export default function CardsForm(props: TFormCard) {
  const cards: JSX.Element[] = [];

  for (let i = 0; i < props.number!; i++) {
    cards.push(
      <div className="card__item form__card" key={i + 1}>
        <h3>Card #{i + 1}</h3>
        <img
          className="form__card_image"
          src={props.logo![i] !== '' ? props.logo![i] : imageDefault}
          alt="logo"
        />
        <CardsInfoRow
          title="Full name"
          info={props.data[i].radio + ' ' + props.data[i].firstName + ' ' + props.data[i].lastName}
          data-testid="fullname"
        />
        <CardsInfoRow
          title="Delivery"
          info={props.data[i].deliveryDate}
          data-testid="delivery-date"
        />
        <CardsInfoRow
          title="Post provider"
          info={props.data[i].postProvider}
          data-testid="post-provider"
        />
        <CardsInfoRow
          title="Email notification"
          info={
            props.data[i].checkbox ? (
              <CheckboxChecked src={checkmarkTrue} />
            ) : (
              <CheckboxChecked src={checkmarkFalse} />
            )
          }
          data-testid="email-notice"
        />
      </div>
    );
  }

  return (
    <div data-testid="cards-box" className="cards__wrapper cards__wrapper_forms">
      {cards}
    </div>
  );
}
