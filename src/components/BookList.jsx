import BookCard from "./BookCard.jsx";

function BookList({ books }) {
  return (
    <section className="book-grid">
      {/* ternary operator: either show the results or an empty-state message */}
      {books.length > 0 ? (
        // .map(): render one reusable BookCard per book in the array
        books.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <p className="empty-state">No books match this category yet.</p>
      )}
    </section>
  );
}

export default BookList;
