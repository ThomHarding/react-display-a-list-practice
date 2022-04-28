import Food from './FoodItem';

export default function FoodList({ foods }) {
  return (
    foods.map((food) => 
      <Food
        key={food.name}
        food={food} />
    )
  );
}

//pls work now
