import React, { useState } from 'react';
import CheckboxItem from './CheckboxItem/index';
import CheckboxItems from './CheckboxItems';
import RadioButton from './RadioButton/index';
import { initialOrderState } from './state/initialOrderState';

export default function PizzaConfiguratorComponent() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target.radioButton.value);
  };

  const [pizzaIngredientsState, setPizzaIngredientsState] = useState(
    initialOrderState
  );

  const handleChange = (event: { target: { name: string; value: number } }) => {
    const data = {
      name: event.target.name,
      value: event.target.value,
    };
    setPizzaIngredientsState({
      ...pizzaIngredientsState,
      [data.name]: data.value,
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <p>Select pizza size</p>
        <RadioButton
          name={'size'}
          value={'30'}
          unit={'cm'}
          onChange={handleChange}
        />
        <RadioButton
          name={'size'}
          value={'35'}
          unit={'cm'}
          onChange={handleChange}
        />
        <p>Select pizza base</p>
        <RadioButton name={'base'} value={'thin'} onChange={handleChange} />
        <RadioButton name={'base'} value={'thick'} onChange={handleChange} />
        <p>Select pizza sauce</p>
        <RadioButton name={'sauce'} value={'tomato'} onChange={handleChange} />
        <RadioButton name={'sauce'} value={'white'} onChange={handleChange} />
        <RadioButton name={'sauce'} value={'hot'} onChange={handleChange} />
        <p>Select cheese</p>

        <CheckboxItems />

        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
