import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import defaultImage from "../pics/recipe.svg";
import recipeDetails from "../pics/recipeDetails.png";
import saveIcon from "../pics/save.svg";
import likeIcon from "../pics/like.svg";
import alertIcon from "../pics/alert.svg";
import { deleteRecipe, likeRecipe } from "../api/recipe";
import { useMutation, useQuery } from "@tanstack/react-query";

const RecipeItem = ({ recipe, isAuthorized, refetch }) => {
  const navigate = useNavigate();

  const [deletePopover, setPopover] = useState(false);
  const [option, setOption] = useState("");

  // const mutation = useMutation({
  //   mutationKey: ["edit"],
  //   mutationFn: (editData) => edit(editData),
  // });

  const LikeMutation = useMutation({
    mutationKey: ["like"],
    mutationFn: (likedData) => {
      // console.log(likedData);
      likeRecipe(likedData);
    },
    // onSuccess: () => refetch(),
  });

  const saveMutation = useMutation({
    mutationKey: [""],
    mutationFn: (option) => likeRecipe(option),
  });

  const reportMutation = useMutation({
    mutationKey: [""],
    mutationFn: (option) => likeRecipe(option),
  });

  const deleteMutation = useMutation({
    mutationKey: ["DeleteRecipe"],
    mutationFn: (recipeName) => deleteRecipe(recipeName),
  });

  const handleDelete = () => {
    deleteMutation.mutate(recipe.name);
    refetch();
    setPopover(false);
  };

  const handleOptionLike = (e) => {
    // console.log(`likeRecipe(${recipe._id} ${isAuthorized.id})`);
    let id = recipe._id;
    let rate = 1;
    let user = isAuthorized.id;
    LikeMutation.mutate({ id, review: { rate, user } });
    refetch();
  };

  const handleOptionReport = (e) => {
    console.log(`reportRecipe(${recipe.name} ${isAuthorized.id})`);
    reportMutation.mutate(option);
  };

  const handleOptionSave = (e) => {
    console.log(`saveRecipe(${recipe.name} ${isAuthorized.id})`);
    saveMutation.mutate(option);
  };

  // const handleEdit = (receiver) => {
  //   transferData.username = myUser.data.username;
  //   setReceiver(receiver);
  //   mutation.mutate(transferData);
  // };

  let rate = recipe.reviews
    .map((review) => review.rate)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  let options = (
    <div className="options">
      <div className="option option-blue" onClick={handleOptionLike}>
        <span className="icon-container">
          <span className="text">{rate}</span>
          <svg
            className="icon icon--blue"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="option option-tomato" onClick={handleOptionReport}>
        <span className="icon-container">
          <svg
            className="icon icon--tomato"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9.22843V14.7716C3 15.302 3.21071 15.8107 3.58579 16.1858L7.81421 20.4142C8.18929 20.7893 8.69799 21 9.22843 21H14.7716C15.302 21 15.8107 20.7893 16.1858 20.4142L20.4142 16.1858C20.7893 15.8107 21 15.302 21 14.7716V9.22843C21 8.69799 20.7893 8.18929 20.4142 7.81421L16.1858 3.58579C15.8107 3.21071 15.302 3 14.7716 3H9.22843C8.69799 3 8.18929 3.21071 7.81421 3.58579L3.58579 7.81421C3.21071 8.18929 3 8.69799 3 9.22843Z"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 8V13"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M12 16V15.9888"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </div>
      <div className="option option-green" onClick={handleOptionSave}>
        <span className="icon-container">
          <svg
            className="icon icon--green"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            {" "}
            <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z" />
          </svg>
        </span>
      </div>
    </div>
  );

  let isOwner = recipe.creator._id == isAuthorized.id;
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
        <div class="recipe-name recipe-text ">{recipe.name}</div>
        <div class="ingredients recipe-text ">{ingredients}</div>
        <div class="steps recipe-text ">{steps}</div>
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
