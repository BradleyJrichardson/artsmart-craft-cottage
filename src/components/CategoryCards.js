import React from "react";
import categoryPackage from "./HomePageCategorySection";

const CategoryCards = props => {
  let { image, category } = props.categoryDisplay;
  return (
    <div className="whats-new-section-card">
      <img className='image-in-whatnew-section'src={image} alt='categoryDisplay'/>
      <p>
        {category}
      </p>
      
    </div>
  );
};
export default CategoryCards;