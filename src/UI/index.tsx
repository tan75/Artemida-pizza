import React, { useEffect, useState } from 'react';
import { getIngredientById } from '../api/index';
import CheckboxItem from './Checkbox/index';
import RadioButton from './RadioButton/index';

export default function PizzaConfiguratorComponent() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target.radioButton.value);
  };

  const [ingredientData, setIngredientData] = useState({
    id: '',
    name: '',
    slug: '',
    price: '',
    category: '',
    image: '',
    thumbnail: '',
  });

  const [pizzaOrder, setPizzaOrder] = useState({
    base: 30,
    sauce: 'tomato',
    cheese: [],
  });

  useEffect(() => {
    const loadData = async () => {
      const json = await getIngredientById('KJ1aL-Cn');
      setIngredientData(json);
    };
    loadData();
  }, []);

  const handleChange = (event: { target: { name: string; value: number } }) => {
    console.log('OnChange', event.target?.value);
    const data = {
      name: event.target.name,
      value: event.target.value,
    };
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <p>Select pizza size</p>
        <RadioButton
          name={'pizzaSize'}
          value={'30'}
          unit={'cm'}
          onChange={handleChange}
        />
        <RadioButton
          name={'pizzaSize'}
          value={'35'}
          unit={'cm'}
          onChange={handleChange}
        />
        <p>Select pizza base</p>
        <RadioButton name={'pizzaBase'} value={'thin'} />
        <RadioButton name={'pizzaBase'} value={'thick'} />
        <p>Select pizza sauce</p>
        <RadioButton name={'pizzaSauce'} value={'tomato'} />
        <RadioButton name={'pizzaSauce'} value={'white'} />
        <RadioButton name={'pizzaSauce'} value={'hot'} />
        <p>Select cheese</p>
        {/* {data.name} */}
        <CheckboxItem
          name={ingredientData.category}
          value={ingredientData.name}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
