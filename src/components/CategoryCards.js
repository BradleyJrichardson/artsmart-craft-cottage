import React from "react";

const CategoryCards = props => {
  let { image, category } = props.object;
  return (
    <div className="whats-new-section-card">
      <img className='image-in-categoery-section'src={image} alt='categoryDisplay'/>
      <p className = 'home-page-text'>
        {category}
      </p>
      

    </div>
  );
};
export default CategoryCards;
