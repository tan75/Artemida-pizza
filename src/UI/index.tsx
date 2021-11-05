import React, { useState } from 'react';
import CheckboxItem from './CheckboxItem/index';
import CheckboxItems from './CheckboxItems';
import RadioButton from './RadioButton/index';
import { initialOrderState } from './state/initialOrderState';
import { useForm } from 'react-hook-form';

export default function PizzaConfiguratorComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const selectedBaseItems = watch();

  console.log(selectedBaseItems);

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        Select pizza size
        <label>
          <input {...register('pizzaSize')} type="radio" value="30" />
          30 cm
        </label>
        <label>
          <input {...register('pizzaSize')} type="radio" value="35" />
          35 cm
        </label>
        Select pizza base
        <label>
          <input {...register('pizzaBase')} type="radio" value="thick" />
          Thick
        </label>
        <label>
          <input {...register('pizzaBase')} type="radio" value="thin" />
          Thin
        </label>
        <label>
          <input {...register('cheese')} type="checkbox" value="mozarella" />
          Mozarella
        </label>
        <label>
          <input {...register('cheese')} type="checkbox" value="cheddar" />
          Cheddar
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
