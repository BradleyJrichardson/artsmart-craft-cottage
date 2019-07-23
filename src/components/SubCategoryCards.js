import React from "react";


const SubCategoryCards = props => {
  let { name, image } = props.item;
  return (
    <div className="whats-new-section-card">
      <img className='image-in-whatnew-section'src={image} alt='categoryDisplay'/>
      <p>
        {name}
      </p>
    
    </div>
  )
  // if(name){
  //   // return subcategories.map( subCategory => {
  //     return(
  //       <div>
  //         <h1>{name}</h1>
  //         <img className='image-in-whatnew-section' src={image} alt='subcategories'/>
  //       </div>
  //     )
  //   } else {
  //   return <p>Nothing</p>
  // }
    // return null
    // <div className="whats-new-section-card">
    //   <img className='image-in-whatnew-section'src={image} alt='categoryDisplay'/>
    //   <p>
    //     {name}
    //   </p>
      
    // </div>
  // );
};
export default SubCategoryCards;