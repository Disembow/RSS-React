import React from 'react';
import { TProps } from '../../types/props-types';

export default function CardsInfoRow(props: TProps) {
  return (
    <p className="card-info__row">
      <span className="card-info__title">{props.title}: </span>
      <span className="card-info__item">{props.info}</span>
    </p>
  );
}
