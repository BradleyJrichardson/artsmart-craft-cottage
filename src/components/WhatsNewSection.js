import React, { Component } from "react";
import "./WhatsNewSection.css";
import { Link } from "react-router-dom";
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';

export default class WhatsNewSection extends Component {
  render() {
    return (
      <section>
        <h3>Whats New Section</h3>
        <div className='whatsnew'>
          <Link to='/whatsnewdetails'>
            <img className="img1" src={img1} alt="Generic placeholder image" />
            <img className="img2" src={img2} alt="Generic placeholder image" />
            <img className="img3" src={img3} alt="Generic placeholder image" />
          </Link>
          
        </div>
        <p>........</p>
      </section>
    );
  }
}
