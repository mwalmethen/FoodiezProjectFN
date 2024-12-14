import React from "react";
import CategoryForm from "./CategoryForm";

const CategoryDetail = ({ category }) => {
  return (
    <div>
      <div className="category-card">
        <div className="category-div">
          <img className="category-images" src={category.image} />
          <p>{category.name}</p>
          <p>{category.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
