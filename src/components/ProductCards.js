import React from "react";
import "./ProductCards.css";

const ProductCards = props => {
  let { title, categories, price, images, sub_categories } = props.product;
  return (
    <div className="category-card">
      <div>
        <img
          className="image-in-whatnew-section"
          src={images[0]}
          alt="product"
        />
        <h2>{title}</h2>
      </div>
      <div className="card-details-spacing">
        <p>Categories: {categories[0]}</p>
        <p>
          Sub-Category:{" "}
          {sub_categories[0] !== undefined && sub_categories[0] !== null
            ? sub_categories[0]
            : "No Sub-Category"}
        </p>
        <h3>${price}</h3>
      </div>
    </div>
  );
};
export default ProductCards;
