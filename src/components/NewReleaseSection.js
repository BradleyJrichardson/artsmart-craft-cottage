import React, { Component } from "react";
import "./NewReleaseSection.css";
import { Link } from "react-router-dom";
import home2 from '../images/home2.jpg';

export default class NewReleaseSection extends Component {
  render() {
    return (
      <section className='newRealeseSection'>
        <h3>New Release</h3>
        <Link to='/newreleasedetails'>
          <img className="new-released-img" src={home2} alt="placeholder" />
        </Link>
      </section>
    );
  }
}
