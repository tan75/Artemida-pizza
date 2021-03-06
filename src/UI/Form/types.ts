export type Ingredient = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  thumbnail: string;
};

/**
 * Size in cm, default is 30
 */
export type PizzaSizeType = 30 | 35;

/**
 * Pizza sauce, default is tomato
 */
export type PizzaSauceType = 'tomato' | 'white' | 'hot';

/**
 * Pizza dough, default is thin
 */
export type PizzaDoughType = 'thin' | 'thick';

/**
 * Pizza base, default is thin
 */
export type PizzaBaseType = 'thin' | 'thick';

/**
 * Ingredient categories
 */
export type IngredientsCategoryType =
  | 'dough'
  | 'sauce'
  | 'cheese'
  | 'meat'
  | 'vegetables';
