import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_TlwArxmeZUHrZWhICbGMWxA100dG0fErh2">
        <Elements>
          <CheckoutForm />
        </Elements>
      </StripeProvider>
    );
  }
}

export default App;
