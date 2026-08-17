import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext.jsx";

function NavBar() {
  // NavLink gives us isActive for free so the current page can be highlighted
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  // redux: how many items are sitting in the cart right now
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  // context: current theme + a way to flip it, shared app-wide
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar-custom">
      <NavLink to="/" end className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
      <NavLink to="/contact" className={linkClass}>
        Contact
      </NavLink>
      <NavLink to="/cart" className={linkClass}>
        Cart{cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </NavLink>

      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
      </button>
    </nav>
  );
}

export default NavBar;
