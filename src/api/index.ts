/**
 *
 * @param id
 * @returns ingredient
 */
export async function getIngredientById(id: string) {
  return await fetch(
    `https://papaginos-server.herokuapp.com/v1/ingredients/${id}`
  ).then((res) => res.json());
}

/**
 *
 * @returns array of ingredients
 */
export async function getIngredients() {
  return await fetch(
    `https://papaginos-server.herokuapp.com/v1/ingredients/`
  ).then((res) => res.json());
}
