import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
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
    const state = this.state;

    let items = cart.map(item => {
      return {
        parent: item.sku,
        amount: item.price * 100,
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
            address: state.address
          }
        };

        if (state.coupon) {
          order.coupon = state.coupon;
        }

        axios
          .post("/stripe/order/", {
            order,
            source: token.id
          })
          .then(() => {
            this.setState({ fetching: false });
            alert(`Cheers for your money`);
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
      address.line1 &&
      address.city &&
      address.state &&
      address.country &&
      address.postal_code;
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <div>
          Name: <input type="text" name="name" onChange={this.handleChange} />
        </div>
        <div>
          Email: <input type="text" name="email" onChange={this.handleChange} />
        </div>
        <div>
          Address Line:
          <input type="text" name="line1" onChange={this.handleAddressChange} />
        </div>
        <div>
          City:
          <input type="text" name="city" onChange={this.handleAddressChange} />
        </div>
        <div>
          State:
          <input type="text" name="state" onChange={this.handleAddressChange} />
        </div>
        <div>
          Country:
          <input
            type="text"
            name="country"
            onChange={this.handleAddressChange}
          />
        </div>
        <div>
          Postal Code:
          <input
            type="text"
            name="postal_code"
            onChange={this.handleAddressChange}
          />
        </div>
        <div>
          Coupon Code:
          <input type="text" name="coupon" onChange={this.handleChange} />
        </div>
        {!fetching ? (
          <button type="submit" disabled={!submittable}>
            Purchase
          </button>
        ) : (
          "Placing order..."
        )}
        Price:
        {this.props.value.cartTotal.toLocaleString("en-US", {
          style: "currency",
          currency: "aud"
        })}
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
