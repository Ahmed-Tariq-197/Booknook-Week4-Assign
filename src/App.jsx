import { useState } from "react";
import Header from "./components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import BookList from "./components/BookList.jsx";
import Footer from "./components/Footer.jsx";
import books from "./data/books.js";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  // build the category list from the data instead of typing it out by hand
  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const visibleBooks =
    activeCategory === "All"
      ? books
      : books.filter((book) => book.category === activeCategory);

  return (
    <div className="app">
      <Header
        title="BookNook"
        subtitle="A small catalog of books worth staying up for."
        totalBooks={books.length}
      />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <BookList books={visibleBooks} />

      <Footer year={2026} />
    </div>
  );
}

export default App;
