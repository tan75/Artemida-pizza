import { Ingredient } from '../types';
import Cheese from './Cheese';

interface PizzaIngredientsProps {
  ingredients: Ingredient[];
  updateCheese: any;
}
// TODO: to delete if not used
// Currently not used
export function PizzaIngredients({
  ingredients,

  updateCheese,
}: PizzaIngredientsProps) {
  return (
    <>
      <Cheese
        ingredients={ingredients}
        category="cheese"
        updateCheese={updateCheese}
      />
    </>
  );
}
