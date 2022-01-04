import { Ingredient } from '../../types';

/**
 *
 * @param category
 * @param ingredients
 * @returns an array of ingredients of a certain category
 */
export function getIngredientsByCategory(
  ingredients: Ingredient[],
  category: string
) {
  return ingredients.filter((ingredient) => ingredient.category === category);
}
