import React from 'react';
import { TProps } from 'types/props-types';

export default function Footer(props: TProps) {
  return <footer>{props.children}</footer>;
}
