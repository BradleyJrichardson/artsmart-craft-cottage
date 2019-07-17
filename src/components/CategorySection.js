import React, { Component } from "react";
import ProductCards from "./ProductCards";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";

export default class CategorySection extends Component {
  state = { }

  render() {
    if (!this.props.location) {
      return null
    } else {
      return (
      <section className="card-container">
        <ThemeConsumer>
          {value => {
            return value.products.map((product, index) => {
              debugger
              if(product.categories.includes(this.props.location.state.category)) {
                return (
                  <Link key={index}
                    to={{
                      pathname: "/productdetails",
                      state: {
                        categories: product
                      }
                    }}
                  >
                    <ProductCards key={index} product={product} />
                  </Link>
                );
              }
              // need return statement here
            });
          }}
        </ThemeConsumer>
      </section>
    );
    }
  }
}
