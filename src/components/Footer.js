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
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
