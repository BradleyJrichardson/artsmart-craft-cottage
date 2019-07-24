import React, { Component } from "react";
import "./NewReleaseSection.css";
import { Link } from "react-router-dom";
import home2 from "../images/home2.jpg";

export default class NewReleaseSection extends Component {
  render() {
    return (
      <Link to="/newreleasedetails">
        <div
          id="new-release-section"
          className="card bg-light text-black w-100"
        >
          <img src={home2} className="card-img" alt="Whats new" />
          <div className="card-img-overlay p-1 ">
            <h3 className="new-release-text">New Release</h3>
          </div>
        </div>
      </Link>
    );
  }
}
