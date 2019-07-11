import React, { Component } from "react";
import ProductCards from "./ProductCards";
import ProductConsumer from "../context/Context";

export default class ProductSection extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {/* {globalState => {
            globalState.products.map(product => (
              <ProductCards product={product} />
            ));
          }} */}
          {value => console.log(value)}
          <h1>hello</h1>
        </ProductConsumer>
      </section>
    );
  }
}
