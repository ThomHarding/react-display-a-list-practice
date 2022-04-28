export default function Animal({ animal }) {
  return (
    <div className='animal-card'>
      <p>{animal.name}</p>
      <p>{animal.biome}</p>
    </div>  
  );
}