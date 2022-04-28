export default function drinkList({ drinks }) {
    return (
      drinks.map((drink) => 
        <drink
          key={drink.name}
          drink={drink} />
      )
    );
}
