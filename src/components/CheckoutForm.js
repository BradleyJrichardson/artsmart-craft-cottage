import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import "./CheckoutForm.css";
import axios from "axios";

/// test with  ~~~~~~ 4000000360000006 ~~~~~~ 🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      complete: false,
      redirect: false,
      coupon: "",
      email: "",
      name: "",
      phone: "",
      address: {
        line1: "",
        city: "",
        state: "",
        country: "",
        postal_code: ""
      }
    };
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  handleAddressChange(e) {
    e.preventDefault();
    const address = this.state.address;
    address[e.target.name] = e.target.value;
    this.setState({ address });
  }
  handleSubmit(e) {
    e.preventDefault();
    let cart = this.props.value.cart;
    this.setState({ fetching: true });
    let { name, email, phone, address, coupon } = this.state;

    let items = cart.map(item => {
      return {
        parent: item.sku,
        amount: item.price,
        quantity: item.quantity
      };
    });
    this.props.stripe
      .createToken({ name: name })
      .then(({ token }) => {
        const order = {
          currency: "aud",
          items: items,
          email: email,
          shipping: {
            name: name,
            phone: phone,
            address: address
          }
        };

        if (coupon) {
          order.coupon = coupon;
        }
        axios
          .post(process.env.REACT_APP_BACK_URL + "/stripe/order/", {
            order,
            source: token.id
          })
          .then(() => {
            this.setState({ fetching: false, redirect: true });
          })
          .catch(error => {
            this.setState({ fetching: false });
          });
      })
      .catch(error => {
        this.setState({ fetching: false });
      });
  }

  render() {
    const state = this.state;
    const fetching = state.fetching;
    const address = state.address;
    const submittable =
      state.email &&
      state.name &&
      state.phone &&
      address.line1 &&
      address.city &&
      address.state &&
      address.country &&
      address.postal_code;
    if (this.state.redirect === true) {
      return <div id="order-message">Your order was created... </div>;
    } else {
      return (
        <div className="stripe-form">
          <form onSubmit={this.handleSubmit}>
            <h1 className="brandTitle">Make Purchase</h1>
            <div className="card-element" />
            <CardElement />
            <div className="card-element" />
            <div>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name:"
                  className="stripe-textbox"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone:"
                  className="stripe-textbox"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email:"
                  className="stripe-textbox"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  name="line1"
                  placeholder="Address:"
                  className="stripe-textbox"
                  onChange={this.handleAddressChange}
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  name="city"
                  placeholder="City:"
                  className="stripe-textbox"
                  onChange={this.handleAddressChange}
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  name="state"
                  placeholder="State:"
                  className="stripe-textbox"
                  onChange={this.handleAddressChange}
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country:"
                  className="stripe-textbox"
                  onChange={this.handleAddressChange}
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  name="postal_code"
                  placeholder="Post Code:"
                  className="stripe-textbox"
                  onChange={this.handleAddressChange}
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  name="coupon"
                  placeholder="Coupon Code:"
                  className="stripe-textbox"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="purch-price">
              {!fetching ? (
                <button
                  type="submit"
                  className="btn btn-danger"
                  disabled={!submittable}
                >
                  Purchase
                </button>
              ) : (
                "Placing order..."
              )}{" "}
              Price:{" "}
              {this.props.value.cartTotal.toLocaleString("en-US", {
                style: "currency",
                currency: "aud"
              })}
            </div>
          </form>
        </div>
      );
    }
  }
}

export default injectStripe(CheckoutForm);
