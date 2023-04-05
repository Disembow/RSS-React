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
  labelText: string;
  min?: string;
  max?: string;
  defaultValue?: string;
  required?: boolean;
  accept?: string;
  title?: string;
};

export default function Input({
  register,
  className,
  type,
  value,
  placeholder,
  autoComplete,
  id,
  labelText,
  min,
  max,
  defaultValue,
  required,
  accept,
  title,
}: TInput) {
  return (
    <>
      <div className="form__item">
        {labelText === '' ? (
          <></>
        ) : (
          <label className="form__label" htmlFor={id}>
            {labelText}
          </label>
        )}
        <input
          {...register}
          className={className}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          min={min}
          max={max}
          defaultValue={defaultValue}
          id={id}
          required={required}
          accept={accept}
          title={title}
        />
      </div>
    </>
  );
}
