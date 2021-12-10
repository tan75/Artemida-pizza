export type Ingredient = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  thumbnail: string;
};

/**
 * Size in cm, default is 30
 */
export type PizzaSize = 30 | 35;

/**
 * Pizza sauce, default is tomato
 */
export type PizzaSauce = 'tomato' | 'white' | 'hot';

/**
 * Pizza base, default is thin
 */
export type PizzaBaseType = 'thin' | 'thick';
