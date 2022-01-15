import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { pizzaSauces } from '../../constants';
import { IngredientsCategoryType } from '../../types';

interface PizzaSauceProps {
  category: IngredientsCategoryType;
  updateSauce: any;
}

export default function PizzaSauce({ category, updateSauce }: PizzaSauceProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const sauces = pizzaSauces;

  const selectedSauce = watch();

  useEffect(() => {
    updateSauce(Object.values(selectedSauce));
  }, [selectedSauce.sauce]);

  return (
    <>
      <fieldset key={category}>
        {category}

        {sauces.map((sauce) => {
          return (
            <div key={sauce}>
              <label htmlFor="category"></label>
              <input type="radio" value={sauce} {...register(category)} />
              {sauce}
            </div>
          );
        })}
      </fieldset>
    </>
  );
}
