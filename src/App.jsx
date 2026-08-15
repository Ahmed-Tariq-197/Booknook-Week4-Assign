import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import SearchBar from "./components/SearchBar.jsx";
import FavoritesToggle from "./components/FavoritesToggle.jsx";
import BookList from "./components/BookList.jsx";
import Footer from "./components/Footer.jsx";
import books from "./data/books.js";
import useFavorites from "./hooks/useFavorites.js";
import useDebounce from "./hooks/useDebounce.js";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  // custom hook: everything about favorites (state + saving it) lives in here
  const { isFavorite, toggleFavorite } = useFavorites();

  // custom hook: don't re-filter on every keystroke, wait for a short pause
  const debouncedSearch = useDebounce(searchText, 300);

  // build the category list from the data instead of typing it out by hand
  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const visibleBooks = books
    .filter((book) => activeCategory === "All" || book.category === activeCategory)
    .filter((book) =>
      `${book.title} ${book.author}`
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    )
    .filter((book) => !favoritesOnly || isFavorite(book.id));

  // useEffect: keep the browser tab title showing how many books match right now
  useEffect(() => {
    document.title = `BookNook (${visibleBooks.length})`;
  }, [visibleBooks.length]);

  return (
    <div className="app container">
      <Header
        title="BookNook"
        subtitle="A small catalog of books worth staying up for."
        totalBooks={books.length}
      />

      <div className="toolbar d-flex flex-wrap gap-2 align-items-center">
        <SearchBar value={searchText} onChange={setSearchText} />
        <FavoritesToggle
          active={favoritesOnly}
          onClick={() => setFavoritesOnly((prev) => !prev)}
        />
      </div>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <BookList
        books={visibleBooks}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />

      <Footer year={2026} />
    </div>
  );
}

export default App;
