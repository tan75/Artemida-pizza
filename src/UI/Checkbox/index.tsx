import React from 'react';

interface CheckboxComponentProps {
  value: string;
  name: string;
}

export default function CheckboxComponent({
  value,
  name,
}: CheckboxComponentProps) {
  return (
    <>
      <input type="checkbox" id="checkBoxItem" value={value} name={name} />
      <label htmlFor="checkBoxItem"> {value}</label>
    </>
  );
}
