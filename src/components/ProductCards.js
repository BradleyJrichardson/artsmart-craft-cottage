import React from "react";

const ProductCards = props => {
  let { title, categories, price, images, sub_categories } = props.product;
  return (
    <div className="card">
      <img className='image-in-whatnew-section'src={images[0]} alt='product'/>
      <h1>{title}</h1>
      <p className='brandTitle'>Categories: {categories[0]}</p>
      <p className='brandTitle'>Sub-Category: { sub_categories[0] !== undefined && sub_categories[0] !== null ? sub_categories[0] : 'No Sub-Category'}</p>
      
      <h3>${price}</h3> 
    </div>
  );
};
export default ProductCards;
