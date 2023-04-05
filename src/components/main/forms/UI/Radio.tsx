import React from 'react';
import { TProps } from '../../../../types/props-types';

export default function Radio({ className, type, value, id, register }: TProps) {
  return (
    <>
      <input {...register} className={className} type={type} value={value} id={id} />
      <span>{value === '' ? 'Other' : value}</span>
    </>
  );
}
