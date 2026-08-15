import styled from "styled-components";

// same look as the category buttons, just built with styled-components
// instead of a css class this time
const ToggleButton = styled.button`
  border: 1px solid ${(props) => (props.$active ? "#c98a3e" : "#c9c4b6")};
  background: ${(props) => (props.$active ? "#c98a3e" : "#fff")};
  color: ${(props) => (props.$active ? "#fff" : "#3a362f")};
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;

  &:hover {
    background: ${(props) => (props.$active ? "#b57a34" : "#ece8dd")};
  }
`;

function FavoritesToggle({ active, onClick }) {
  return (
    <ToggleButton $active={active} onClick={onClick}>
      {active ? "★ Favorites only" : "☆ Show favorites"}
    </ToggleButton>
  );
}

export default FavoritesToggle;
