import React, { Component } from "react";
import "./WhatsNewSection.css";
import { Link } from "react-router-dom";

import NewProductCards from "./NewProductCards";
import { ThemeConsumer } from "../context/theme";

export default class WhatsNewSection extends Component {
  render() {
    return (
      <section className='whats-new-section'>
        <h3>Whats New Section</h3>
        <div className='whatsnew'>
        <ThemeConsumer>
          {value => {
            return value.products.map((product, index) => {
              if(product.new === true){
                // console.log(product)
                return (
                  <Link key={index}
                  to={{
                      pathname: "/productdetails",
                      state: {
                        product: product
                      }
                    }}
                  >
                    <NewProductCards key={index} product={product} />
                  </Link>
                );
              }
            });
          }}
        </ThemeConsumer>

          
        </div>
        <p>........</p>
      </section>
    );
  }
}