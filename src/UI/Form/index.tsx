import { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getIngredientById, getIngredients } from '../../api';
import { Ingredient, PizzaBaseType, PizzaSauce, PizzaSize } from './types';
import { PizzaIngredients } from './Ingredients';
import Cheese from './Ingredients/Cheese';

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

  const pizzaSizes: PizzaSize[] = [30, 35];
  const pizzaSauces: PizzaSauce[] = ['tomato', 'white', 'hot'];
  const pizzaBases: PizzaBaseType[] = ['thin', 'thick'];
  const [cheese, setCheese] = useState<string[]>([]);

  const [loading, setLoading] = useState(true);

  // TODO: to sort out types
  //@ts-ignore
  function reducer(ingredientsSelection: any, { type, payload }) {
    switch (type) {
      case 'add_cheese':
        return { ...ingredientsSelection, [payload.name]: payload.value };
      default:
        return { cheese: ['all cheese is gone!'] };
    }
  }

  const [ingredientsSelection, dispatch] = useReducer(reducer, {
    cheese: [],
  });

  useEffect(() => {
    dispatch({
      type: 'add_cheese',
      payload: { name: 'cheese', value: cheese[0] },
    });
  }, [cheese]);

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
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Cheese
            ingredients={ingredients}
            updateCheese={setCheese}
            category="cheese"
          />

          <button>Submit</button>
        </form>
      )}

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
