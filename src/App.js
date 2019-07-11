import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
         
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
      
        
      // <StripeProvider apiKey="pk_test_TlwArxmeZUHrZWhICbGMWxA100dG0fErh2">
      //   <Elements>
      //     <CheckoutForm />
      //   </Elements>
      // </StripeProvider>
    );
  }
}

export default App;
