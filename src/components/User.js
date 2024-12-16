import React from "react";
import "../css/user.css";
const User = () => {
  return (
    <div class="user-page">
      <header class="user-header">
        <h1>Welcome, Creator</h1>
      </header>
      <main class="user-content">
        <section class="user-section my-recipes">
          <h2>My Recipes</h2>
          <ul>
            <li class="recipe-item">
              <img
                src="default-recipe.jpg"
                alt="Recipe Image"
                class="recipe-image"
              />
              <div class="recipe-details">
                <h3 className="h3">Recipe Title:</h3>
                <div className="btn-div">
                  <button class="btn view-btn">View</button>
                  <button class="btn edit-btn">Edit</button>
                  <button class="btn delete-btn">Delete</button>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section class="user-section favorite-recipes">
          <h2>My Favorite Recipes</h2>
          <ul>
            <li class="recipe-item">
              <img
                src="default-recipe.jpg"
                alt="Recipe Image"
                class="recipe-image"
              />
              <div class="recipe-details">
                <h3>Recipe Title: </h3>
                <div className="btn-div">
                  <button class="btn view-btn">View</button>
                  <button class="btn remove-btn">Remove</button>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default User;
