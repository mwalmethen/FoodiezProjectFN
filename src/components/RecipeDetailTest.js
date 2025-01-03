import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../DummyData";

const RecipeDetailTest = () => {
  const { recipeName } = useParams();
  const recipe = recipes.find((recipe) => recipe.name === recipeName);

  return (
    <div className="main-recipe-div">
      <div>
        <div className="recipes-div-detail">
          <img className="recipe-images-detail" src={recipe.image} />
          <h1>{recipe.name}</h1>
          <h2>{recipe.description}</h2>
          <div>
            <h2>Ingredients: </h2>
            <h4>{recipe.making}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailTest;
