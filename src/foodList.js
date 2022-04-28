import food from "./foodItem";

export default function foodList({ foods }) {
    return (
      foods.map((food) => 
        <Food
          key={food.name}
          food={food} />
      )
    );
}