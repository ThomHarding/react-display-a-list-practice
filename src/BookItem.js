export default function Book({ book }) {
  return (
    <div className='book-card'>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>Characters:{book.characters.map(character => <li key={character}>{character}</li>)}</p>
    </div>  
  );
}