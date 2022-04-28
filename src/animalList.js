import Animal from './animalItem';

export default function AnimalList({ animals }) {
  return (
    animals.map((animal) => 
      <Animal
        key={animal.name}
        animal={animal} />
    )
  );
}
