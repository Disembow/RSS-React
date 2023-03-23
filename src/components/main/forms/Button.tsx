import React from 'react';
import { TProps } from '../../../types/props-types';

export default function Buttons(props: TProps) {
  const clickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <button onClick={clickHandler} className="button button__submit" type="submit">
      {props.children}
    </button>
  );
}
