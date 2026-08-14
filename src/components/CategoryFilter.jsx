function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="filter-bar">
      {/* .map(): turn the categories array into a row of buttons */}
      {categories.map((category) => (
        <button
          key={category}
          className={
            category === activeCategory ? "filter-btn active" : "filter-btn"
          }
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
