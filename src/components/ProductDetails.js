import React from "react";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";

const ProductDetails = props => {
  console.log(props.location.state.product)
  let { price, product_id, sku, title } = props.location.state.product;
  let { product } = props.location.state;

  return (
    <React.Fragment>
      <ThemeConsumer>
        {value => {
          console.log(value);
          return (
            <div className="card">
              <h1>{title}</h1>
              <p>{price}</p>
              <p>{product_id}</p>
              <p>{sku}</p>
              <Link to="/products">
                <button
                  className="btn"
                  onClick={() => {
                    value.addToCart(product);
                  }}
                >
                  add
                </button>
              </Link>
            </div>
          );
        }}
      </ThemeConsumer>
    </React.Fragment>
  );
};

export default ProductDetails;
