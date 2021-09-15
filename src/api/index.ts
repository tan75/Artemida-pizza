export async function getIngredientById(id: string) {
  return await fetch(
    `https://papaginos-server.herokuapp.com/v1/ingredients/${id}`
  ).then((res) => res.json());
}
