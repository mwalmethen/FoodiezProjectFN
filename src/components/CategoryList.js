import React from "react";
import categories from "../DummyData2";
import CategoryDetail from "./CategoryDetail";
import CategoryForm from "./CategoryForm";

const CategoryList = () => {
  return (
    <div className="main-category-div">
      <div className="category-home-div">
        <h2 className="category-text"> Explore Our Categories </h2>
      </div>
      <div className="category-list">
        {categories.map((category) => (
          <CategoryDetail key={category.id} category={category} />
        ))}
        <div className="categoryform-div-category">
          <CategoryForm />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
