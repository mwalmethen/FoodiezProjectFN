import React from "react";
import recipes from "../DummyData";
import RecipeItemTest from "./RecipeItemTest";
import "../css/style.css";

const RecipeTest = () => {
  return (
    <div className="main-category-div2">
      <div className="category-list2">
        {recipes.map((recipe) => (
          <RecipeItemTest key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeTest;
