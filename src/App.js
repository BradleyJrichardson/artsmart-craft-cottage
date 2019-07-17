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
    cartTotal: 0,
    cartOpen: true
  };

  async componentDidMount() {
    let cart = null;
    cart = JSON.parse(localStorage.getItem("cart"));

    console.log(cart);
    if (cart) {
      this.setState({
        cart: cart
      });
    }

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

  componentDidUpdate() {
    if (this.state.cart.length) {
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }
  }

  componentWillUnmount() {}

  increment = product_id => {
    let tempRemoved = this.state.cart.filter(products => {
      if (products.product_id !== product_id) {
        return products;
      }
    });

    let product = this.state.cart.find(
      products => products.product_id === product_id
    );
    product.quantity = product.quantity + 1;
    product.totalPrice = product.price * product.quantity;

    let newCart;
    if (tempRemoved.length > 1) {
      newCart = [...tempRemoved, product];
    } else {
      tempRemoved.push(product);
      newCart = tempRemoved;
    }
    let total = this.calcTotal(newCart);

    this.setState(() => {
      return {
        cart: newCart,
        cartTotal: total
      };
    });
  };

  decrement = product_id => {
    let product = this.state.cart.find(
      products => products.product_id === product_id
    );

    if (product.quantity === 1) {
      if (this.state.cart.length === 1) {
        localStorage.clear();
      }
      let newCart = this.state.cart.filter(item => {
        if (item.product_id !== product_id) {
          return item;
        }
      });
      console.log(newCart);
      let total = this.calcTotal(newCart);
      this.setState(() => {
        return {
          cart: newCart,
          cartTotal: total
        };
      });
    } else {
      let tempRemoved = this.state.cart.filter(products => {
        if (products.product_id !== product_id) {
          return products;
        }
      });

      product.quantity = product.quantity - 1;
      product.totalPrice = product.price * product.quantity;

      let newCart;
      if (tempRemoved.length > 1) {
        newCart = [...tempRemoved, product];
      } else {
        tempRemoved.push(product);
        newCart = tempRemoved;
      }
      let total = this.calcTotal(newCart);

      this.setState(() => {
        return {
          cart: newCart,
          cartTotal: total
        };
      });
    }
  };

  addToCart = product => {
    if (
      this.state.cart.find(
        products => products.product_id === product.product_id
      )
    ) {
      this.increment(product.product_id);
    } else {
      let { product_id, sku, price, title } = product;

      const productObj = {
        title: title,
        product_id: product_id,
        sku: sku,
        price: price,
        quantity: 1,
        totalPrice: price
      };

      let newCart = [...this.state.cart, productObj];
      let total = this.calcTotal(newCart);

      this.setState(() => {
        return {
          cart: newCart,
          cartTotal: total
        };
      });
    }
  };

  calcTotal = newCart => {
    let prices = newCart.map(productObj => {
      return productObj.totalPrice;
    });

    let total = 0;
    if (newCart.length === 1) {
      total = newCart[0].totalPrice;
    } else {
      total = prices.reduce((a, b) => a + b, 0);
    }
    return total;
  };

  clearCart = () => {
    console.log("clearing cart");
    localStorage.clear();
    this.setState(() => {
      return { cart: [] };
    });
  };

  removeItem = product_id => {
    let newCart = this.state.cart.filter(item => {
      if (item.product_id !== product_id) {
        return item;
      }
    });
    if (this.state.cart.length === 1) {
      localStorage.clear();
    }
    let total = this.calcTotal(newCart);
    this.setState(() => {
      return { cart: newCart, cartTotal: total };
    });
  };

  render() {
    if (this.state.products != null) {
      return (
        <Router>
          <StripeProvider apiKey="pk_test_TlwArxmeZUHrZWhICbGMWxA100dG0fErh2">
            <ThemeProvider
              value={{
                ...this.state,
                addToCart: this.addToCart,
                clearCart: this.clearCart,
                removeItem: this.removeItem,
                increment: this.increment,
                decrement: this.decrement
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
