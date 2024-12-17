import React from "react";
import { Link } from "react-router-dom";

const RecipeItemTest = ({ recipe }) => {
  return (
    // <div className="category-card">
    //   <Link to={`/details/${recipe.name}`}>
    //     <img className="category-images" src={recipe.image} />
    //   </Link>
    //   <h3>{recipe.name}</h3>
    //   <p>{recipe.description}</p>
    // </div>
    <div>
      <div className="category-card2">
        <div className="category-div">
          <Link to={`/details/${recipe.name}`}>
            <img className="category-images" src={recipe.image} />
          </Link>

          <p>{recipe.name}</p>
          <p>{recipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItemTest;
