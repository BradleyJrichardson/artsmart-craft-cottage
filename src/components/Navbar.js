import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoIosCart } from "react-icons/io";
import Cart from './Cart'

export default class Navbar extends Component {
  state = {showCart: true}

  handleCart = () => {
    if (this.state.showCart) {
      this.setState({
        showCart: false
      })
    } else {
      this.setState({
        showCart: true
      })
    }
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-container">
            <div className="brand-container">
              <h1 className="brand">Artsmart Craft Cottage</h1>
              <h1 className="name-libby">Designs by Libby Richardson</h1>
            </div>
            <div className="nav-links-container">
              <div>
                <Link to="/">
                  <h1 className="nav-font">Home</h1>
                </Link>
              </div>
              <div>
                <Link to="/checkout">
                  <h1 className="nav-font">Checkout</h1>
                </Link>
              </div>
              <div>
                <Link to="/products">
                  <h1 className="nav-font">All products</h1>
                </Link>
              </div>
            </div>
            
            <div className="icon-spacing" onClick={this.handleCart}>
              {/* <Link to="/"> */}
                <IoIosCart className="cart-icon"/>
              {/* </Link> */}
            </div>
            {this.state.showCart && 
            <Cart />}
          </div>
        </nav>
        {/* second navbar */}
        <nav>
          <div className="second-nav">
            <div className="second-nav-font">
              <Link
                to={{
                  pathname: "/category",
                  state: {
                    category: "quilts"
                  }
                }}
              >
                Quilts
              </Link>
            </div>
            <div className="second-nav-font">
              <Link
                to={{
                  pathname: "/category",
                  state: {
                    category: "BOM"
                  }
                }}
              >
                BOM Quilts
              </Link>
            </div>
            <div className="second-nav-font">
              <Link
                to={{
                  pathname: "/category",
                  state: {
                    category: "stitcheries"
                  }
                }}
              >
                Stitcheries
              </Link>
            </div>
            <div className="second-nav-font">
              <Link
                to={{
                  pathname: "/category",
                  state: {
                    category: "christmas"
                  }
                }}
              >
                Christmas
              </Link>
            </div>
            <div className="second-nav-font">
              <Link
                to={{
                  pathname: "/category",
                  state: {
                    category: "bits"
                  }
                }}
              >
                Bits & Pieces
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
