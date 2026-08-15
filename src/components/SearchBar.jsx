import styles from "./SearchBar.module.css";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className={`form-control ${styles.searchInput}`}
      placeholder="Search by title or author..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
