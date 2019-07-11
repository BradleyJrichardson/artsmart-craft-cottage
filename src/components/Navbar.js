import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navContainer'>
        <div className='brandContainer'>
          <h1 className='brand'>Artsmart Craft Cottage</h1>
          <h1 className='nameLibby'>Designs by Libby Richardson</h1>
        </div>
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
