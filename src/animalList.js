import Animal from './AnimalItem';

export default function AnimalList({ animals }) {
  return (
    animals.map((animal) => 
      <Animal
        key={animal.name}
        biome={animal.biome}
        colors={animal.colors}
        animal={animal} />
    )
  );
}
