import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

/// https://stripe.com/docs/recipes/elements-react
// test with 4000000360000006
class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_TlwArxmeZUHrZWhICbGMWxA100dG0fErh2">
        <div className="example">
          <h1>React Stripe Elements Example</h1>

          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
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
