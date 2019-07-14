import React from "react";
import { ThemeConsumer } from "../context/theme";

const ProductDetails = props => {
  let { price, product_id, sku, title } = props.location.state.product;
  let { product } = props.location.state;
  return (
    <React.Fragment>
      <ThemeConsumer>
        {value => {
          return (
            <div className="card">
              <h1>{title}</h1>
              <p>{price}</p>
              <p>{product_id}</p>
              <p>{sku}</p>
              <button
                className="btn"
                onClick={() => {
                  value.addToCart(product);
                }}
              >
                add
              </button>
            </div>
          );
        }}
      </ThemeConsumer>
    </React.Fragment>
  );
};

export default ProductDetails;
