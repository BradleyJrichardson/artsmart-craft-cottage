import React from "react";

const NewProductCards = props => {
  let { images, categories } = props.product;
  return (
    <div className="whats-new-section-card">
      <img className='image-in-whatnew-section' src={images} alt='placeholder' />
      <p>
        {categories}
      </p>
      
    </div>
  );
};
export default NewProductCards;