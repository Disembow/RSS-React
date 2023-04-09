import React from 'react';
import { TCardInfo } from '../../../../types/props-types';

export default function CardsInfoRow(props: TCardInfo) {
  return (
    <p className="card-info__row">
      <span className="card-info__title">{props.title}: </span>
      <span className="card-info__item" data-testid={props['data-testid']}>
        {props.info}
      </span>
    </p>
  );
}
