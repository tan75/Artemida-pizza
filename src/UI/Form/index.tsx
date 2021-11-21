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
        <fieldset>
          Select pizza size
          <br />
          <label>
            <input {...register('pizzaSize')} type="radio" value="30" />
            30 cm
          </label>
          <label>
            <input {...register('pizzaSize')} type="radio" value="35" />
            35 cm
          </label>
        </fieldset>

        <fieldset>
          Select pizza base
          <br />
          <label>
            <input {...register('pizzaBase')} type="radio" value="thick" />
            Thick
          </label>
          <label>
            <input {...register('pizzaBase')} type="radio" value="thin" />
            Thin
          </label>
        </fieldset>

        <fieldset>
          Select cheese
          <br />
          <label>
            <input {...register('cheese')} type="checkbox" value="mozarella" />
            Mozarella
          </label>
          <label>
            <input {...register('cheese')} type="checkbox" value="cheddar" />
            Cheddar
          </label>
          <label>
            <input {...register('cheese')} type="checkbox" value="dor-blue" />
            Dor Blue
          </label>
        </fieldset>

        <fieldset>
          Select meat
          <br />
          <label>
            <input {...register('meat')} type="checkbox" value="chicken" />
            Chicken
          </label>
          <label>
            <input {...register('meat')} type="checkbox" value="ham" />
            Ham
          </label>
          <label>
            <input {...register('meat')} type="checkbox" value="pepperoni" />
            Pepperoni
          </label>
        </fieldset>

        <fieldset>
          Select veg
          <br />
          <label>
            <input {...register('veg')} type="checkbox" value="mushrooms" />
            Mushrooms
          </label>
          <label>
            <input {...register('veg')} type="checkbox" value="olives" />
            Olives
          </label>
          <label>
            <input {...register('veg')} type="checkbox" value="pineapple" />
            Pineapple
          </label>
          <label>
            <input {...register('veg')} type="checkbox" value="broccoli" />
            Broccoli
          </label>
          <label>
            <input {...register('veg')} type="checkbox" value="tomato" />
            Tomato
          </label>
        </fieldset>
        <button>Submit</button>
      </form>
    </>
  );
}
