import React, { Component } from "react";

import SubCategoryCards from "./SubCategoryCards";

import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";

export default class SubCategories extends Component {
  state = {};

  render() {
    if (!this.props.location) {
      return null;
    } else {
      const { subcategories } = this.props.location.state;
      return (
        <section className="card-container">
          <ThemeConsumer>
            {value => {
              return subcategories.map((item, index) => {
                if (subcategories) {
                  return (
                    <Link
                      key={index}
                      to={{
                        pathname: `/subcategoryproducts/${item.name}`,
                        state: {
                          subcategories: item.name.toLowerCase()
                        }
                      }}
                    >
                      <SubCategoryCards key={index} item={item} />
                    </Link>
                  );
                }
                return <h1>not exist</h1>;
              });
            }}
          </ThemeConsumer>
        </section>
      );
    }
  }
}
