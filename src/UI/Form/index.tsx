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

  const pizzaSizes: PizzaSizeType[] = [30, 35];
  const pizzaSauces: PizzaSauceType[] = ['tomato', 'white', 'hot'];
  const pizzaBases: PizzaBaseType[] = ['thin', 'thick'];
  const [cheese, setCheese] = useState<string[]>([]);
  const [sauce, setSauce] = useState<string>('tomato');

  const [loading, setLoading] = useState(true);

  // TODO: to sort out types
  //@ts-ignore
  function reducer(ingredientsSelection: any, { type, payload }) {
    switch (type) {
      case 'add_cheese':
        return { ...ingredientsSelection, [payload.name]: payload.value };
      case 'add_sauce':
        return {
          ...ingredientsSelection,
          [payload.name]: payload.value,
        };
      default:
        return {};
    }
  }

  const [ingredientsSelection, dispatch] = useReducer(reducer, {
    cheese: [],
    sauce: '',
  });

  useEffect(() => {
    dispatch({
      type: 'add_cheese',
      payload: { name: 'cheese', value: cheese[0] },
    });
  }, [cheese]);

  useEffect(() => {
    dispatch({
      type: 'add_sauce',
      payload: { name: 'sauce', value: sauce },
    });
  }, [sauce]);

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
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Cheese
            ingredients={ingredients}
            updateCheese={setCheese}
            category="cheese"
          />
        )}

        <Sauce updateSauce={setSauce} category="sauce" />

        <button>Submit</button>
      </form>

      {/* <form action="" onSubmit={handleSubmit(onSubmit)}>
        {pizzaBases.map((base) => {
          return (
            <fieldset key={base}>
              <input {...register('base')} type="radio" value={base} />
              {base} base
            </fieldset>
          );
        })}

        {pizzaSauces.map((sauce) => (
          <fieldset key={sauce}>
            <input {...register('sauce')} type="radio" value={sauce} />
            {sauce} sauce
          </fieldset>
        ))}

        {pizzaSizes.map((size) => (
          <fieldset key={size}>
            <input {...register('size')} type="radio" value={size} />
            size {size}
          </fieldset>
        ))}

        {ingredients &&
          ingredients.map((ingredient) => (
            <fieldset key={ingredient.id}>
              <input
                {...register('ingredient')}
                type="checkbox"
                value={ingredient.slug}
              />
              {ingredient.slug}
            </fieldset>
          ))}

        <button>Submit</button>
      </form> */}
    </>
  );
}
