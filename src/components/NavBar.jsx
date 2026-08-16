import { NavLink } from "react-router-dom";

function NavBar() {
  // NavLink gives us isActive for free so the current page can be highlighted
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

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
    </nav>
  );
}

export default NavBar;
