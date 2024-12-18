import React, { useState } from "react";
import "../css/newrecipe.css";
import { Formik, Form, Field } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api/category";
import { addRecipe } from "../api/recipe";

const User = () => {
  const { data, isFetching, isSuccess, refetch, isFetched } = useQuery({
    queryKey: ["CategoriesList"],
    queryFn: getAllCategories,
    enabled: true,
  });

  const mutation = useMutation({
    mutationFn: (formData) => addRecipe(formData),
    // onSuccess: () => {
    //   navigate("/Home");
    // },
  });

  const isAuthorized = { id: data?.id, name: data?.name };

  const categoryTemp = [...new Set(data?.allCategories)];

  const [recipe, setRecipe] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [ingredientsData, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = () =>
    mutation.mutate({
      recipe,
      category,
      image: image,
      ingredientsData: ingredientsData.split("\n"),
      steps: steps.split("\n"),
      creator: isAuthorized.id,
      isSubRequest: true,
    });
  console.log({
    recipe,
    category,
    image: image,
    ingredientsData: ingredientsData.split("\n"),
    steps: steps.split("\n"),
    creator: isAuthorized.id,
    isSubRequest: true,
  });

  // const handleSearch = (event) =>setSearch(event.target.value)
  //   const handleChef = (event) => setChef(event.target.value);

  // >> Array of Transactions Objects

  const categoryList = categoryTemp.map((category) => {
    return (
      <option value={category.name} className="text-h3-box">
        {category.name}
      </option>
    );
  });

  return (
    <div className="new-recipe">
      <Formik initialValues={{ recipe: "" }} onSubmit={handleSubmit}>
        <Form>
          <label className="text-h3">
            Select the category
            <Field
              as="select"
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="text-h3-box"
            >
              {categoryList}
            </Field>
          </label>

          <label className="text-h3">
            Recipe Name
            <input
              type="text"
              onChange={(e) => setRecipe(e.target.value)}
              name="recipe"
              className="text-h3-box"
            />
          </label>

          <label className="text-h3">
            Ingredients
            <Field
              onChange={(e) => setIngredients(e.target.value)}
              as="textarea"
              name="ingredients"
              className="text-h3-box textarea"
            />
          </label>
          <label className="text-h3">
            The steps
            <Field
              onChange={(e) => setSteps(e.target.value)}
              as="textarea"
              name="steps"
              className="text-h3-box textarea"
            />
          </label>
          <label className="text-h3">
            Image
            <Field
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              name="image"
              className="text-h3-box"
            />
          </label>

          <div>
            <button className="btn-btn-refresh" onSubmit>
              Create
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default User;
