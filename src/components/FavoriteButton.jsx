// styled inline on purpose - it's just two properties that flip based on
// state, didn't feel like it was worth its own css class for that
function FavoriteButton({ active, onToggle }) {
  const starStyle = {
    color: active ? "#c98a3e" : "#c9c4b6",
    fontSize: "1.2rem",
    cursor: "pointer",
    lineHeight: 1,
  };

  return (
    <span
      style={starStyle}
      onClick={onToggle}
      role="button"
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
    >
      {active ? "★" : "☆"}
    </span>
  );
}

export default FavoriteButton;
