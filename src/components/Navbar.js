import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

export const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="Nav-container">
      <div className="logo-text-nav">Foodiez</div>

      <div
        className={`Nav-home-product ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(false)} // Close menu on item click
      >
        <h2>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </h2>
        <h2>
          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Categories
          </NavLink>
        </h2>
        <h2>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Recipes
          </NavLink>
        </h2>
        <h2>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Ingredients
          </NavLink>
        </h2>
      </div>
      <div
        className={`Nav-toggle ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
