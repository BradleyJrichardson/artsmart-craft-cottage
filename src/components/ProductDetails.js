import React from "react";

const ProductDetails = props => {
  let { product } = props.location.state;
  console.log(product);
  return (
    <React.Fragment>
      <div />
    </React.Fragment>
  );
};

export default ProductDetails;
