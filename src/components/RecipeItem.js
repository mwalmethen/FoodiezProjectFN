import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import defaultImage from "../pics/recipe.svg";
import recipeDetails from "../pics/recipeDetails.png";
import saveIcon from "../pics/save.svg";
import likeIcon from "../pics/like.svg";
import alertIcon from "../pics/alert.svg";
import { deleteRecipe } from "../api/recipe";
import { useMutation, useQuery } from "@tanstack/react-query";

const RecipeItem = ({ recipe, isAuthorized, refetch }) => {
  const navigate = useNavigate();

  const [deletePopover, setPopover] = useState(false);

  // const handleEdit = (receiver) => {
  //   transferData.username = myUser.data.username;
  //   setReceiver(receiver);
  //   mutation.mutate(transferData);
  // };

  const handleDelete = () => {
    deleteMutation.mutate(recipe.name);
    refetch();
    setPopover(false);
  };

  // const mutation = useMutation({
  //   mutationKey: ["edit"],
  //   mutationFn: (editData) => edit(editData),
  // });

  const deleteMutation = useMutation({
    mutationKey: ["DeleteRecipe"],
    mutationFn: (recipeName) => deleteRecipe(recipeName),
  });

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
  let isOwner = recipe.creator._id == isAuthorized.id;
  // console.log(recipe.creator._id);
  // console.log(isAuthorized.id);
  // console.log(isOwner);
  let image = recipe.image || defaultImage;
  let ingredients = recipe.ingredientsAmount.map((ingredient) => (
    <div className="ingredient">
      <span className="ingredient-amount">{ingredient.amount}</span>
      <span className="ingredient-type">{ingredient.type}</span>
      <span className="ingredient-name">{ingredient.name}</span>
    </div>
  ));
  let steps = recipe.steps.map((step) => (
    <div className="step">{step.step}</div>
  ));
  let recipe_popover = (
    <div id={recipe.name} popover="">
      <div className="details">
        <div class="recipe-name">{recipe.name}</div>
        <div class="ingredients">{ingredients}</div>
        <div class="steps">{steps}</div>
        {options}
      </div>
    </div>
  );

  let edit_popover = (
    <div id={`${recipe.name}-edit`} className="edit" popover="">
      <div className="details">
        <div class="recipe-name">edit ?</div>
      </div>
    </div>
  );

  let delete_popover = (
    <div id={`${recipe.name}-delete`} className="delete" popover="manual">
      <div className="details">
        <button onClick={handleDelete}>Yes</button>
        <button onClick={() => setPopover(false)}>No</button>
      </div>
    </div>
  );
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
        <p>Created by {recipe.creator.name || ""}</p>
        <button popoverTarget={recipe.name}>view</button>
        {isOwner && (
          <button
            popoverTarget={`${recipe.name}-edit`}
            className="edit-btn"
            onClick={() => console.log("edit")}
          >
            edit
          </button>
        )}
        {isOwner && (
          <button
            popoverTarget={`${recipe.name}-delete`}
            className="delete-btn"
            onClick={() => setPopover(true)}
          >
            delete
          </button>
        )}
        {recipe_popover}
        {edit_popover}
        {deletePopover && delete_popover}
      </div>
    </div>
  );
};

export default RecipeItem;

// reviews:Array(1) 0:{rate: 0, report: 'None', user: '675dc1db0bce2eb5ff244d4f', _id: '675ed17f48dff5695db5dcb1'}
