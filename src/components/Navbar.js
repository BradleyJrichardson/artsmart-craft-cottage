import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Cart from './Cart'
// import { ThemeConsumer } from "../context/theme";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: props.showCart,
      popupVisible: false
    }
  }

  handleClick = () => {
    if (!this.state.popupVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }));
  }

  handleOutsideClick = (e) => {
    let element = document.getElementById("cart")
    if (element && element.contains(e.target)) {
      // console.log('clicked outside');
      return;
    }
    
    this.handleClick();
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#86B9B6'}} >
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
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
                <Link to='/' className="nav-link"> Home</Link>
              </li>
              
              <li className="nav-item mx-3">
                <Link to='/checkout' className="nav-link"> checkout</Link>
              </li>
              <li className="nav-item mx-3">
                <Link to='/products' className="nav-link"> All products</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 width-3rem height-1rem" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn my-2 px-0 " type="submit"><i className="fas fa-search" aria-hidden="true"></i></button>
            </form>
          </div>
            <div className="cart-button" >
              <span className="mr-2">
              <i className='fas fa-cart-plus' onClick={this.handleClick} />
              {/* <ThemeConsumer> */}
                {/* {value => {
                  console.log(value.cart)
                  return value.cart.map((cart, index) => {
                    return <h1 key={index}>{cart.quantity}</h1>
                  })
                }} */}
              {/* </ThemeConsumer> */}
              {this.state.popupVisible && 
                <Cart />}
              </span>
              0
              </div>
        </nav>
        <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor: 'white'}} >
                
                
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
          <span> Categories</span>
        </button>
        
        <div className="collapse navbar-collapse navbar2" id="navbarSupportedContent1">
          <ul className="navbar-nav mx-5">
            <li className="nav-item mx-3">
              <Link to={{
                pathname:'/category', 
                state:{category: "bom quilts"}
              }} className="nav-link">BOM QUILTS</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to={{
                pathname: "/category",
                state:{category: "stitchery patterns"}
              }} className="nav-link">STITCHERY PATTERNS</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to={{
                pathname: "/category",
                state:{category: "applique patterns"}
              }} className="nav-link">APPLIQUE PATTERNS</Link>
            </li>
            
            <li className="nav-item mx-3">
              <Link to={{
                pathname: "/category",
                state:{category: "pdf patterns"}
              }} className="nav-link">PDF PATTERNS</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to={{
                pathname: "/category",
                state:{category: "christmas"}
              }} className="nav-link">CHRISTMAS</Link>
            </li>
            <li className="nav-item dropdown mx-3">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown"
            href="#" role="button" aria-haspopup="true" aria-expanded="false">
            OTHER Categories</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#!">BUTTONS</a>
                <a className="dropdown-item" href="#!">DVD</a>
                <a className="dropdown-item" href="#!">THREADS</a>
                <a className="dropdown-item" href="#!">BAGS</a>
                <a className="dropdown-item" href="#!">TABLE RUNNERS</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      </>
    );
  }
}