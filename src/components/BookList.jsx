import BookCard from "./BookCard.jsx";

function BookList({ books, isFavorite, onToggleFavorite }) {
  return (
    <section className="book-grid">
      {/* ternary operator: either show the results or an empty-state message */}
      {books.length > 0 ? (
        // .map(): render one reusable BookCard per book in the array
        books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            isFavorite={isFavorite(book.id)}
            onToggleFavorite={() => onToggleFavorite(book.id)}
          />
        ))
      ) : (
        <p className="empty-state">No books match this category yet.</p>
      )}
    </section>
  );
}

export default BookList;
