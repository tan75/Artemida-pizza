import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Ingredient, IngredientsCategory } from '../../types';
import { getIngredientsByCategory } from '../_lib';

interface PizzaCheeseProps {
  ingredients: Ingredient[];
  category: IngredientsCategory;
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
