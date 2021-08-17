import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Salmon and avocado',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Ceasar Salad',
    description: 'A classic',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Supreme',
    description: 'American with nutritious protein',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'As healthy as they come',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;