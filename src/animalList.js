export default function animalList({ animals }) {
    return (
      animals.map((animal) => 
        <animal
          key={animal.name}
          animal={animal} />
      )
    );
}
