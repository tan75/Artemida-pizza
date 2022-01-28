import { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getIngredientById, getIngredients } from '../../api';
import {
  Ingredient,
  PizzaBaseType,
  PizzaSauceType,
  PizzaSizeType,
} from './types';
import { PizzaIngredients } from './Ingredients';
import Cheese from './Ingredients/Cheese';
import Sauce from './Ingredients/Sauce';
import Dough from './Ingredients/Dough';
import Meat from './Ingredients/Meat';

export default function PizzaConfiguratorForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  /**
   * Ingredients from the server
   */
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    {
      id: 'id',
      name: 'name',
      slug: 'slug',
      price: 0,
      category: 'cat',
      image: '',
      thumbnail: '',
    },
  ]);

  const [dough, setDough] = useState<string>('thin');
  const [sauce, setSauce] = useState<string>('tomato');
  const [cheese, setCheese] = useState<string[]>([]);
  const [meat, setMeat] = useState<string[]>([]);

  const [loading, setLoading] = useState(true);

  // TODO: to sort out types
  //@ts-ignore
  function reducer(ingredientsSelection: any, { type, payload }) {
    switch (type) {
      case 'add_cheese':
        return { ...ingredientsSelection, [payload.name]: payload.value };
      case 'add_meat':
        return { ...ingredientsSelection, [payload.name]: payload.value };
      case 'add_sauce':
        return {
          ...ingredientsSelection,
          [payload.name]: payload.value,
        };
      case 'add_dough':
        return {
          ...ingredientsSelection,
          [payload.name]: payload.value,
        };
      default:
        return {};
    }
  }

  const [ingredientsSelection, dispatch] = useReducer(reducer, {
    dough: '',
    sauce: '',
    cheese: [],
    meat: [],
  });

  useEffect(() => {
    dispatch({
      type: 'add_dough',
      payload: { name: 'dough', value: dough },
    });
  }, [dough]);

  useEffect(() => {
    dispatch({
      type: 'add_sauce',
      payload: { name: 'sauce', value: sauce },
    });
  }, [sauce]);

  useEffect(() => {
    dispatch({
      type: 'add_cheese',
      payload: { name: 'cheese', value: cheese[0] },
    });
  }, [cheese]);

  useEffect(() => {
    dispatch({
      type: 'add_meat',
      payload: { name: 'meat', value: meat[0] },
    });
  }, [meat]);

  useEffect(() => {
    const loadIngredients = async () => {
      const json = await getIngredients();
      setIngredients(json);
    };
    setLoading(false);
    loadIngredients();
  }, []);

  const onSubmit = () => {
    console.log(111, 'Tetiana onSubmit', ingredientsSelection);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Sauce updateSauce={setSauce} category="sauce" />

        <Dough updateDough={setDough} category="dough" />

        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Cheese
              ingredients={ingredients}
              updateCheese={setCheese}
              category="cheese"
            />

            <Meat
              ingredients={ingredients}
              updateMeat={setMeat}
              category="meat"
            />
          </>
        )}

        <button>Submit</button>
      </form>
    </>
  );
}
