

export default function Animal({ name, biome, colors }) {
  return (
    <div className='animal-card'>
      <p>{name}</p>
      <p>{biome}</p>
      <ul className='colors'>
        <li>{colors.color1}</li>
        <li>{colors.color2}</li>
        <li>{colors.color3}</li>
      </ul>
    </div>  
  );
}
