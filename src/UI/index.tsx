import React, { useEffect, useState, useReducer } from 'react';
import { getIngredientById } from '../api/index';
import CheckboxItem from './Checkbox/index';
import RadioButton from './RadioButton/index';
import { initialOrderState } from './state/initialOrderState';

type ActionType = {
  type:
    | 'SELECT_BASE_INGREDIENT'
    | 'SELECT_EXTRA_INGREDIENT'
    | 'REMOVE_BASE_INGREDIENT'
    | 'REMOVE_EXTRA_INGREDIENT';
};

const reducer = (state: OrderStateType, action: ActionType) => {
  switch (action.type) {
    case 'SELECT_BASE_INGREDIENT':
      return { state: { ...state, [action.type]: 1000 } };
    default:
      return state;
  }
};

type OrderStateType = {
  size: string;
  base: string;
  sauce: string;
  cheese: string[];
  veg: string[];
  meat: string[];
};

function init(initialOrderState: OrderStateType) {
  return { initialOrderState: initialOrderState };
}

export default function PizzaConfiguratorComponent({
  initialOrderState,
}: {
  initialOrderState: OrderStateType;
}) {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target.radioButton.value);
  };

  const [state, dispatch] = useReducer(reducer, initialOrderState, init);

  const [ingredientData, setIngredientData] = useState({
    id: '',
    name: '',
    slug: '',
    price: '',
    category: '',
    image: '',
    thumbnail: '',
  });

  // const [pizzaOrder, setPizzaOrder] = useState({
  //   pizzaSize: '30',
  //   sauce: 'tomato',
  //   cheese: [],
  // });

  // const [state, dispatch] = useReducer(reducer, );

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

    // dispatch({ type: 'SELECT_BASE_INGREDIENT' });

    // setPizzaOrder({ ...pizzaOrder, pizzaSize: data.value.toString() });
  };

  // console.log(222, pizzaOrder);

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
