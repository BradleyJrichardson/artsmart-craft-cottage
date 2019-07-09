import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

import axios from "axios";

/// https://stripe.com/docs/recipes/elements-react
// test with 4000000360000006

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/stripe/charge", {
      method: "POST",
      body: token.id
    });

    if (response.ok) this.setState({ complete: true });
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

{
  /* we need to make a form that passes all the data we need from to schema 
      we can just have one name field and we can split it serverside 
      we might even be able to have one address field and split it
    email:
    type: String,

    given_name: 
    type: Number,
  
    surname: 
    type: String,
  
    date_created: 
    type: Date,
  
    street_address: 
    type: String,
  
    surburb: 
    type: String,

    state:  
    type: String,
  
    post_code: 
    type: String,
  
    country: 
    type: String,
*/
}
