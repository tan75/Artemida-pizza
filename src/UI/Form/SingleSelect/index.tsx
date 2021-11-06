import { useForm } from 'react-hook-form';

export default function SingleleSelect() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedSingleItems = watch();
  console.log(111, selectedSingleItems);

  return (
    <>
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
    </>
  );
}
