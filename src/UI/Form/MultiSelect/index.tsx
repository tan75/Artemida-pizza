import { useForm } from 'react-hook-form';
import React, { Fragment, forwardRef } from 'react';

export const MultiSelect = forwardRef((props, ref: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const selectedMultiItems = watch();
  // console.log(222, selectedMultiItems);

  // const { register, ...rest } = props;

  return (
    <>
      <label>
        <input
          // {...register('cheese')}
          type="checkbox"
          value="mozarella"
          ref={ref}
          name="pizzaCheese"
        />
        Mozarella
      </label>
      <label>
        <input
          // {...register('cheese')}
          type="checkbox"
          value="cheddar"
          ref={ref}
          name="pizzaCheese"
        />
        Cheddar
      </label>
    </>
  );
});
