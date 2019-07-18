import React from "react";

const ProductCards = props => {
  let { title, categories, price, images } = props.product;
  return (
    <div className="card">
      <img className='image-in-whatnew-section'src={images[0]} alt='product'/>
      <h1>{title}</h1>
      <p>
        Categories: {categories[0]} | <span>{categories[1]}</span>
      </p>
      <h3>${price}</h3>
    </div>
  );
};
export default ProductCards;
