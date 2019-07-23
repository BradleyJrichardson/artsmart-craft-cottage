import React from "react";
import { Link } from "react-router-dom";


const CategoryCards = props => {
  let { image, category} = props.object;
  console.log(props)
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

