import { getIngredientById } from './index';

describe('getIngredientInfo', () => {
  it.skip('fetches a correct info', () => {
    return getIngredientById('KJ1aL-Cn').then((data) =>
      expect(data).toBe({
        id: 'KJ1aL-Cn',
        name: 'Mozarella',
        slug: 'mozarella',
        price: '100',
        category: 'cheese',
        image: 'mozarella.png',
        thumbnail: 'mozarella-thumb.png',
      })
    );
  });
});
