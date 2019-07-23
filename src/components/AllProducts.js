import React, { Component } from "react";
import ProductCards from "./ProductCards";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";

export default class AllProducts extends Component {
  render() {
    return (
      <section className="card-container">
        <ThemeConsumer>
          {value => {
            return value.products.map((product, index) => {
              return (
                <Link
                  key={index}
                  to={{
                    pathname: "/productdetails",
                    state: {
                      product: product
                    }
                  }}
                >
                  <ProductCards key={index} product={product} />
                </Link>
              );
            });
          }}
        </ThemeConsumer>
      </section>
    );
  }
}
