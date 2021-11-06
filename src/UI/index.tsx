import React, { useState } from 'react';
import CheckboxItems from './Form';
import RadioButton from './Form/SingleSelect/index';
import { initialOrderState } from './state/initialOrderState';
import { useForm } from 'react-hook-form';
import PizzaForm from './Form';

export default function PizzaConfiguratorComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('onSubmit', data);
  };

  const selectedBaseItems = watch();

  console.log(selectedBaseItems);

  return <PizzaForm />;
}
