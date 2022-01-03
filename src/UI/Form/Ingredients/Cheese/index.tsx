import { Ingredient } from '../../types';
import { getIngredientsByCategory } from '../_lib';

interface PizzaCheeseProps {
  ingredients: Ingredient[];
}

export default function PizzaCheese({ ingredients }: PizzaCheeseProps) {
  const cheeses = getIngredientsByCategory('cheese', ingredients);

  return (
    <>
      {cheeses.map((cheese) => (
        <p>{cheese.name}</p>
      ))}
    </>
  );
}
