import React, { useEffect, useState } from "react";
import categories from "../DummyData2";
import CategoryDetail from "./CategoryDetail";
import CategoryForm from "./CategoryForm";
import { getAllCategories, addCategory } from "../api/category";
import { useQuery, useMutation } from "@tanstack/react-query";

const CategoryList = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const { data } = useQuery({
    queryKey: ["categoryList"], // Query key
    queryFn: getAllCategories, // Query function
  });

  // adding new category

  const mutation = useMutation({
    mutationKey: ["Data"],
    mutationFn: (newData) => addCategory(newData),
  });

  const handleSubmit = () => {
    mutation.mutate({
      category: name,
      image: image,
    });
  };
  return (
    <div className="main-category-div">
      <div className="category-home-div">
        <h2 className="category-text"> Explore Our Categories </h2>
      </div>
      <div className="category-list">
        {data?.map((category) => (
          <CategoryDetail key={category.id} category={category} />
        ))}
        <div className="categoryform-div-category">
          <input
            name="category"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            name="image"
            type="file"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <div>
            <button
              className="w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-green-400"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
