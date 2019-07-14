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
            return value.products.map((product, index) => {
              return (
                <Link
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
