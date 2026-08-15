import { useState, useEffect } from "react";

const STORAGE_KEY = "booknook-favorites";

// tracks which book ids the user starred and keeps it saved in localStorage
// so the list is still there next time they open the page
function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  function toggleFavorite(id) {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  function isFavorite(id) {
    return favoriteIds.includes(id);
  }

  return { favoriteIds, toggleFavorite, isFavorite };
}

export default useFavorites;
