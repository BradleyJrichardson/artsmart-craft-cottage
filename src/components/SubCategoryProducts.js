import React, { Component } from "react";
import ProductCards from "./ProductCards";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";

export default class SubCategoryProduct extends Component {
  state = {};

  render() {
    if (!this.props.location) {
      return null;
    } else {
      return (
        <section className="card-container">
          <ThemeConsumer>
            {value => {
              return value.products.map((product, index) => {
                if (
                  product.sub_categories.includes(
                    this.props.location.state.subcategories
                  )
                ) {
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
                }
                return null;
              });
            }}
          </ThemeConsumer>
        </section>
      );
    }
  }
}
