import React, { useEffect, useState } from "react";
import categories from "../DummyData2";
import CategoryDetail from "./CategoryDetail";
import CategoryForm from "./CategoryForm";
import "../css/CategoryForm.css";
import { getAllCategories, addCategory } from "../api/category";
import { useQuery, useMutation } from "@tanstack/react-query";

const CategoryList = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null); // Store the file object, not the path

  const { data } = useQuery({
    queryKey: ["categoryList"], // Query key
    queryFn: getAllCategories, // Query function
  });

  // Adding new category
  const mutation = useMutation({
    mutationKey: ["Data"],
    mutationFn: (formData) => addCategory(formData),
  });

  const handleSubmit = () => {
    // Prepare FormData
    const formData = new FormData();
    formData.append("category", name);
    formData.append("image", image);

    // Mutate with FormData
    mutation.mutate(formData);
  };

  return (
    <div className="main-category-div">
      <div className="category-home-div">
        <h2 className="category-text"> Explore Our Categories </h2>
      </div>
      <div className="category-list">
        <div className="category-container">
          {data?.allCategories.map((category) => (
            <CategoryDetail key={category.id} category={category} />
          ))}
        </div>
        <div className="form-container">
          <h2 className="headline2">Add a Category</h2>
          <label htmlFor="category">Category Name</label>
          <input
            name="category"
            type="text"
            placeholder="Category Name"
            id="category"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="image">Upload Image</label>
          <input
            name="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
          />

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        {/* <div className="main-form">
          <input
            className="headline"
            name="category"
            type="text"
            placeholder="Category Name"
            // onChange={(e) => setName(e.target.value)}
          />
          <input
            name="image"
            type="file"
            // onChange={(e) => setImage(e.target.files[0])} // Store the file object
          />
          <div>
            <button
              className="w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-green-400"
              // onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CategoryList;
