export default function food({ food }) {
  return (
    <div className='food-card'>
      <p>{food.name}</p>
      <p>{food.delicious}</p>
      <p>${food.price}</p>
    </div>  
  );
}