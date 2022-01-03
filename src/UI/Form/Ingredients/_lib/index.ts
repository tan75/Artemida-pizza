import { Ingredient } from '../../types';

/**
 *
 * @param category
 * @param ingredients
 * @returns an array of ingredients
 */
export function getIngredientsByCategory(
  category: string,
  ingredients: Ingredient[]
) {
  return ingredients.filter((ingredient) => ingredient.category === category);
}
