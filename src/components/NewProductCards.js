import React from "react";

const NewProductCards = props => {
  let { images, title } = props.product;
  let upcase = title.toUpperCase();
  return (
    <div className="whats-new-section-card">
      <img className="image-in-whatnew-section" src={images[0]} alt="product" />
      <p className="whats-new-text mt-2 mb-2">{upcase}</p>
    </div>
  );
};

export default NewProductCards;
