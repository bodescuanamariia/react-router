import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "purble" : "grey" };
        }}
      >
        Home
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="products">Products</NavLink>
    </nav>
  );
};

export default Navbar;
