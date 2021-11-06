import React, { useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import SingleSelect from './SingleSelect';
import { MultiSelect } from './MultiSelect';

const INITIAL_PIZZA_CONFIG = {
  pizzaSize: 35,
  pizzaDough: 'thin',
  pizzaCheese: 'mozarella',
};

export default function PizzaConfiguratorForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: INITIAL_PIZZA_CONFIG,
  });

  const inputRef = useRef();

  const onSubmit = (data: any) => {
    console.log('onSubmit', data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {/* <SingleSelect /> */}

        <MultiSelect ref={inputRef} />
        <button>Submit</button>
      </form>
    </>
  );
}
