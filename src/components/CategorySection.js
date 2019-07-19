import React, { Component } from "react";
import ProductCards from "./ProductCards";
import SubCategories from "./SubCategories";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";
import { CLIENT_RENEG_LIMIT } from "tls";

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
              if(product.categories.includes(this.props.location.state.category)) {
                return (
                  <Link key={index}
                    to={{
                      pathname: "/productdetails",
                      state: {
                        product: product
                      }
                    }}
                  >
                    <ProductCards key={index} product={product} />
                    <SubCategories />
                  </Link>
                );
              }
              return null
            });
          }}
        </ThemeConsumer>
      </section>
    );
    }
  }
}
