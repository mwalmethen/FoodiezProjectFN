import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <div className="recipe-card">
        <div className="recipes-div">
          <Link to={`/details/${recipe.name}`}>
            <img className="recipe-images" src={recipe.image} />
          </Link>

          <p>{recipe.name}</p>
          <p>{recipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
