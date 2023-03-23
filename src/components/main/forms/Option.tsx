import React from 'react';

type TOption = {
  children: string;
  value: string;
};

export default function Option(props: TOption) {
  return <option value={props.value}>{props.children}</option>;
}
