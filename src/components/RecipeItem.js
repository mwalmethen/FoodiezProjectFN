import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../pics/recipe.svg";
import recipeDetails from "../pics/recipeDetails.png";
import saveIcon from "../pics/save.svg";
import likeIcon from "../pics/like.svg";
import alertIcon from "../pics/alert.svg";

const RecipeItem = ({ recipe }) => {
  let options = (
    <div className="options">
      <div class="option">
        <img src={likeIcon}></img>
      </div>
      <div class="option">
        <img src={saveIcon}></img>
      </div>
      <div class="option">
        <img src={alertIcon}></img>
      </div>
    </div>
  );
  let image = recipe.image || defaultImage;
  let ingredients = recipe.ingredientsAmount.map((ingredient) => (
    <div className="ingredient">
      <span className="ingredient-amount">{ingredient.amount}</span>
      <span className="ingredient-type">{ingredient.type}</span>
      <span className="ingredient-name">{ingredient.name}</span>
    </div>
  ));
  let popover = (
    <div id={recipe.name} popover="">
      <div className="details">
        <div class="recipe-name">{recipe.name}</div>
        <div class="ingredients">{ingredients}</div>
        {options}
      </div>
    </div>
  );
  console.log(ingredients);
  return (
    <div className="recipe-card">
      <div className="recipes-div">
        {/* <Link to={`/details/${recipe.name}`}>
            <img className="recipe-images" src={recipe.image} />
          </Link> */}
        <p>
          {recipe.name} - {recipe.category.name}
        </p>
        <img className="recipe-images" src={image} />
        <p>Created by {recipe.creator.name}</p>
        <button popoverTarget={recipe.name}>view</button>
        {popover}
      </div>
    </div>
  );
};

export default RecipeItem;
