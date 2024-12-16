import React from "react";

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
