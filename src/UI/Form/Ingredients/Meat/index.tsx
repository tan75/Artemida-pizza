import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Ingredient, IngredientsCategoryType } from '../../types';
import { getIngredientsByCategory } from '../_lib';

interface PizzaMeatProps {
  ingredients: Ingredient[];
  category: IngredientsCategoryType;
  updateMeat: any;
}

export default function PizzaMeat({
  ingredients,
  category,
  updateMeat,
}: PizzaMeatProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const meats = getIngredientsByCategory(ingredients, category);

  const selectedMeat = watch();

  useEffect(() => {
    updateMeat(Object.values(selectedMeat));
  }, [selectedMeat.meat]);

  return (
    <>
      <fieldset key={category}>
        {category}
        {meats.map((meat) => {
          return (
            <div key={meat.name}>
              <label htmlFor="category"></label>
              <input
                type="checkbox"
                value={meat.name}
                {...register(category)}
              />
              {meat.name}
            </div>
          );
        })}
      </fieldset>
    </>
  );
}
