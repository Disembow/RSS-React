import React from 'react';
import { TProps } from '../../../types/props-types';

export default function Button(props: TProps) {
  return (
    <button className="button button__submit" type="submit">
      {props.children}
    </button>
  );
}
