import React from 'react';

interface RadioButtonComponentProps {
  name: string;
  value: string;
  unit?: string;
  onChange: (event: any) => void;
}

export default function RadioButtonComponent({
  name,
  value,
  unit,
  onChange,
}: RadioButtonComponentProps) {
  return (
    <>
      <input
        type="radio"
        id="radioButton"
        value={value}
        name={name}
        onChange={onChange}
      />
      <label htmlFor="radioButton">
        {value} {unit}
      </label>
    </>
  );
}
