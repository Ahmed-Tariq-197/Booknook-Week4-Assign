import { useState, useEffect } from "react";
import CategoryFilter from "../components/CategoryFilter.jsx";
import SearchBar from "../components/SearchBar.jsx";
import FavoritesToggle from "../components/FavoritesToggle.jsx";
import BookList from "../components/BookList.jsx";
import books from "../data/books.js";
import useFavorites from "../hooks/useFavorites.js";
import useDebounce from "../hooks/useDebounce.js";

// this used to be most of App.jsx - moved here once routing came in,
// since the catalog is only one page now, not the whole app
function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const { isFavorite, toggleFavorite } = useFavorites();
  const debouncedSearch = useDebounce(searchText, 300);

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const visibleBooks = books
    .filter((book) => activeCategory === "All" || book.category === activeCategory)
    .filter((book) =>
      `${book.title} ${book.author}`
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    )
    .filter((book) => !favoritesOnly || isFavorite(book.id));

  useEffect(() => {
    document.title = `BookNook (${visibleBooks.length})`;
  }, [visibleBooks.length]);

  return (
    <>
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
    </>
  );
}

export default HomePage;
