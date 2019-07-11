import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>
          Navbar -------------{" "}
          <Link to="/">
            <span>Home |</span>
          </Link>{" "}
          <Link to="/checkout">
            <span>Checkout</span>
          </Link>{" "}
          <Link to="/products">
            <span>All products</span>
          </Link>{" "}
        </h1>
      </nav>
    );
  }
}
