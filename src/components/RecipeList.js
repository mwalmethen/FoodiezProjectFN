import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import recipes from "../DummyData";
import RecipeDetail from "./RecipeDetail";
import RecipeItem from "./RecipeItem";
import { Field, Form, Formik } from "formik";
import { Navigate, useNavigate } from "react-router";
// import { checkToken } from '../API/storage'
import { getAllRecipes } from "../api/recipe";
import "../css/recipe.css";
import AppLoading from "./AppLoading";

const RecipeList = () => {
  const [chef, setChef] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  // const handleSearch = (event) =>setSearch(event.target.value)
  const handleChef = (event) => setChef(event.target.value);

  const { data, isFetching, isSuccess, refetch, isFetched } = useQuery({
    queryKey: ["RecipesList"],
    queryFn: getAllRecipes,
    enabled: true,
  });

  if (isFetching) {
    return <AppLoading />;
  }

  // >> Array of Transactions Objects
  const isAuthorized = { id: data?.id, name: data?.name };

  const categoryTemp = [
    ...new Set(data?.allRecipes.map((recipe) => recipe.category.name)),
  ];

  console.log(category);

  const categoryList = categoryTemp.map((category) => {
    return <option value={category}>{category}</option>;
  });

  const recipes = data?.allRecipes
    ?.filter((recipe) => recipe.creator.name.includes(chef))
    .filter((recipe) => recipe.category.name.includes(category))
    // .filter((recipe) =>
    //   recipe.ingredientsAmount.filter((ingredient) =>
    //     ingredient.name.includes(search)
    //   )
    // )
    .map((recipe) => (
      <RecipeItem
        recipe={recipe}
        isAuthorized={isAuthorized}
        refetch={refetch}
      />
    ));

  // const recipesCreator = recipes.filter((recipe) => recipesCreator === type);

  // data._id, data.type, data.amount, data.from, data.to, data.createdAt, data.updatedAt, data.__v >> Object keys

  // if (isFetching) {
  //   return <LoadingMobile name={"Recipes"} />;
  // }

  // if (isFetched) {
  // }

  return (
    <div className="main-div-recipes-list">
      <Formik initialValues={{ recipes: "" }}>
        <Form>
          <div className="text-h3-div">
            <h2 className="text-h3">Search For A Recipe</h2>
          </div>

          <div className="chef-filter">
            <div className="button-label">
              {/* "All" Button */}
              <button
                onClick={handleChef} // Pass an empty value to handleChef
                className="type-button"
              >
                All
              </button>

              {/* Button for the Authorized Chef */}
              <button
                onClick={handleChef}
                type="radio"
                name="chef"
                value={isAuthorized?.name} // Pass the chef's name
                className="type-button"
              >
                {isAuthorized?.name || "My Recipes"}{" "}
                {/* Fallback to "Chef" if no name */}
              </button>
            </div>
            <div className="category-filter">
              <Field
                as="select"
                name="category"
                className="type-selector"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">All</option>;{categoryList}
              </Field>
            </div>
            <div>
              <button className="btn-btn-refresh" onClick={refetch}>
                refresh
              </button>
            </div>
          </div>
          {/* <div class="chef-filter">
            <div className="text-label">
              <label>
                <Field
                  onClick={handleChef}
                  type="radio"
                  name="chef"
                  value=""
                  className="type"
                />
                <span className="all">All</span>
              </label>
              <label>
                <Field
                  onClick={handleChef}
                  type="radio"
                  name="chef"
                  value={isAuthorized?.name}
                  className="type"
                />
                <span>{isAuthorized?.name}</span>
              </label>
            </div>
          </div> */}
        </Form>
      </Formik>
      <div className="recipe-list">
        {recipes}
        {/* {recipes.map((recipe) => (<RecipeItem key={recipe.id} recipe={recipe} />))} */}
      </div>
    </div>
  );
};

export default RecipeList;
