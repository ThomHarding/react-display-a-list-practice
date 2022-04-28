export default function drinkList({ drinks }) {
    return (
      drinks.map((drink) => 
        <drinkItem
          key={drink.name}
          drink={drink} />
      )
    );
}
