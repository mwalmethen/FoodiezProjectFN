import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/navbar.css";
import Logout from "./LogOut";

export const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="Nav-container">
      <div className="logo-text-nav">Foodiez</div>

      <div
        className={`Nav-home-product ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(false)}
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
            to="/recipes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Recipes
          </NavLink>
        </h2>
        {token ? (
          <>
            <h2>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Create
              </NavLink>
            </h2>
            <div>
              <Logout />
            </div>
          </>
        ) : (
          <div>
            <button className="logout-btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
      <div
        className={`Nav-toggle ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../css/navbar.css";
// import Logout from "./LogOut";

// export const Navbar = () => {
//   const [menuActive, setMenuActive] = useState(false);
//   const token = localStorage.getItem("token");
//   return (
//     <div className="Nav-container">
//       <div className="logo-text-nav">Foodiez</div>

//       <div
//         className={`Nav-home-product ${menuActive ? "active" : ""}`}
//         onClick={() => setMenuActive(false)} // Close menu on item click
//       >
//         <h2>
//           <NavLink
//             to="/"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             Home
//           </NavLink>
//         </h2>
//         <h2>
//           <NavLink
//             to="/categories"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             Categories
//           </NavLink>
//         </h2>
//         <h2>
//           <NavLink
//             to="/recipes"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             Recipes
//           </NavLink>
//         </h2>
//         {token && (
//           <h2>
//             <NavLink
//               to="/profile"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               MyProfile
//             </NavLink>
//           </h2>
//         )}

//         {token && (
//           <div>
//             <Logout />
//           </div>
//         )}
//       </div>
//       <div
//         className={`Nav-toggle ${menuActive ? "active" : ""}`}
//         onClick={() => setMenuActive(!menuActive)}
//       >
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// };
