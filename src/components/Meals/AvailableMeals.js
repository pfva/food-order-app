import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Salmon and avocado',
    description: 'Finest fish and vegetables',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Ceasar Salad',
    description: 'A true classic',
    price: 16.50,
  },
  {
    id: 'm3',
    name: 'Chicken Teryaki',
    description: 'Japanese delicousness',
    price: 14.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'As healthy as they come',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
