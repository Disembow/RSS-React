import React from 'react';
import { TProps } from 'types/props-types';
import './Title.scss';

export default function Title(props: TProps) {
  return <h1 className="page__title">{props.children}</h1>;
}
