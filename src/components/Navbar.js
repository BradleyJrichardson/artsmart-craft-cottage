import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          Navbar -------------{" "}
          <Link to="/">
            <span>Home</span>
          </Link>{" "}
          <Link to="/checkout">
            <span>Checkout</span>
          </Link>{" "}
        </h1>
        <p>......</p>
      </React.Fragment>
    );
  }
}
