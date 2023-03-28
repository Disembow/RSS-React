import React from 'react';

type TOption = {
  value: string[];
  name: string;
  id: string;
  className: string;
  reference?: React.RefObject<HTMLSelectElement>;
};

export default function Options(props: TOption) {
  const options = props.value.map((e, i) => {
    return (
      <option key={i} value={props.value[i]}>
        {props.value[i]}
      </option>
    );
  });

  return (
    <select ref={props.reference} className={props.className} name={props.name}>
      {options}
    </select>
  );
}
