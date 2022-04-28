import animal from "./animalItem";

export default function animalList({ animals }) {
    return (
      animals.map((animal) => 
        <Animal
          key={animal.name}
          animal={animal} />
      )
    );
}
