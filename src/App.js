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
import NewReleaseSection from "./components/NewReleaseSection";
import NewReleaseDetails from "./components/NewReleaseDetails";
import WhatsNewSection from "./components/WhatsNewSection";
import CategorySection from "./components/CategorySection";
import SubCategories from "./components/SubCategories";

export default class App extends React.Component {
  state = {
    products: null,
    cart: [],
    cartTotal: 0,
    cartOpen: true,
    hideCart: false
  };

  async componentDidMount() {
    let cart = null;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

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
      // need a return statement here
    });
    if (this.state.cart.length === 1) {
      localStorage.clear();
    }
    let total = this.calcTotal(newCart);
    this.setState(() => {
      return { cart: newCart, cartTotal: total };
    });
  };

  handleClick = () => {
    if (!this.state.popupVisible) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      popupVisible: !prevState.popupVisible
    }));
  };

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  hideCart = () => {
    console.log("from checkout");
    this.setState({
      hideCart: true
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
                decrement: this.decrement,
                cartOpen: this.cartOpen,
                hideCart: this.hideCart
              }}
            >
              <div className="wrapper" onClick={this.handleClick}>
                <Navbar
                  removeCart={this.removeCart}
                  showCart={this.state.showCart}
                  hideCart={this.state.hideCart}
                />

                <Cart />

                <div className="container">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={ProductSection} />
                    <Route path="/productdetails" component={ProductDetails} />

                    <Route path="/newrelease" component={NewReleaseSection} />
                    <Route
                      path="/newreleasedetails"
                      component={NewReleaseDetails}
                    />
                    <Route
                      path="/whatsnewdetails"
                      component={WhatsNewSection}
                    />

                    <Route path="/category" component={CategorySection} />
                    <Route path="/subcategory" component={SubCategories} />
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
