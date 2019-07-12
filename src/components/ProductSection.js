import React, { Component } from "react";
import ProductCards from "./ProductCards";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";

export default class ProductSection extends Component {
  render() {
    return (
      <section className="card-container">
        <ThemeConsumer>
          {value => {
            console.log("from product section", value);
            return value.products.map(product => {
              return (
                <Link
                  to={{
                    pathname: "/productdetails",
                    state: {
                      product: product
                    }
                  }}
                >
                  <ProductCards product={product} />
                </Link>
              );
            });
          }}
        </ThemeConsumer>
      </section>
    );
  }
}

{
  /* <ThemeConsumer>
{( value ) => (
  console.log("from product section", value);
  return value.products.map(product => {
    return <ProductCards product={product} />;
)}
</ThemeConsumer> */
}
