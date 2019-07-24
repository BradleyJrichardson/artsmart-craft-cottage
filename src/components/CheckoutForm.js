import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import "./CheckoutForm.css";
import axios from "axios";

// https://stripe.com/docs/recipes/elements-react
/// test with  ~~~~~~ 4000000360000006 ~~~~~~ 🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺🇦🇺

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      complete: false,
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
    // e.preventDefault();
    let cart = this.props.value.cart;
    this.setState({ fetching: true });
    const state = this.state;

    let items = cart.map(item => {
      return {
        parent: item.sku,
        amount: item.price,
        quantity: item.quantity
      };
    });
    this.props.stripe
      .createToken({ name: state.name })
      .then(({ token }) => {
        const order = {
          currency: "aud",
          items: items,
          email: state.email,
          shipping: {
            name: state.name,
            phone: state.phone,
            address: state.address
          }
        };

        if (state.coupon) {
          order.coupon = state.coupon;
        }
        console.log(token);
        axios
          .post(process.env.REACT_APP_BACK_URL + "/stripe/order/", {
            order,
            source: token.id
          })
          .then(() => {
            this.setState({ fetching: false });
            alert(`Purchase made`);
          })
          .catch(error => {
            this.setState({ fetching: false });
            console.log(error);
          });
      })
      .catch(error => {
        this.setState({ fetching: false });
        console.log(error);
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
    return (
      <div className="stripe-form">
        <form onSubmit={this.handleSubmit}>
          <h1 className="brandTitle">Make Purchase</h1>
          <div className="card-element" />
          <CardElement />
          <div className="card-element" />
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name:"
              className="stripe-textbox"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone:"
              className="stripe-textbox"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email:"
              className="stripe-textbox"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="line1"
              placeholder="Address:"
              className="stripe-textbox"
              onChange={this.handleAddressChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="City:"
              className="stripe-textbox"
              onChange={this.handleAddressChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="state"
              placeholder="State:"
              className="stripe-textbox"
              onChange={this.handleAddressChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="country"
              placeholder="Country:"
              className="stripe-textbox"
              onChange={this.handleAddressChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="postal_code"
              placeholder="Post Code:"
              className="stripe-textbox"
              onChange={this.handleAddressChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="coupon"
              placeholder="Coupon Code:"
              className="stripe-textbox"
              onChange={this.handleChange}
            />
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

export default injectStripe(CheckoutForm);
