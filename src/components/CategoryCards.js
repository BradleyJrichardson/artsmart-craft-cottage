import React from "react";
import { Link } from "react-router-dom";


const CategoryCards = props => {
  let { image, category} = props.object;
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

