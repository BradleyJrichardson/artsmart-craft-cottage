import React from "react";

const ProductCards = props => {
  let { title, description, categories, price } = props.product;
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>
        Categories: {categories[0]} | <span>{categories[1]}</span>
      </p>
      <h3>${price}</h3>
    </div>
  );
};
export default ProductCards;
