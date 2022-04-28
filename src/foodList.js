export default function foodList({ foods }) {
    return (
      foods.map((food) => 
        <foodItem
          key={food.name}
          food={food} />
      )
    );
}