import React, { Component } from "react";
import ProductCards from "./ProductCards";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";

export default class SubCategories extends Component {
  state = { }

  render() {
    console.log(this.props)
    if (!this.props.location) {
      return   <h1>SUB CATEGORIES</h1>
    } else {
      return (
      <section className="card-container">
        <h1>SUB CATEGORIES</h1>
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
