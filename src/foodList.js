export default function foodList({ foods }) {
    return (
      foods.map((food) => 
        <food
          key={food.name}
          food={food} />
      )
    );
}