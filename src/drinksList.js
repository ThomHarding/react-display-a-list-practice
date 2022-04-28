import Drink from './DrinkItem';

export default function DrinkList({ drinks }) {
  return (
    drinks.map((drink) => 
      <Drink
        key={drink.name}
        drink={drink} />
    )
  );
}
