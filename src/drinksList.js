import drink from "./drinkItem";

export default function drinkList({ drinks }) {
    return (
      drinks.map((drink) => 
        <Drink
          key={drink.name}
          drink={drink} />
      )
    );
}
