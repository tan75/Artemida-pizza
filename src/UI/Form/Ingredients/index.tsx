import { Ingredient } from '../types';
import Cheese from './Cheese';

interface PizzaIngredientsProps {
  ingredients: Ingredient[];
}

export function PizzaIngredients({ ingredients }: PizzaIngredientsProps) {
  return (
    <>
      <Cheese ingredients={ingredients} />
    </>
  );
}
