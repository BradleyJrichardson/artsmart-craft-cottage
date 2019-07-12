import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { IoIosCart } from "react-icons/io";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='navContainer'>
          <div className='brandContainer'>
            <h1 className='brand'>Artsmart Craft Cottage</h1>
            <h1 className='nameLibby'>Designs by Libby Richardson</h1>
          </div>
          <div className='navLinksContainer'>
            <div>
              <Link to="/">
                <h1>Home</h1>
              </Link>
            </div>
            <div>
              <Link to="/checkout">
                <h1>Checkout</h1>
              </Link>
            </div>
            <div>
              <Link to="/products">
                <span>All products</span>
              </Link>
            </div>
          </div>
          <div className='iconSpacing'>
            <Link to='/checkout'>
              < IoIosCart className='cartIcon'/>
            </Link>
          </div>
        </div>
        {/* <div className='spacingLine'></div> */}
      </nav>
    );
  }
}
