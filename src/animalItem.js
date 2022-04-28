export default function Animal({ animal }) {
  return (
    <div className='animal-card'>
      <p>{animal.name}</p>
      <p>{animal.biome}</p>
      <p>{animal.colors.map(color => <li key={color}>{color}</li>)}</p>
    </div>  
  );
}