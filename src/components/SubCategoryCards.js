import React from "react";

const SubCategoryCards = props => {
  let { name, image } = props.item;
  return (
    <div className="whats-new-section-card">
      <img
        className="image-in-whatnew-section"
        src={image}
        alt="categoryDisplay"
      />
      <p className="mt-2 mb-2">{name}</p>
    </div>
  );
};
export default SubCategoryCards;
