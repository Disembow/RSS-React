import React from 'react';
import { TOption } from '../../../../types/props-types';

export default function Options(props: TOption) {
  const options = props.value.map((e, i) => {
    return (
      <option key={i} value={props.value[i]}>
        {props.value[i]}
      </option>
    );
  });

  return <>{options}</>;
}
