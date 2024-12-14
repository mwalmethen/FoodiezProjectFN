import React from "react";
import recipes from "../DummyData";
import RecipeDetail from "./RecipeDetail";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
  return (
    <div>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
