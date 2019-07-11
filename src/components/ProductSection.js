import React, { Component } from "react";
import ProductCards from "./ProductCards";
import { ThemeConsumer } from "../context/theme";

export default class ProductSection extends Component {
  render() {
    return (
      <section>
        <ThemeConsumer>
          {value => {
            console.log("from product section", value);
            return value.products.map(product => {
              return <ProductCards product={product} />;
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
