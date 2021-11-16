import React, { useEffect, useState } from 'react';
import { getIngredientById } from '../../../api';

interface CheckboxComponentProps {
  id: string;
}

export default function CheckboxComponent({ id }: CheckboxComponentProps) {
  const [ingredientData, setIngredientData] = useState({
    id: '',
    name: '',
    price: '',
    category: '',
    image: '',
    thumbnail: '',
  });

  useEffect(() => {
    const loadIngredient = async () => {
      const json = await getIngredientById(id);
      setIngredientData(json);
    };
    loadIngredient();
  }, []);

  console.log('Tetiana 222', ingredientData);

  return (
    <>
      <input
        type="checkbox"
        id="checkBoxItem"
        value={ingredientData.name}
        name={ingredientData.name}
      />
      <label htmlFor="checkBoxItem"> {ingredientData.name}</label>
    </>
  );
}
