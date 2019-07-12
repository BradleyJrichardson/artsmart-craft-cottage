import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { IoIosCart } from "react-icons/io";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='nav-container'>
          <div className='brand-container'>
            <h1 className='brand'>Artsmart Craft Cottage</h1>
            <h1 className='name-libby'>Designs by Libby Richardson</h1>
          </div>
          <div className='nav-links-container'>
            <div>
              <Link to="/">
                <h1 className='nav-font'>Home</h1>
              </Link>
            </div>
            <div>
              <Link to="/checkout">
                <h1 className='nav-font'>Checkout</h1>
              </Link>
            </div>
            <div>
              <Link to="/products">
                <h1 className='nav-font'>All products</h1>
              </Link>
            </div>
          </div>
          <div className='icon-spacing'>
            <Link to='/checkout'>
              < IoIosCart className='cart-icon'/>
            </Link>
          </div>
        </div>
        {/* second navbar */}
        <div className='second-nav'>
          <div>
            <Link>
              <h1>Wholesale</h1>
            </Link>
          </div>
          <div>
            <Link>
              <h1>Quilts</h1>
            </Link>
          </div>
          <div>
            <Link>
              <h1>BOM Quilts</h1>
            </Link>
          </div>
          <div>
            <Link>
              <h1>Stitcheries</h1>
            </Link>
          </div>
          <div>
            <Link>
              <h1>Christmas</h1>
            </Link>
          </div>
          <div>
            <Link>
              <h1>Bits & Pieces</h1>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
