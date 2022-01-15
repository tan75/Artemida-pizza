import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Ingredient, IngredientsCategoryType } from '../../types';
import { getIngredientsByCategory } from '../_lib';

interface PizzaCheeseProps {
  ingredients: Ingredient[];
  category: IngredientsCategoryType;
  updateCheese: any;
}

export default function PizzaCheese({
  ingredients,
  category,
  updateCheese,
}: PizzaCheeseProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const cheeses = getIngredientsByCategory(ingredients, category);

  const selectedCheese = watch();

  useEffect(() => {
    updateCheese(Object.values(selectedCheese));
  }, [selectedCheese.cheese]);

  return (
    <>
      <fieldset key={category}>
        {category}
        {cheeses.map((cheese) => {
          return (
            <div key={cheese.name}>
              <label htmlFor="category"></label>
              <input
                type="checkbox"
                value={cheese.name}
                {...register(category)}
              />
              {cheese.name}
            </div>
          );
        })}
      </fieldset>
    </>
  );
}
