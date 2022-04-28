

export default function Animal({ name, biome, colors }) {
  return (
    <div className='animal-card'>
      <p>{name}</p>
      <p>{biome}</p>
      <ul className='colors'>
        {
          colors.map(color => <li key={color.name}>{color.name}</li>)
        }
      </ul>
    </div>  
  );
}