import React from 'react';
import { TProps } from '../../../../types/props-types';

export default function Button(props: TProps) {
  return <input className="button button__submit" type="submit" value={'submit'}></input>;
}
