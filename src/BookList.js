import Book from './bookItem';

export default function BookList({ books }) {
  return (
    books.map((book) => 
      <Book
        key={book.name}
        book={book} />
    )
  );
}
