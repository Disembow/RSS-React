import React from 'react';

type TOption = {
  value: string[];
  name: string;
  className: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
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
    <select className={props.className} onChange={props.onChange} name={props.name}>
      {options}
    </select>
  );
}
