import React, { Component } from "react";
import "../App.css";
import "./Footer.css";
import ContactMeForm from "./ContactMeForm";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer-container">
          <div className="contact-me">
            <ContactMeForm />
          </div>
          <div className="bio-blog">bio</div>
          <div className="lilly-image">image</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
