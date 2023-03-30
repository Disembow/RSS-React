import React from 'react';
import { TOption } from '../../../../types/props-types';

export default function Select(props: TOption) {
  const options = props.value.map((e, i) => {
    return (
      <option key={i} value={props.value[i]}>
        {props.value[i]}
      </option>
    );
  });

  return (
    <>
      <label className="form__label" htmlFor="post-select">
        {props.labelText}
      </label>
      <select
        ref={props.reference}
        className={props.className}
        name={props.name}
        data-testid={props['data-testid']}
      >
        {options}
      </select>
    </>
  );
}
