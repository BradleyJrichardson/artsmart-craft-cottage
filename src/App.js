import React from "react";
import { Switch, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
          {/* <Route path="/newrelease" component={NewReleaseDetails} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

// import { Elements, StripeProvider } from "react-stripe-elements";
// import CheckoutForm from "./components/CheckoutForm";
{
  /* <StripeProvider apiKey="pk_test_TlwArxmeZUHrZWhICbGMWxA100dG0fErh2">
<Elements>
  <CheckoutForm />
</Elements>
</StripeProvider>
; */
}
