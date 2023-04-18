import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type TInput = {
  register?: UseFormRegisterReturn;
  className: string;
  type: string;
  value?: string;
  placeholder?: string;
  autoComplete?: string;
  id: string;
  labelText?: string;
  min?: string;
  max?: string;
  defaultValue?: string;
  required?: boolean;
  accept?: string;
  title?: string;
};

export default function Input(props: TInput) {
  const updProps = Object.fromEntries(
    Object.entries(props).filter((prop) => prop[0] !== 'labelText')
  );

  return (
    <>
      <div className="form__item">
        {props.labelText === '' ? (
          <></>
        ) : (
          <label className="form__label" htmlFor={props.id}>
            {props.labelText}
          </label>
        )}
        <input {...props.register} {...updProps} />
      </div>
    </>
  );
}
