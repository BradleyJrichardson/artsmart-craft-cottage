import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./context/theme";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import axios from "axios";
import { Elements, StripeProvider } from "react-stripe-elements";
import ProductDetails from "./components/ProductDetails";

export default class App extends React.Component {
  state = {
    products: null,
    cart: [],
    cartSubTotal: 0,
    cartTotal: 90
  };

  async componentDidMount() {
    if (this.state.products === null) {
      try {
        const response = await axios.get("/store/index");
        this.setState({
          products: response.data
        });
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    console.log("from App.js", this.state.products);
  }

  // addToCart = () => {};
  // increment = () => {};
  // decrement = () => {};
  // getTotals = () => {};
  // addTotals = () => {};
  // removeItem = id => {};
  // clearCart = () => {
  //   this.setState(() => {
  //     return { cart: [] };
  //   });

  render() {
    if (this.state.products != null) {
      return (
        <Router>
          <StripeProvider apiKey="pk_test_TlwArxmeZUHrZWhICbGMWxA100dG0fErh2">
            <ThemeProvider value={this.state}>
              <div className="wrapper">
                <Navbar />

                <div className="container">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={ProductSection} />
                    <Route path="/productdetails" component={ProductDetails} />
                    <Elements>
                      <Route path="/checkout" component={Checkout} />
                    </Elements>
                  </Switch>
                </div>

                <Footer />
              </div>
            </ThemeProvider>
          </StripeProvider>
        </Router>
      );
    } else {
      return null;
    }
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
