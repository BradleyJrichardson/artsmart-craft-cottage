import React, { Component } from "react"; 
import {Link} from 'react-router-dom';
import styles from '../App.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#86B9B6'}} >
        <Link to="/"><div className="navbar-brand">ICON</div></Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to='/' className="nav-link"> All Works</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown"
            href="#" role="button" aria-haspopup="true" aria-expanded="false">
            Categories</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#!">Category1</a>
                <a className="dropdown-item" href="#!">Category2</a>
              </div>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link"> Cantact Me</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn my-2 px-0 " type="submit"><i class="fas fa-search" aria-hidden="true"></i></button>
          </form>
        </div>
        <Link to="/cart" >
          <div className="cart-button">
          <span className="mr-2">
          <i className='fas fa-cart-plus' />
          </span>
          My Cart
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      );
    }
  }
  
  export default Navbar;