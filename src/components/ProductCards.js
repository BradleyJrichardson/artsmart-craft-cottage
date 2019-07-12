import React from "react";

const ProductCards = props => {
  let { title, description, categories } = props.product;
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{categories[0]}</p>
      <p>{categories[1]}</p>
    </div>
  );
};
export default ProductCards;
