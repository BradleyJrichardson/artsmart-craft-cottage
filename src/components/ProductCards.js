import React from "react";
import "./ProductCards.css";

const ProductCards = props => {
  let { title, categories, price, images, sub_categories } = props.product;
  return (
    <div className="card-deck">
      <div id="product-card" className="card text-center">
        <img src={images[0]} class="card-img-top" alt="product" />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">${price}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Category: {categories[0]}</li>
          <li className="list-group-item">
            Sub-Category:{" "}
            {sub_categories[0] !== undefined && sub_categories[0] !== null
              ? sub_categories[0]
              : "No Sub-Category"}
          </li>
        </ul>
        {/* <div class="card-footer">
          <small class="text-muted">${price}</small>
        </div> */}
      </div>
    </div>
  );
};
export default ProductCards;

{
  /* <div className="card" style="width: 18rem;">
  <div>
    <img className="image-in-whatnew-section" src={images[0]} alt="product" />
    <h2>{title}</h2>
  </div>
  <div className="card-details-spacing">
    <p>Categories: {categories[0]}</p>
    <p>
      Sub-Category:{" "}
      {sub_categories[0] !== undefined && sub_categories[0] !== null
        ? sub_categories[0]
        : "No Sub-Category"}
    </p>
    <h3>${price}</h3>
  </div>
</div>; */
}
