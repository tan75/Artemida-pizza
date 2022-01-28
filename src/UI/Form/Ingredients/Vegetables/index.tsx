import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Ingredient, IngredientsCategoryType } from '../../types';
import { getIngredientsByCategory } from '../_lib';

interface PizzaVegetablesProps {
  ingredients: Ingredient[];
  category: IngredientsCategoryType;
  updateVegetables: any;
}

export default function PizzaVegetables({
  ingredients,
  category,
  updateVegetables,
}: PizzaVegetablesProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const vegetables = getIngredientsByCategory(ingredients, category);

  const selectedVegetables = watch();
  console.log(selectedVegetables.vegetables);

  useEffect(() => {
    updateVegetables(Object.values(selectedVegetables));
  }, [selectedVegetables.vegetables]);

  return (
    <>
      <fieldset key={category}>
        {category}
        {vegetables.map((veg) => {
          return (
            <div key={veg.name}>
              <label htmlFor="category"></label>
              <input type="checkbox" value={veg.name} {...register(category)} />
              {veg.name}
            </div>
          );
        })}
      </fieldset>
    </>
  );
}
