import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { pizzaSauces, pizzaDough } from '../../constants';
import { IngredientsCategoryType } from '../../types';

interface PizzaDoughProps {
  category: IngredientsCategoryType;
  updateDough: any;
}

export default function PizzaDough({ category, updateDough }: PizzaDoughProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dough = pizzaDough;

  const selectedDough = watch();

  useEffect(() => {
    updateDough(Object.values(selectedDough));
  }, [selectedDough.dough]);

  return (
    <>
      <fieldset key={category}>
        {category}

        {dough.map((d) => {
          return (
            <div key={d}>
              <label htmlFor="category"></label>
              <input type="radio" value={d} {...register(category)} />
              {d}
            </div>
          );
        })}
      </fieldset>
    </>
  );
}
