export default function animal({ animal }) {
    let mappedColors = animal.colors.map((animalItem) => 
    <animalItem
      key={animalItem.name}
      color1={animalItem.color1}
      color2={animalItem.color2}
      color3={animalItem.color3}
      />
  )
    return (
      <div className='animal-card'>
        <p>{animal.name}</p>
        <p>{animal.biome}</p>
        <p>{mappedColors}</p>
      </div>  
    );
  }