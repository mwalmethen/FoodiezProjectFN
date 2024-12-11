import React from "react";
import "../css/style.css";
import logo from "../pics/FoodezLogo.webp";
import logo2 from "../pics/thumbsuplogo.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-div">
      <img className="logo-image" src={logo} />
      <div>
        <div className="header-div">
          <h1 className="header-text">
            "Welcome to Foodez Your Destination for Delicious Flavors and
            Memorable Meals!
          </h1>
        </div>
        <div className="header2-div">
          <Link to="/register">
            <button class="cta-button">Join us now!</button>
          </Link>
        </div>
        <img className="logo2-image" src={logo2} />
      </div>
    </div>
  );
};

export default Home;
