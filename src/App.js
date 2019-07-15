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
import Cart from "./components/Cart";

export default class App extends React.Component {
  state = {
    products: null,
    cart: [],
    cartTotal: 90,
    cartOpen: true
  };

  async componentDidMount() {
    if (this.state.products === null) {
      try {
        const response = await axios.get("/store/index");
        this.setState({
          products: response.data
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  addToCart = product => {
    let { product_id, sku, price, title } = product;

    const productObj = {
      title: title,
      product_id: product_id,
      sku: sku,
      price: price
    };
    this.setState(() => {
      return {
        cart: [...this.state.cart, productObj]
      };
    });
    this.calcTotal();
  };

  calcTotal = () => {
    let prices = this.state.cart.map(productObj => {
      return productObj.price;
    });
    let total = prices.reduce((a, b) => a + b, 0);

    this.setState(() => {
      return {
        cartTotal: total
      };
    });
  };

  clearCart = () => {
    this.setState(() => {
      return { cart: [] };
    });
  };

  removeFromCart = () => {};

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
            <ThemeProvider
              value={{
                ...this.state,
                addToCart: this.addToCart,
                clearCart: this.clearCart
              }}
            >
              <div className="wrapper">
                <Navbar />
                {/* conditionally render the Cart, we will have to create a
                button which will be the cart icon to pop open the cart modal or
                slider */}
                {this.state.cartOpen && <Cart />}
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
