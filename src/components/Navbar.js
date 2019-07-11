import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../App.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <div>ICON</div>
        </Link>

        <div>
          <ul>
            <li>
              <Link to="/"> All Works</Link>
            </li>
            <li>
              <a
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
              <div>
                <a href="#!">Category1</a>
                <a href="#!">Category2</a>
              </div>
            </li>
            <li>
              <Link to="/"> Cantact Me</Link>
            </li>
          </ul>
          <form>
            <input type="text" placeholder="Search" aria-label="Search" />
            <button type="submit" />
          </form>
        </div>
        <Link to="/cart">
          <div>My Cart</div>
        </Link>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
      </nav>
    );
  }
}

export default Navbar;
