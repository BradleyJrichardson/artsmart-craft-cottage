import React, { Component } from "react";
import axios from "axios";

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

// provider
export default class ProductProvider extends Component {
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
      } catch (err) {
        console.log(err);
      }
    }
    // console.log("from context", this.state.products);
  }

  /// TODO
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
  // };

  render() {
    return (
      <ProductContext.Provider value={this.state.products}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductProvider, ProductConsumer };
