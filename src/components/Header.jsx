function Header({ title, subtitle, totalBooks }) {
  return (
    <header className="header">
      <div className="header-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {/* && operator: only show the count badge if we actually have books */}
      {totalBooks > 0 && (
        <span className="header-count">{totalBooks} books available</span>
      )}
    </header>
  );
}

export default Header;
