import Book from './BookItem';

export default function BookList({ books }) {
  return (
    books.map((book) => 
      <Book
        key={book.name}
        book={book} />
    )
  );
}
