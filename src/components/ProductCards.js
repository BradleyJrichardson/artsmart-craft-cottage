import React from "react";

const ProductCards = props => {
  let { title, categories, price, images, sub_categories } = props.product;
  console.log(sub_categories[0] )
  return (
    <div className="card">
      <img className='image-in-whatnew-section'src={images[0]} alt='product'/>
      <h1>{title}</h1>
      <p>Categories: {categories[0]}</p>
      <p>Sub-Category: { sub_categories[0] !== undefined && sub_categories[0] !== null ? sub_categories[0] : 'No Sub-Category'}</p>
      
      <h3>${price}</h3> 
    </div>
  );
};
export default ProductCards;
