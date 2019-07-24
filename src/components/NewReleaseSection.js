import React, { Component } from "react";
import "./NewReleaseSection.css";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";
import home2 from "../images/home2.jpg";

export default class NewReleaseSection extends Component {

  findTheProduct = (products) => {
    return products.find((product) => {
      return product.categories[0] === 'new release';
    })
  }

  render() {
    return (
      <ThemeConsumer>
        {value => {
          const foundProduct = this.findTheProduct(value.products)
          return(
            <Link 
            to={{
              pathname: "/productdetails",
              state: {
                product: foundProduct,
              }
            }}
          >
            <div
              id="new-release-section"
              className="card bg-light text-black w-100"
            >
                <img src={home2} className="card-img" alt="Whats new" />
                <div className="card-img-overlay p-1 ">
                  <h3 className="new-release-text">New Release</h3>
                </div>
            </div>
          </Link>
          )
        }}
      </ThemeConsumer>
    )
  }
}
