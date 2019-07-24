import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Cart from "./Cart";
import { IoIosCart } from "react-icons/io";
import categoryPackage from "./categoriesData";

export default class Navbar extends Component {
  // state = {showCart: false};
  constructor(props) {
    super(props);
    this.state = {
      showCart: props.showCart,
      popupVisible: false
    };
  }

  findSubCategory = category => {
    const object = categoryPackage.filter(obj => obj.category === category);
    if (object.length > 0) {
      return object[0].subcategories;
    }
  };

  handleClick = () => {
    if (!this.state.popupVisible) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState(prevState => ({
      popupVisible: !prevState.popupVisible
    }));
  };

  handleOutsideClick = e => {
    let element = document.getElementById("cart");
    if (element && element.contains(e.target)) {
      return;
    }
    this.handleClick();
  };

  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#86B9B6" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/">
            <div className="navbar-brand ">
              <p className="brand mb-0">Artsmart Craft Cottage</p>
              <h3 className="name-libby">Designs by Libby Richardson</h3>
            </div>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link to="/checkout" className="nav-link">
                  Checkout
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/products" className="nav-link">
                  All products
                </Link>
              </li>
            </ul>
          </div>
          <div className="cart-button">
            <span className="mr-2">
              <IoIosCart
                className="cart-icon fas fa-cart-plus fa-3x"
                onClick={this.handleClick}
              />
              {this.state.popupVisible && <Cart />}
            </span>
          </div>
        </nav>
        <nav
          className="navbar navbar-expand-sm navbar-light"
          style={{ backgroundColor: "white" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>Categories</span>
          </button>

          <div
            className="collapse navbar-collapse collapse navbar2"
            id="navbarSupportedContent1"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/subcategory",
                    state: {
                      subcategories: this.findSubCategory("BOM QUILTS")
                    }
                  }}
                  className="nav-link"
                >
                  {" "}
                  BOM QUILTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/subcategory",
                    state: {
                      subcategories: this.findSubCategory("STITCHERY PATTERNS")
                    }
                  }}
                  className="nav-link"
                >
                  {" "}
                  STITCHERY PATTERNS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/subcategory",
                    state: {
                      subcategories: this.findSubCategory("APPLIQUE PATTERNS")
                    }
                  }}
                  className="nav-link"
                >
                  {" "}
                  APPLIQUE PATTERNS
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/subcategory",
                    state: { subcategories: this.findSubCategory("BUTTONS") }
                  }}
                  className="nav-link"
                >
                  {" "}
                  BUTTONS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/category",
                    state: { category: "christmas" }
                  }}
                  className="nav-link"
                >
                  {" "}
                  CHRISTMAS
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  OTHER Categories
                </a>
                <div className="dropdown-menu">
                  <Link
                    to={{
                      pathname: "/category",
                      state: { category: "quilt patterns" }
                    }}
                    className="nav-link"
                  >
                    {" "}
                    QUILT PATTERNS
                  </Link>
                  <Link
                    to={{
                      pathname: "/category",
                      state: { category: "quilt sets" }
                    }}
                    className="nav-link"
                  >
                    {" "}
                    QUILT SETS
                  </Link>
                  <Link
                    to={{
                      pathname: "/category",
                      state: { category: "dvd" }
                    }}
                    className="nav-link"
                  >
                    {" "}
                    DVD
                  </Link>
                  <Link
                    to={{
                      pathname: "/category",
                      state: { category: "threads" }
                    }}
                    className="nav-link"
                  >
                    {" "}
                    THREADS
                  </Link>
                  <Link
                    to={{
                      pathname: "/category",
                      state: { category: "embellishment packs" }
                    }}
                    className="nav-link"
                  >
                    {" "}
                    EMBELLISHMENT PACKS
                  </Link>
                  <Link
                    to={{
                      pathname: "/category",
                      state: { category: "table runners" }
                    }}
                    className="nav-link"
                  >
                    {" "}
                    TABLE RUNNERS
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
