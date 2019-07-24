import React from "react";
import "./ProductCards.css";

const ProductCards = props => {
  let { title, categories, price, images, sub_categories } = props.product;
  return (
    <div className="card-deck ">
      <div id="product-card" className="card text-center">
        <img src={images[0]} class="card-img-top" alt="product" />
        <div className="card-body">
          <h5 classN="card-text">{title}</h5>
          <h4
            className="card-text"
            style={{ fontFamily: "Alex Brush", fontWeight: "600" }}
          >
            ${price}
          </h4>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p>
              <span
                style={{ color: "rgba(0, 0, 0, 0.753)", fontSize: "1.1rem" }}
              >
                Category:
              </span>{" "}
              <span style={{ color: "#86B9B6" }}>{categories[0]}</span>
            </p>
          </li>
          <li className="list-group-item">

            {sub_categories[0] !== undefined && sub_categories[0] !== null
              ? <p><span style={{ color: '#86B9B6' , fontSize: '1.1rem'}} >Sub-Category:</span> <span style={{ color: 'rgba(0, 0, 0, 0.600)' }}>{sub_categories[0]}</span></p>
              : ""}

          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCards;
