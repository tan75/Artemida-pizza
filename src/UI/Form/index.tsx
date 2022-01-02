import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getIngredientById, getIngredients } from '../../api';
import { Ingredient, PizzaBaseType, PizzaSauce, PizzaSize } from './types';

export default function PizzaConfiguratorForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedPizzaItems = watch();

  const onSubmit = () => {
    console.log(111, 'Tetiana onSubmit', selectedPizzaItems);
  };

  const [ingredients, setIngredients] = useState<Ingredient[]>();

  const pizzaSizes: PizzaSize[] = [30, 35];
  const pizzaSauces: PizzaSauce[] = ['tomato', 'white', 'hot'];
  const pizzaBases: PizzaBaseType[] = ['thin', 'thick'];

  useEffect(() => {
    const loadIngredients = async () => {
      const json = await getIngredients();
      setIngredients(json);
    };

    loadIngredients();
  }, []);

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </>
  );
}
