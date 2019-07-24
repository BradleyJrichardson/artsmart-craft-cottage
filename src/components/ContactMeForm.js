import React, { Component } from "react";
import "./ContactMeForm.css";

// Form using Formspree for customers to contact the client.
export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", company: "", email: "", phone: "", message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form
        action="https://formspree.io/artsmartcraftcottage@gmail.com"
        method="POST"
      >
        <h1 className="brandTitle1">Contact Me</h1>
        <div className="form-group">
          <label>
            <input
              placeholder="Name:"
              className="form-control"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <label>
            <input
              placeholder="Email:"
              className="form-control"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </label>
          <label>
            <input
              placeholder="Phone:"
              className="form-control"
              type="tel"
              value={this.state.phone}
              onChange={this.handleChange}
              name="phone"
            />
          </label>
          <textarea
            placeholder="Message:"
            className="form-control"
            type="text"
            value={this.state.message}
            onChange={this.handleChange}
            name="message"
          />
          <label>
            <input
              type="submit"
              className="form-control submit-button"
              value="Send Message"
            />
          </label>
        </div>
      </form>
    );
  }
}
