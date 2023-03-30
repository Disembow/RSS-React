import React from 'react';

type TInput = {
  className: string;
  type: string;
  value?: string;
  placeholder?: string;
  autoComplete?: string;
  name: string;
  id: string;
  labelText: string;
  min?: string;
  max?: string;
  defaultValue?: string;
  required?: boolean;
  reference: React.RefObject<HTMLInputElement>;
};

export default function Input({
  className,
  type,
  value,
  placeholder,
  autoComplete,
  name,
  id,
  labelText,
  min,
  max,
  defaultValue,
  reference,
  required,
}: TInput) {
  return (
    <>
      {labelText === '' ? (
        <></>
      ) : (
        <label className="form__label" htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        className={className}
        type={type}
        ref={reference}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        min={min}
        max={max}
        defaultValue={defaultValue}
        id={id}
        required={required}
      />
      {type === 'radio' ? value : <></>}
    </>
  );
}
