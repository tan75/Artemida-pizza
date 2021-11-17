import { useForm } from 'react-hook-form';

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
  } = useForm();

  const selectedSingleItems = watch();
  console.log(111, selectedSingleItems);

  const onSubmit = (data: any) => {
    console.log('onSubmit', data);
  };

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
        Select Ingredients
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
